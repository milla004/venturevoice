
import { NextRequest, NextResponse } from 'next/server';
import { sendToCloseGPT, transformVogentToCloseGPT } from '@/lib/closegpt';
import { sendBookingConfirmation, addToEmailItAudience } from '@/lib/emailit';
import { createBooking, findClosestSlot, formatBookingDate, getBookingPageUrl } from '@/lib/calcom';
import { parseVogentDateTime } from '@/lib/neetocal';
import { logWebhook } from '@/lib/webhook-logger';

// Webhook signing secret from Vogent
const WEBHOOK_SECRET = 'WeC4OPbk6QQeWgT';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 📝 STORE WEBHOOK FOR DEBUGGING
    logWebhook(body);
    
    // 🔍 DETAILED LOGGING - Log the ENTIRE webhook payload
    console.log('=== VOGENT WEBHOOK RECEIVED ===');
    console.log('Event Type:', body.event);
    console.log('Dial ID:', body.dial_id);
    console.log('Timestamp:', new Date().toISOString());
    console.log('Full Payload:', JSON.stringify(body, null, 2));
    console.log('===============================');

    // Process different webhook events
    switch (body.event) {
      case 'dial.completed':
        // Call completed - basic status update
        console.log('📞 Call completed:', body.data);
        break;
        
      case 'dial.transcript':
        // Transcript received - could store for later reference
        console.log('📝 Transcript received for dial:', body.dial_id);
        break;
        
      case 'dial.extractor':
        // THIS IS THE MAIN EVENT - Structured data extracted from call
        console.log('🔍 Processing extracted data event...');
        await handleExtractedData(body);
        break;
        
      default:
        console.log('⚠️ Unknown event type:', body.event);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Webhook processing error:', error);
    return NextResponse.json(
      { success: false, error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handleExtractedData(webhookData: any) {
  try {
    // Handle double-nested payload structure from Vogent
    const payload = webhookData.payload?.payload || webhookData.payload;
    const aiResult = payload?.ai_result;
    
    if (!aiResult) {
      console.log('⚠️ No AI result data found in webhook');
      console.log('   Webhook structure:', JSON.stringify(webhookData, null, 2));
      return;
    }

    console.log('📊 AI Result Data Summary:');
    console.log('  - Dial ID:', payload.dial_id);
    console.log('  - Name:', aiResult.name);
    console.log('  - Email:', aiResult.email);
    console.log('  - Callback Date:', aiResult.callback_date);
    console.log('  - Callback Time:', aiResult.callback_time);
    console.log('  - Call Outcome:', aiResult.call_outcome);
    console.log('  - Notes:', aiResult.notes);

    const nameParts = (aiResult.name || '').split(' ');
    const firstName = nameParts[0] || 'Customer';
    const lastName = nameParts.slice(1).join(' ');

    // Determine if we should process this lead
    const shouldProcessLead = 
      aiResult.call_outcome === 'interested' ||
      aiResult.call_outcome === 'callback';

    if (!shouldProcessLead) {
      console.log('⏭️ Skipping lead processing - call outcome:', aiResult.call_outcome);
      return;
    }

    // 1. ADD TO EMAILIT AUDIENCE (for sales follow-ups)
    if (aiResult.email) {
      const audienceSuccess = await addToEmailItAudience({
        email: aiResult.email,
        first_name: firstName,
        last_name: lastName,
        custom_fields: {
          phone: payload.to_number || '',
          call_outcome: aiResult.call_outcome || '',
          callback_date: aiResult.callback_date || '',
          callback_time: aiResult.callback_time || '',
          source: 'Vogent AI Voice',
        },
      });

      if (audienceSuccess) {
        console.log('✅ Successfully added to EmailIt audience for follow-ups');
      } else {
        console.log('⚠️ EmailIt audience subscription failed or not configured');
      }
    }

    // 2. CREATE BOOKING VIA CAL.COM API (if appointment date/time provided)
    let bookingData = null;
    let bookingLink = null;

    console.log('🗓️ Checking booking requirements:');
    console.log('  - Has email?', !!aiResult.email, '→', aiResult.email);
    console.log('  - Has callback_date?', !!aiResult.callback_date, '→', aiResult.callback_date);
    console.log('  - Has callback_time?', !!aiResult.callback_time, '→', aiResult.callback_time);

    if (aiResult.callback_date && aiResult.callback_time && aiResult.email) {
      try {
        console.log('📅 Creating booking via Cal.com API...');
        
        // Parse the requested date/time
        const requestedDateTime = parseVogentDateTime(
          aiResult.callback_date,
          aiResult.callback_time
        );
        console.log('✅ Parsed requested time:', requestedDateTime);
        
        // Find the closest available slot to the requested time
        console.log('🔍 Finding closest available slot...');
        const closestSlot = await findClosestSlot(new Date(requestedDateTime), 'America/New_York');
        
        if (!closestSlot) {
          console.log('⚠️ No available slots found - using fallback booking page URL');
          bookingLink = getBookingPageUrl();
        } else {
          console.log('✅ Found available slot:', closestSlot);
          
          // Create the booking using Cal.com API v1
          console.log('📝 Creating booking on Cal.com...');
          const bookingResult = await createBooking({
            name: aiResult.name || `${firstName} ${lastName}`.trim(),
            email: aiResult.email,
            phone: payload.to_number || undefined,
            startTime: closestSlot,
            timeZone: 'America/New_York',
            notes: aiResult.notes || `Call outcome: ${aiResult.call_outcome}`,
          });
          
          // v1 API returns booking directly (not wrapped in { booking: {...} })
          if (bookingResult && bookingResult.id) {
            bookingData = bookingResult;
            bookingLink = `https://cal.com/booking/${bookingData.uid}`;
            console.log('✅ Cal.com booking created successfully!');
            console.log('   Booking ID:', bookingData.id);
            console.log('   Booking UID:', bookingData.uid);
            console.log('   Start Time:', bookingData.startTime);
            console.log('   Google Meet URL:', bookingData.videoCallUrl);
          }
        }
      } catch (error) {
        console.error('❌ Error creating Cal.com booking:', error);
        console.log('   Using fallback booking page URL');
        bookingLink = getBookingPageUrl();
      }
    } else {
      console.log('⏭️ Skipping booking creation - missing required data');
      console.log('   Missing:', 
        !aiResult.email ? 'email' : '',
        !aiResult.callback_date ? 'callback_date' : '',
        !aiResult.callback_time ? 'callback_time' : ''
      );
    }

    // 3. SEND BOOKING CONFIRMATION EMAIL (if booking was created or link available)
    if ((bookingData || bookingLink) && aiResult.email) {
      const confirmationData = {
        email: aiResult.email,
        firstName,
        lastName,
        phone: payload.to_number || '',
        bookingDate: bookingData ? formatBookingDate(bookingData.startTime) : aiResult.callback_date,
        bookingTime: bookingData ? '' : aiResult.callback_time, // Time included in formatted date
        bookingLink: bookingLink || getBookingPageUrl(),
        notes: aiResult.notes,
        bookingConfirmed: !!bookingData, // True if actual booking was created
      };

      const emailSuccess = await sendBookingConfirmation(confirmationData);
      
      if (emailSuccess) {
        console.log('✅ Booking confirmation email sent');
      } else {
        console.log('⚠️ Booking confirmation email failed');
      }
    }

    // 4. SYNC TO CLOSEGPT CRM (optional - if you still want CRM tracking)
    const closeGPTContact = transformVogentToCloseGPT(payload);
    const closeGPTSuccess = await sendToCloseGPT(closeGPTContact);
    
    if (closeGPTSuccess) {
      console.log('✅ Successfully synced to CloseGPT CRM');
    } else {
      console.log('⚠️ CloseGPT sync failed or not configured');
    }

    // 5. LOG PROCESSING SUMMARY
    console.log('✅ Call processing complete:', {
      name: aiResult.name,
      email: aiResult.email,
      outcome: aiResult.call_outcome,
      emailit_audience: !!aiResult.email,
      booking_created: !!bookingData,
      booking_id: bookingData?.id,
      booking_uid: bookingData?.uid,
      booking_link: bookingLink,
      booking_start: bookingData?.startTime,
      closegpt_synced: closeGPTSuccess,
    });

  } catch (error) {
    console.error('Error handling extracted data:', error);
  }
}

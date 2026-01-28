
/**
 * EmailIt Integration
 * Handles email confirmations and audience subscriptions
 */

interface BookingConfirmationData {
  email: string;
  firstName: string;
  lastName?: string;
  phone: string;
  bookingDate?: string;
  bookingTime?: string;
  bookingLink?: string;
  notes?: string;
  bookingConfirmed?: boolean; // True if booking was created via API
}

interface SubscriberData {
  email: string;
  first_name: string;
  last_name?: string;
  custom_fields?: Record<string, string>;
}

/**
 * Send booking confirmation email via EmailIt
 */
export async function sendBookingConfirmation(data: BookingConfirmationData): Promise<boolean> {
  try {
    const { email, firstName, lastName, phone, bookingDate, bookingTime, bookingLink, notes, bookingConfirmed } = data;

    const isConfirmed = bookingConfirmed || false;
    const headerTitle = isConfirmed ? '✅ Your Appointment is Confirmed!' : '📅 Confirm Your Appointment';
    const headerSubtitle = isConfirmed 
      ? 'Your meeting is scheduled and confirmed' 
      : 'One click to lock in your time with us!';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${headerTitle}</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, ${isConfirmed ? '#10b981 0%, #059669' : '#2563eb 0%, #1e40af'} 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">${headerTitle}</h1>
            <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">${headerSubtitle}</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1e40af; margin-top: 0;">Hi ${firstName}! 👋</h2>
            <p style="font-size: 16px; color: #333;">
              ${isConfirmed 
                ? '🎉 Great news! Your appointment with VentureVoice AI has been successfully scheduled:' 
                : 'Thanks for your interest in VentureVoice AI! Based on our call, we\'ve reserved a time slot for you:'}
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid ${isConfirmed ? '#10b981' : '#2563eb'};">
              <p style="margin: 5px 0;"><strong>📅 Date & Time:</strong> ${bookingDate}${bookingTime ? ` at ${bookingTime}` : ''}</p>
              <p style="margin: 5px 0;"><strong>📞 Duration:</strong> 15 minutes</p>
              <p style="margin: 5px 0;"><strong>📍 Meeting Type:</strong> Video Call (link in calendar invite)</p>
              ${isConfirmed ? '<p style="margin: 5px 0; color: #10b981; font-weight: bold;">✅ Status: CONFIRMED</p>' : ''}
            </div>
            
            ${bookingLink && !isConfirmed ? `
              <div style="text-align: center; margin: 30px 0;">
                <a href="${bookingLink}" style="display: inline-block; background: #10b981; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  ✅ Confirm Your Appointment
                </a>
                <p style="margin: 10px 0; font-size: 14px; color: #666;">Click the button above to finalize your booking</p>
              </div>
            ` : ''}
            
            ${bookingLink && isConfirmed ? `
              <div style="text-align: center; margin: 30px 0;">
                <a href="${bookingLink}" style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  📋 View Booking Details
                </a>
                <p style="margin: 10px 0; font-size: 14px; color: #666;">Reschedule or add to your calendar</p>
              </div>
            ` : ''}
            
            ${notes ? `
              <h2 style="color: #2563eb; margin-top: 30px;">📝 Notes from Your Call</h2>
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 0;">${notes}</p>
              </div>
            ` : ''}
            
            <h2 style="color: #059669; margin-top: 30px;">What to Expect</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>We'll call you at the scheduled time from ${phone}</li>
                <li>The call typically lasts 15-30 minutes</li>
                <li>We'll discuss your specific needs and answer any questions</li>
                <li>You'll receive a custom proposal within 24 hours</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding: 20px; background: #eff6ff; border-radius: 8px;">
              <p style="margin: 0; font-size: 16px; color: #1e40af;">Need to reschedule or have questions?</p>
              <p style="margin: 10px 0; color: #1e40af;">Call us at (555) 123-4567 or reply to this email</p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p style="margin: 5px 0;">VentureVoice AI - Smart Answering Service</p>
            <p style="margin: 5px 0;">
              <a href="https://venturevoice.io" style="color: #2563eb; text-decoration: none;">venturevoice.io</a>
            </p>
          </div>
        </body>
      </html>
    `;

    const response = await fetch('https://api.emailit.com/v1/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.EMAILIT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'VentureVoice AI <noreply@venturevoice.io>',
        to: email,
        reply_to: 'support@venturevoice.io',
        subject: isConfirmed 
          ? '✅ Appointment Confirmed - VentureVoice AI' 
          : (data.bookingLink ? '📅 Confirm Your Appointment with VentureVoice AI' : '✅ Thanks for Your Interest!'),
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('EmailIt API error:', errorData);
      return false;
    }

    console.log('Booking confirmation sent successfully to:', email);
    return true;
  } catch (error) {
    console.error('Error sending booking confirmation:', error);
    return false;
  }
}

/**
 * Add subscriber to EmailIt audience (autoresponder)
 */
export async function addToEmailItAudience(subscriber: SubscriberData): Promise<boolean> {
  try {
    const { email, first_name, last_name, custom_fields } = subscriber;
    const audienceToken = process.env.EMAILIT_AUDIENCE_TOKEN;

    if (!audienceToken) {
      console.log('EmailIt audience token not configured, skipping subscription');
      return false;
    }

    const url = `https://api.emailit.com/v1/audiences/subscribe/${audienceToken}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.EMAILIT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        first_name,
        last_name: last_name || '',
        custom_fields: custom_fields || {},
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('EmailIt audience subscription error:', errorData);
      return false;
    }

    console.log('Successfully added to EmailIt audience:', email);
    return true;
  } catch (error) {
    console.error('Error adding to EmailIt audience:', error);
    return false;
  }
}

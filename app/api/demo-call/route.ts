
import { NextRequest, NextResponse } from 'next/server';

// Vogent API Configuration
const VOGENT_API_KEY = process.env.VOGENT_API_KEY || '';
const VOGENT_AGENT_ID = process.env.VOGENT_AGENT_ID || '5ceaae21-4262-4a86-b7c0-aa847e016665';
const VOGENT_PHONE_NUMBER_ID = process.env.VOGENT_PHONE_NUMBER_ID || '';
const VOGENT_API_BASE = 'https://api.vogent.ai/api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, phone, email, businessType } = body;

    // Validate required fields
    if (!firstName || !phone || !email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format phone number (remove any non-digit characters)
    const formattedPhone = phone.replace(/\D/g, '');
    
    // Ensure it starts with country code
    const finalPhone = formattedPhone.startsWith('1') 
      ? `+${formattedPhone}` 
      : `+1${formattedPhone}`;

    // Validate Vogent configuration
    if (!VOGENT_API_KEY) {
      console.error('VOGENT_API_KEY is not configured');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Server configuration error. Please contact support.',
          debug: process.env.NODE_ENV === 'development' ? 'VOGENT_API_KEY not set' : undefined
        },
        { status: 500 }
      );
    }

    if (!VOGENT_PHONE_NUMBER_ID) {
      console.error('VOGENT_PHONE_NUMBER_ID is not configured');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Server configuration error. Please contact support.',
          debug: process.env.NODE_ENV === 'development' ? 'VOGENT_PHONE_NUMBER_ID not set' : undefined
        },
        { status: 500 }
      );
    }

    if (!VOGENT_AGENT_ID) {
      console.error('VOGENT_AGENT_ID is not configured');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Server configuration error. Please contact support.',
          debug: process.env.NODE_ENV === 'development' ? 'VOGENT_AGENT_ID not set' : undefined
        },
        { status: 500 }
      );
    }

    // Prepare Vogent API call payload
    // Using callAgentInput to pass variables to the AI agent prompt
    // Variable names (e.g., FIRST_NAME, BUSINESS_TYPE) will be replaced in the prompt
    // For example: "Hi {{FIRST_NAME}}" will become "Hi John"
    const vogentPayload = {
      toNumber: finalPhone,
      fromNumberId: VOGENT_PHONE_NUMBER_ID,
      callAgentId: VOGENT_AGENT_ID,
      callAgentInput: {
        FIRST_NAME: firstName,                        // For {{FIRST_NAME}} in prompt
        BUSINESS_TYPE: businessType || 'home services',  // For {{BUSINESS_TYPE}} in prompt (default if not provided)
        CUSTOMER_EMAIL: email,                        // For {{CUSTOMER_EMAIL}} in prompt
        CUSTOMER_PHONE: finalPhone,                   // For {{CUSTOMER_PHONE}} in prompt
        LEAD_SOURCE: 'Website Demo Call Request',     // For {{LEAD_SOURCE}} in prompt
        INQUIRY_DATE: new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })
      }
    };

    console.log('Initiating Vogent call with payload:', JSON.stringify(vogentPayload, null, 2));

    // Call Vogent API to initiate the call
    const vogentResponse = await fetch(`${VOGENT_API_BASE}/dials`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${VOGENT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vogentPayload),
    });

    console.log('Vogent API Response Status:', vogentResponse.status);

    if (!vogentResponse.ok) {
      const errorText = await vogentResponse.text();
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: errorText };
      }
      
      console.error('Vogent API Error Details:', {
        status: vogentResponse.status,
        statusText: vogentResponse.statusText,
        error: errorData
      });
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to initiate call. Please try again.',
          debug: process.env.NODE_ENV === 'development' ? errorData : undefined
        },
        { status: 500 }
      );
    }

    const vogentData = await vogentResponse.json();

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Call initiated successfully! You should receive a call within 60 seconds.',
      dial_id: vogentData.id || vogentData.dial_id,
    });

  } catch (error) {
    console.error('Demo Call API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred. Please try again.' 
      },
      { status: 500 }
    );
  }
}

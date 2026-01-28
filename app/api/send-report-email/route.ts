
import { NextRequest, NextResponse } from 'next/server';
import { addToEmailItAudience } from '@/lib/emailit';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, missedCallsPerWeek, avgJobValue, competitorRate } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Calculate the metrics
    const missedCallsPerMonth = missedCallsPerWeek * 4;
    const jobsLostToCompetitors = Math.round(missedCallsPerMonth * (competitorRate / 100));
    const monthlyLostRevenue = jobsLostToCompetitors * avgJobValue;
    const annualRevenueAtRisk = monthlyLostRevenue * 12;

    // Format numbers with commas
    const formatCurrency = (num: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(num);
    };

    // Create the email HTML content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Custom Plumbing Business Loss Report</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Your Custom Loss Report</h1>
            <p style="color: #e0e7ff; margin: 10px 0 0 0; font-size: 16px;">Discover What Missed Calls Are Costing Your Plumbing Business</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1e40af; margin-top: 0;">Your Business Metrics</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2563eb;">
              <p style="margin: 5px 0;"><strong>Missed Calls Per Week:</strong> ${missedCallsPerWeek}</p>
              <p style="margin: 5px 0;"><strong>Average Job Value:</strong> ${formatCurrency(avgJobValue)}</p>
              <p style="margin: 5px 0;"><strong>Calls Lost to Competitors:</strong> ${competitorRate}%</p>
            </div>
            
            <h2 style="color: #dc2626; margin-top: 30px;">💰 The Real Cost</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #dc2626;">
              <p style="margin: 10px 0; font-size: 16px;">
                <strong>Missed Calls Per Month:</strong> 
                <span style="color: #dc2626; font-size: 20px; font-weight: bold;">${missedCallsPerMonth}</span>
              </p>
              <p style="margin: 10px 0; font-size: 16px;">
                <strong>Jobs Lost to Competitors:</strong> 
                <span style="color: #dc2626; font-size: 20px; font-weight: bold;">${jobsLostToCompetitors}</span>
              </p>
              <p style="margin: 10px 0; font-size: 16px;">
                <strong>Monthly Lost Revenue:</strong> 
                <span style="color: #dc2626; font-size: 24px; font-weight: bold;">${formatCurrency(monthlyLostRevenue)}</span>
              </p>
              <div style="background: #fef2f2; padding: 15px; border-radius: 6px; margin-top: 20px; text-align: center;">
                <p style="margin: 0; font-size: 14px; color: #991b1b;">ANNUAL REVENUE AT RISK</p>
                <p style="margin: 5px 0 0 0; font-size: 32px; font-weight: bold; color: #dc2626;">${formatCurrency(annualRevenueAtRisk)}</p>
              </div>
            </div>
            
            <h2 style="color: #059669; margin-top: 30px;">✅ The VentureVoice Solution</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 10px 0;">Our AI answering service never misses a call, never takes a day off, and answers in under 3 seconds - even during peak hours.</p>
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>Answer emergency calls 24/7/365</li>
                <li>Capture job details instantly</li>
                <li>Professional, friendly service every time</li>
                <li>Integrates with your existing systems</li>
                <li>No hiring, training, or managing staff</li>
              </ul>
            </div>
            
            <h2 style="color: #2563eb;">📊 FREE Bonus Guide</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0;"><strong>"5 Ways to Never Miss Another Emergency Call"</strong></p>
              <p style="margin: 10px 0; font-size: 14px; color: #666;">Learn the proven strategies top plumbing companies use to capture every opportunity and maximize revenue.</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://venturevoice.io/plumbing-answering-service" 
                 style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: bold;">
                Try Free AI Demo Call Now →
              </a>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #eff6ff; border-radius: 8px; text-align: center;">
              <p style="margin: 0; font-size: 18px; font-weight: bold; color: #1e40af;">Ready to Stop Losing Business?</p>
              <p style="margin: 10px 0; color: #1e40af;">Experience our AI answering service with a free demo call</p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p style="margin: 5px 0;">VentureVoice AI - Smart Answering Service for Plumbing Companies</p>
            <p style="margin: 5px 0;">
              <a href="https://venturevoice.io" style="color: #2563eb; text-decoration: none;">venturevoice.io</a>
            </p>
          </div>
        </body>
      </html>
    `;

    // Send email using EmailIt API
    const emailitResponse = await fetch('https://api.emailit.com/v1/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.EMAILIT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'VentureVoice AI <noreply@venturevoice.io>',
        to: email,
        reply_to: 'support@venturevoice.io',
        subject: `Your Custom Report: You're Losing ${formatCurrency(annualRevenueAtRisk)}/Year in Missed Calls`,
        html: htmlContent,
      }),
    });

    if (!emailitResponse.ok) {
      const errorData = await emailitResponse.text();
      console.error('EmailIt API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Add to EmailIt audience for autoresponder (don't block on this)
    addToEmailItAudience({
      email,
      first_name: 'Lead', // You could capture this from a form field
      last_name: '',
      custom_fields: {
        source: 'plumbing_calculator',
        missed_calls_per_week: missedCallsPerWeek.toString(),
        avg_job_value: avgJobValue.toString(),
        annual_revenue_at_risk: annualRevenueAtRisk.toString(),
      },
    }).catch(err => {
      // Log but don't fail the request
      console.error('Failed to add to EmailIt audience:', err);
    });

    return NextResponse.json({ 
      success: true,
      message: 'Report sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


import { NextRequest, NextResponse } from 'next/server';
import { getWebhookLogs, clearWebhookLogs } from '@/lib/webhook-logger';

// Simple secret to prevent public access
const VIEW_SECRET = 'debug2024';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const action = searchParams.get('action');

  // Check secret
  if (secret !== VIEW_SECRET) {
    return NextResponse.json(
      { error: 'Unauthorized - Invalid secret' },
      { status: 401 }
    );
  }

  // Handle clear action
  if (action === 'clear') {
    clearWebhookLogs();
    return NextResponse.json({ 
      success: true, 
      message: 'Webhook logs cleared' 
    });
  }

  // Return logs
  const logs = getWebhookLogs();
  
  return NextResponse.json({
    success: true,
    count: logs.length,
    logs: logs,
    instructions: {
      message: 'Webhook logs (last 20 calls)',
      note: 'Make a test call to Vogent to see data appear here',
      clear_logs: '/api/webhook-logs?secret=debug2024&action=clear',
    }
  }, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

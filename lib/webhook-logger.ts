
/**
 * Simple webhook logger for debugging
 * Stores the last 20 webhook calls in memory
 */

interface WebhookLog {
  timestamp: string;
  event: string;
  dial_id: string;
  payload: any;
}

// In-memory storage (resets on deployment)
let webhookLogs: WebhookLog[] = [];

export function logWebhook(data: any) {
  const log: WebhookLog = {
    timestamp: new Date().toISOString(),
    event: data.event || 'unknown',
    dial_id: data.dial_id || 'unknown',
    payload: data,
  };

  // Add to beginning of array
  webhookLogs.unshift(log);

  // Keep only last 20 logs
  if (webhookLogs.length > 20) {
    webhookLogs = webhookLogs.slice(0, 20);
  }

  console.log('📝 Webhook logged:', {
    event: log.event,
    dial_id: log.dial_id,
    timestamp: log.timestamp,
  });
}

export function getWebhookLogs(): WebhookLog[] {
  return webhookLogs;
}

export function clearWebhookLogs() {
  webhookLogs = [];
}

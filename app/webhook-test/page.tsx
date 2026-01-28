
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RefreshCcw, Trash2, CheckCircle, XCircle, Phone } from 'lucide-react';

interface WebhookLog {
  timestamp: string;
  event: string;
  dial_id: string;
  payload: any;
}

export default function WebhookTestPage() {
  const [logs, setLogs] = useState<WebhookLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastRefresh, setLastRefresh] = useState(new Date());

  const fetchLogs = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch('/api/webhook-logs?secret=debug2024');
      
      if (!response.ok) {
        throw new Error('Failed to fetch webhook logs');
      }

      const data = await response.json();
      setLogs(data.logs || []);
      setLastRefresh(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load logs');
    } finally {
      setLoading(false);
    }
  };

  const clearLogs = async () => {
    try {
      const response = await fetch('/api/webhook-logs?secret=debug2024&action=clear');
      if (response.ok) {
        setLogs([]);
      }
    } catch (err) {
      setError('Failed to clear logs');
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Vogent Webhook Test Page</h1>
            <p className="text-slate-600 mt-1">Monitor incoming webhook calls in real-time</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={fetchLogs} disabled={loading} variant="outline">
              <RefreshCcw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button onClick={clearLogs} variant="destructive" disabled={logs.length === 0}>
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Logs
            </Button>
          </div>
        </div>

        {/* Instructions */}
        <Alert>
          <Phone className="h-4 w-4" />
          <AlertDescription>
            <strong>How to test:</strong> Make a test call to your Vogent AI phone number. 
            After the call ends, refresh this page to see the webhook data.
          </AlertDescription>
        </Alert>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Total Webhooks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{logs.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Last Refresh</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{lastRefresh.toLocaleTimeString()}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-600">Status</CardTitle>
            </CardHeader>
            <CardContent>
              {logs.length > 0 ? (
                <Badge variant="default" className="bg-green-500">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Receiving Data
                </Badge>
              ) : (
                <Badge variant="secondary">
                  <XCircle className="w-3 h-3 mr-1" />
                  No Data Yet
                </Badge>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Error Display */}
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Logs Display */}
        {logs.length === 0 && !loading ? (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Phone className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                <h3 className="text-xl font-semibold text-slate-700 mb-2">No Webhooks Received Yet</h3>
                <p className="text-slate-500">Make a test call to see webhook data appear here</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {logs.map((log, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{log.event || 'Unknown Event'}</CardTitle>
                      <CardDescription>
                        Dial ID: {log.dial_id} • {new Date(log.timestamp).toLocaleString()}
                      </CardDescription>
                    </div>
                    <Badge variant={log.event === 'dial.extractor' ? 'default' : 'secondary'}>
                      {log.event}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-auto">
                    <pre className="text-xs">
                      {JSON.stringify(log.payload, null, 2)}
                    </pre>
                  </div>
                  
                  {/* Extracted Data Summary */}
                  {log.event === 'dial.extractor' && log.payload?.payload?.extractedData && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm text-slate-700 mb-2">Contact Info</h4>
                        <pre className="text-xs bg-blue-50 p-3 rounded">
                          {JSON.stringify(log.payload.payload.extractedData.contact_info || {}, null, 2)}
                        </pre>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-700 mb-2">Next Actions</h4>
                        <pre className="text-xs bg-green-50 p-3 rounded">
                          {JSON.stringify(log.payload.payload.extractedData.next_actions || {}, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

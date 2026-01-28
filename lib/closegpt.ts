
/**
 * CloseGPT CRM Integration
 * Sends contact data from Vogent calls to CloseGPT
 */

interface CloseGPTContact {
  firstName: string;
  lastName?: string;
  email?: {
    value: string;
  };
  phone: {
    value: string;
  };
  company?: string;
  customField_vogent_call_outcome?: string;
  customField_vogent_interest_level?: string;
  customField_vogent_dial_id?: string;
  customField_vogent_last_call_date?: string;
  customField_vogent_notes?: string;
  customField_vogent_callback_date?: string;
  customField_vogent_callback_time?: string;
  customField_vogent_transcript_url?: string;
  tags?: string[];
  notes?: string[];
  source_code?: string;
  xref?: string;
}

export async function sendToCloseGPT(contactData: CloseGPTContact): Promise<boolean> {
  try {
    const { CLOSEGPT_DOMAIN, CLOSEGPT_INPUT_ID, CLOSEGPT_PUBLIC_KEY } = process.env;

    if (!CLOSEGPT_DOMAIN || !CLOSEGPT_INPUT_ID || !CLOSEGPT_PUBLIC_KEY) {
      console.log('CloseGPT credentials not configured, skipping sync');
      return false;
    }

    const url = `https://${CLOSEGPT_DOMAIN}/api/input/${CLOSEGPT_INPUT_ID}/contact?public_key=${CLOSEGPT_PUBLIC_KEY}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('CloseGPT API error:', response.status, errorText);
      return false;
    }

    const result = await response.json();
    console.log('Successfully sent to CloseGPT:', result);
    return true;
  } catch (error) {
    console.error('Error sending to CloseGPT:', error);
    return false;
  }
}

export function transformVogentToCloseGPT(vogentData: any): CloseGPTContact {
  const { extractedData, dial_id, to_number, recording_url } = vogentData;

  // Parse name
  const fullName = extractedData?.contact_info?.name || '';
  const nameParts = fullName.split(' ');
  const firstName = nameParts[0] || 'Unknown';
  const lastName = nameParts.slice(1).join(' ') || '';

  // Build tags based on call outcome
  const tags: string[] = ['vogent-call'];
  if (extractedData?.call_outcome) {
    tags.push(`vogent-${extractedData.call_outcome}`);
  }
  if (extractedData?.engagement?.interest_level) {
    tags.push(`interest-${extractedData.engagement.interest_level}`);
  }

  // Build notes
  const notes: string[] = [];
  if (extractedData?.notes) {
    notes.push(`Voice AI Call Notes: ${extractedData.notes}`);
  }
  if (extractedData?.objections?.objection_details) {
    notes.push(`Objections: ${extractedData.objections.objection_details}`);
  }

  return {
    firstName,
    lastName,
    email: extractedData?.contact_info?.email
      ? { value: extractedData.contact_info.email }
      : undefined,
    phone: {
      value: to_number,
    },
    customField_vogent_call_outcome: extractedData?.call_outcome,
    customField_vogent_interest_level: extractedData?.engagement?.interest_level,
    customField_vogent_dial_id: dial_id,
    customField_vogent_last_call_date: new Date().toISOString(),
    customField_vogent_notes: extractedData?.notes,
    customField_vogent_callback_date: extractedData?.next_actions?.callback_date,
    customField_vogent_callback_time: extractedData?.next_actions?.callback_time,
    customField_vogent_transcript_url: recording_url,
    tags,
    notes,
    source_code: 'Vogent Voice AI',
    xref: dial_id,
  };
}

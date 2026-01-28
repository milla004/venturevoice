
/**
 * Cal.com API Integration
 * 
 * Handles booking operations with Cal.com's API v1
 * - Check available slots
 * - Create bookings programmatically
 * - Real-time availability
 */

const CALCOM_API_BASE = 'https://api.cal.com/v1';
const CALCOM_API_KEY = process.env.CALCOM_API_KEY;
const CALCOM_USERNAME = process.env.CALCOM_USERNAME || 'venturevoice';
const CALCOM_EVENT_SLUG = process.env.CALCOM_EVENT_SLUG || '15min';
const CALCOM_EVENT_TYPE_ID = process.env.CALCOM_EVENT_TYPE_ID ? parseInt(process.env.CALCOM_EVENT_TYPE_ID) : undefined;

interface CalcomSlot {
  time: string;
}

// v1 API returns the booking directly (not wrapped in { booking: {...} })
interface CalcomBookingResponse {
  id: number;
  uid: string;
  startTime: string;
  endTime: string;
  title: string;
  attendees: Array<{
    name: string;
    email: string;
    timeZone: string;
  }>;
  videoCallUrl?: string;
}

/**
 * Check available slots for a date range
 */
export async function getAvailableSlots(
  startDate: string,
  endDate: string,
  timeZone: string = 'America/New_York'
): Promise<Record<string, CalcomSlot[]>> {
  try {
    const params = new URLSearchParams({
      apiKey: CALCOM_API_KEY || '',
      startTime: startDate,
      endTime: endDate,
      timeZone: timeZone,
      eventTypeSlug: CALCOM_EVENT_SLUG,
      usernameList: CALCOM_USERNAME,
    });

    const response = await fetch(`${CALCOM_API_BASE}/slots?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Cal.com slots API error:', error);
      throw new Error(`Cal.com API error: ${response.status}`);
    }

    const result = await response.json();
    return result.slots || {};
  } catch (error) {
    console.error('Error fetching Cal.com slots:', error);
    throw error;
  }
}

/**
 * Find the closest available slot for a given date/time
 */
export async function findClosestSlot(
  desiredDateTime: Date,
  timeZone: string = 'America/New_York'
): Promise<string | null> {
  try {
    // Search for slots within 7 days of the desired date
    const startDate = new Date(desiredDateTime);
    startDate.setHours(0, 0, 0, 0);
    
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 7);

    const slots = await getAvailableSlots(
      startDate.toISOString(),
      endDate.toISOString(),
      timeZone
    );

    // Find all available slot times
    const allSlots: Date[] = [];
    Object.values(slots).forEach(daySlots => {
      daySlots.forEach(slot => {
        allSlots.push(new Date(slot.time));
      });
    });

    if (allSlots.length === 0) {
      return null;
    }

    // Find the closest slot to the desired time
    let closestSlot = allSlots[0];
    let minDiff = Math.abs(desiredDateTime.getTime() - allSlots[0].getTime());

    for (const slot of allSlots) {
      const diff = Math.abs(desiredDateTime.getTime() - slot.getTime());
      if (diff < minDiff) {
        minDiff = diff;
        closestSlot = slot;
      }
    }

    return closestSlot.toISOString();
  } catch (error) {
    console.error('Error finding closest slot:', error);
    return null;
  }
}

/**
 * Create a booking on Cal.com using v1 API
 */
export async function createBooking(params: {
  name: string;
  email: string;
  phone?: string;
  startTime: string; // ISO 8601 format
  timeZone?: string;
  notes?: string;
  eventTypeId?: number;
}): Promise<CalcomBookingResponse> {
  try {
    const { name, email, phone, startTime, timeZone = 'America/New_York', notes, eventTypeId } = params;

    // Calculate end time (15 minutes after start)
    const start = new Date(startTime);
    const end = new Date(start.getTime() + 15 * 60 * 1000);

    // v1 API requires eventTypeId (numeric ID)
    // Using Google Meet as the location (matches Cal.com event type config)
    const bookingData = {
      eventTypeId: eventTypeId || CALCOM_EVENT_TYPE_ID,
      start: start.toISOString(),
      end: end.toISOString(),
      responses: {
        name,
        email,
        ...(phone && { smsReminderNumber: phone }),
        location: {
          value: 'integrations:google:meet',
          optionValue: '',
        },
        ...(notes && { notes }),
      },
      timeZone,
      language: 'en',
      metadata: {},
    };
    
    if (!bookingData.eventTypeId) {
      throw new Error('CALCOM_EVENT_TYPE_ID is required for bookings');
    }

    console.log('Creating Cal.com v1 booking:', JSON.stringify(bookingData, null, 2));

    const params_url = new URLSearchParams({
      apiKey: CALCOM_API_KEY || '',
    });

    const response = await fetch(`${CALCOM_API_BASE}/bookings?${params_url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Cal.com booking API error:', error);
      throw new Error(`Cal.com booking failed: ${response.status} - ${error}`);
    }

    const result: CalcomBookingResponse = await response.json();
    console.log('Cal.com booking created:', result);
    return result;
  } catch (error) {
    console.error('Error creating Cal.com booking:', error);
    throw error;
  }
}

/**
 * Format a date for display
 */
export function formatBookingDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  });
}

/**
 * Get Cal.com booking page URL
 */
export function getBookingPageUrl(): string {
  return `https://cal.com/${CALCOM_USERNAME}/${CALCOM_EVENT_SLUG}`;
}

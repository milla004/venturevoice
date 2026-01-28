
/**
 * NeetoCal API Integration
 * Handles scheduling, rescheduling, and booking management
 */

interface BookingRequest {
  email: string;
  name: string;
  phone?: string;
  date: string; // ISO 8601 format: "2025-11-10T14:30:00-05:00"
  time_zone?: string;
  notes?: string;
  custom_fields?: Record<string, any>;
}

interface RescheduleRequest {
  booking_sid: string;
  new_date: string;
  new_time: string;
  time_zone?: string;
}

interface NeetoCalBookingResponse {
  id?: string;
  sid?: string;
  name?: string;
  email?: string;
  starts_at?: string;
  ends_at?: string;
  status?: string;
  admin_booking_url?: string;
  client_booking_url?: string;
  meeting_url?: string;
  message?: string;
  error?: string;
}

/**
 * Get NeetoCal API configuration from environment
 */
function getNeetoCalConfig() {
  const subdomain = process.env.NEETOCAL_SUBDOMAIN;
  const apiKey = process.env.NEETOCAL_API_KEY;
  const meetingSid = process.env.NEETOCAL_MEETING_SID;
  const meetingSlug = process.env.NEETOCAL_MEETING_SLUG;

  if (!subdomain || !apiKey || !meetingSlug) {
    throw new Error('NeetoCal credentials not configured. Please set NEETOCAL_SUBDOMAIN, NEETOCAL_API_KEY, and NEETOCAL_MEETING_SLUG');
  }

  return {
    baseUrl: `https://${subdomain}.neetocal.com/api/external/v1`,
    apiKey,
    meetingSid: meetingSid || '',
    meetingSlug,
  };
}

/**
 * Get available time slots for a specific date
 */
export async function getAvailableTimeSlots(date: string): Promise<any> {
  try {
    const config = getNeetoCalConfig();
    const url = `${config.baseUrl}/meetings/${config.meetingSid}/slots?date=${date}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': config.apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('NeetoCal API error (get slots):', errorData);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching NeetoCal time slots:', error);
    return null;
  }
}

/**
 * Create a new booking in NeetoCal
 */
export async function createBooking(bookingData: BookingRequest): Promise<NeetoCalBookingResponse> {
  try {
    const config = getNeetoCalConfig();
    const url = `${config.baseUrl}/bookings`;

    // Parse the ISO date string to extract date and time
    // bookingData.date format: "2025-11-10T14:30:00"
    const dateTimeParts = bookingData.date.split('T');
    const slotDate = dateTimeParts[0]; // "2025-11-10"
    const slotTime = dateTimeParts[1]?.substring(0, 5) || '00:00'; // "14:30"

    const payload = {
      meeting_slug: config.meetingSlug,
      email: bookingData.email,
      name: bookingData.name,
      slot_date: slotDate,
      slot_start_time: slotTime,
      time_zone: bookingData.time_zone || 'America/New_York',
    };

    console.log('Creating NeetoCal booking:', {
      email: payload.email,
      slot_date: payload.slot_date,
      slot_start_time: payload.slot_start_time,
      meeting_slug: config.meetingSlug,
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-Api-Key': config.apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('NeetoCal API error (create booking):', errorData);
      return {
        error: `Failed to create booking: ${response.status}`,
        message: errorData,
      };
    }

    const result = await response.json();
    console.log('✅ NeetoCal booking created successfully:', result.sid);
    return result;
  } catch (error) {
    console.error('Error creating NeetoCal booking:', error);
    return {
      error: 'Exception occurred while creating booking',
      message: String(error),
    };
  }
}

/**
 * Reschedule an existing booking
 */
export async function rescheduleBooking(rescheduleData: RescheduleRequest): Promise<boolean> {
  try {
    const config = getNeetoCalConfig();
    const url = `${config.baseUrl}/bookings/${rescheduleData.booking_sid}`;

    const payload = {
      starts_at: `${rescheduleData.new_date}T${rescheduleData.new_time}`,
      time_zone: rescheduleData.time_zone || 'America/New_York',
    };

    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'X-Api-Key': config.apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('NeetoCal API error (reschedule):', errorData);
      return false;
    }

    console.log('✅ NeetoCal booking rescheduled successfully');
    return true;
  } catch (error) {
    console.error('Error rescheduling NeetoCal booking:', error);
    return false;
  }
}

/**
 * Cancel a booking
 */
export async function cancelBooking(bookingSid: string): Promise<boolean> {
  try {
    const config = getNeetoCalConfig();
    const url = `${config.baseUrl}/bookings/${bookingSid}`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'X-Api-Key': config.apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('NeetoCal API error (cancel):', errorData);
      return false;
    }

    console.log('✅ NeetoCal booking cancelled successfully');
    return true;
  } catch (error) {
    console.error('Error cancelling NeetoCal booking:', error);
    return false;
  }
}

/**
 * Get booking details by SID
 */
export async function getBooking(bookingSid: string): Promise<any> {
  try {
    const config = getNeetoCalConfig();
    const url = `${config.baseUrl}/bookings/${bookingSid}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': config.apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('NeetoCal API error (get booking):', errorData);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching NeetoCal booking:', error);
    return null;
  }
}

/**
 * List all bookings (paginated)
 */
export async function listBookings(pageNumber: number = 1, pageSize: number = 30): Promise<any> {
  try {
    const config = getNeetoCalConfig();
    const url = `${config.baseUrl}/bookings?page_number=${pageNumber}&page_size=${pageSize}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': config.apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('NeetoCal API error (list bookings):', errorData);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error listing NeetoCal bookings:', error);
    return null;
  }
}

/**
 * Parse Vogent date/time strings into ISO 8601 format for NeetoCal
 * Example inputs:
 * - date: "November 7, 2025" or "2025-11-07"
 * - time: "2:30 PM" or "14:30"
 */
export function parseVogentDateTime(date: string, time: string, timeZone: string = 'America/New_York'): string {
  try {
    // Parse date
    let dateObj: Date;
    if (date.includes(',')) {
      // Format: "November 7, 2025"
      dateObj = new Date(date);
    } else {
      // Format: "2025-11-07"
      dateObj = new Date(date);
    }

    // Parse time
    let hours = 0;
    let minutes = 0;

    if (time.includes('AM') || time.includes('PM')) {
      // Format: "2:30 PM"
      const [timePart, meridiem] = time.split(' ');
      const [hourStr, minuteStr] = timePart.split(':');
      hours = parseInt(hourStr);
      minutes = parseInt(minuteStr || '0');

      if (meridiem === 'PM' && hours !== 12) {
        hours += 12;
      } else if (meridiem === 'AM' && hours === 12) {
        hours = 0;
      }
    } else {
      // Format: "14:30"
      const [hourStr, minuteStr] = time.split(':');
      hours = parseInt(hourStr);
      minutes = parseInt(minuteStr || '0');
    }

    // Construct ISO 8601 date-time string
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const hoursStr = String(hours).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');

    // Return ISO 8601 format
    return `${year}-${month}-${day}T${hoursStr}:${minutesStr}:00`;
  } catch (error) {
    console.error('Error parsing Vogent date/time:', error);
    throw error;
  }
}

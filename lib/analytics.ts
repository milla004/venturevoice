
/**
 * Analytics tracking utilities for Google Analytics and Google Ads
 */

// Declare gtag as a global function for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    gtag_report_conversion: (url?: string) => boolean;
  }
}

/**
 * Track a generic event
 */
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params);
  }
};

/**
 * Track Google Ads conversion
 */
export const trackConversion = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params);
  }
};

/**
 * Track demo popup opened
 */
export const trackDemoPopupOpened = () => {
  trackEvent('demo_popup_opened', {
    event_category: 'engagement',
    event_label: 'Try AI Demo Call Button Clicked'
  });
};

/**
 * Track form started (user begins filling out the form)
 */
export const trackFormStarted = () => {
  trackEvent('form_start', {
    event_category: 'engagement',
    event_label: 'Demo Form Started'
  });
};

/**
 * Track demo call conversion (form submitted)
 * Fires Google Ads conversion event with conversion label
 */
export const trackDemoCallConversion = () => {
  // GA4 Event
  trackEvent('conversion_submit_lead_form_demo_voice', {
    event_category: 'conversion',
    event_label: 'Demo Call Requested'
  });
  
  // Google Ads Conversion Event using the official gtag_report_conversion function
  if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion();
  }
};

/**
 * Track demo call success (call connected)
 */
export const trackDemoCallSuccess = () => {
  trackEvent('demo_call_connected', {
    event_category: 'conversion',
    event_label: 'AI Demo Call Completed',
    value: 100.0
  });
};

/**
 * Track email captured
 */
export const trackEmailCaptured = (email?: string) => {
  trackEvent('email_captured', {
    event_category: 'conversion',
    event_label: 'Email Collected on Call',
    value: 150.0
  });
};

/**
 * Track appointment booked
 */
export const trackAppointmentBooked = (bookingId?: string) => {
  trackEvent('purchase', {
    transaction_id: bookingId || `booking_${Date.now()}`,
    value: 500.0,
    currency: 'USD',
    event_category: 'conversion',
    event_label: 'Appointment Booked'
  });
};

/**
 * Track booking button clicks (Schedule a Call, Book Strategy Call, etc.)
 */
export const trackBookingButtonClick = (buttonLabel: string, location: string) => {
  trackEvent('booking_button_click', {
    event_category: 'engagement',
    event_label: buttonLabel,
    page_location: location,
    value: 1
  });
};


"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, Calendar, Clock, CheckCircle2 } from "lucide-react";
import { trackAppointmentBooked } from "@/lib/analytics";

export default function BookingWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const widgetViewedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent multiple script loads
    if (scriptLoadedRef.current || !containerRef.current) return;
    
    // Remove any existing scripts first
    const existingScripts = document.querySelectorAll('script[src*="caljoin.com"]');
    existingScripts.forEach(script => script.remove());
    
    const script = document.createElement('script');
    script.src = 'https://caljoin.com/meet/embed/venturevoice/booker_venturevoice';
    // DO NOT use async or defer - the script needs to execute immediately in place
    
    script.onload = () => {
      console.log('Booking widget script loaded successfully');
      setTimeout(() => setIsLoading(false), 1000);
      
      // Track widget load as engagement event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'booking_widget_loaded', {
          'event_category': 'engagement',
          'event_label': 'NeetoCal Widget Loaded'
        });
      }
    };
    
    script.onerror = () => {
      console.error('Failed to load booking widget script');
      setIsLoading(false);
    };
    
    // CRITICAL: Append script directly to the container where we want the widget to appear
    // The CalJoin script will inject the widget right at its own location in the DOM
    containerRef.current.appendChild(script);
    scriptLoadedRef.current = true;

    // Fallback timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // Track when user scrolls to view the booking widget (high-intent signal)
  useEffect(() => {
    if (widgetViewedRef.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !widgetViewedRef.current) {
            widgetViewedRef.current = true;
            
            // Track high-intent engagement
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'booking_widget_viewed', {
                'event_category': 'engagement',
                'event_label': 'User Scrolled to Booking Widget',
                'value': 1
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // Listen for booking completion events from NeetoCal/CalJoin
  useEffect(() => {
    const handleBookingComplete = (event: MessageEvent) => {
      // NeetoCal/CalJoin may post messages when booking is completed
      if (event.data?.type === 'booking_completed' || 
          event.data?.event === 'booking_completed' ||
          event.data?.status === 'confirmed') {
        
        console.log('Booking completed detected:', event.data);
        
        // Fire the conversion event
        trackAppointmentBooked();
      }
    };

    window.addEventListener('message', handleBookingComplete);

    return () => {
      window.removeEventListener('message', handleBookingComplete);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Trust Signals Above Widget - Optimized for Conversion */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-3">
          <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-gray-900">No Credit Card</p>
            <p className="text-xs text-gray-600">100% Free Call</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-gray-900">30 Minutes</p>
            <p className="text-xs text-gray-600">Quick & Valuable</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-purple-50 border border-purple-200 rounded-lg p-3">
          <Calendar className="h-6 w-6 text-purple-600 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-gray-900">Same-Day Available</p>
            <p className="text-xs text-gray-600">Book ASAP</p>
          </div>
        </div>
      </div>

      {/* Optimized Widget Container - Sized for 10% Conversion */}
      <div className="relative w-full bg-white rounded-xl border-2 border-blue-200 shadow-lg overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white z-10">
            <div className="text-center">
              <Loader2 className="h-10 w-10 animate-spin text-blue-600 mx-auto mb-3" />
              <p className="text-base font-medium text-gray-900">Loading Available Times...</p>
              <p className="text-sm text-gray-600 mt-1">Pick your perfect slot</p>
            </div>
          </div>
        )}
        
        {/* Optimized Container for CalJoin Embed - Script will inject here */}
        <div 
          ref={containerRef}
          id="caljoin-booking-container"
          className="w-full p-4"
          style={{ 
            minHeight: '700px',
            maxHeight: '900px',
            height: 'auto'
          }}
        />
      </div>
      
      {/* Trust Builder Below Widget */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <span>
            <strong className="text-gray-900">127 contractors</strong> booked this week • 
            <strong className="text-gray-900"> Avg. rating: 4.9/5</strong>
          </span>
        </p>
      </div>
    </div>
  );
}


import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = "force-dynamic"

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://venturevoice.io'),
  title: {
    default: 'VentureVoice - Turn Dead Leads Into Booked Revenue | AI Voice Agent',
    template: '%s | VentureVoice'
  },
  description: 'Stop losing $200K+ yearly on missed calls and cold leads. Our ultra-fast AI voice agent reactivates dormant leads 24/7, books appointments instantly for HVAC, plumbing, electrical, and roofing businesses.',
  keywords: 'AI voice agent, lead reactivation, home service automation, HVAC leads, plumbing leads, contractor AI, appointment booking, dead leads recovery, missed call solution, 24/7 answering service',
  authors: [{ name: 'VentureVoice' }],
  creator: 'VentureVoice',
  publisher: 'VentureVoice',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'VentureVoice - Turn Dead Leads Into Booked Revenue',
    description: 'AI voice technology that reactivates dead leads and books appointments 24/7 for home service businesses.',
    type: 'website',
    url: 'https://venturevoice.io',
    siteName: 'VentureVoice',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VentureVoice AI Voice Agent',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VentureVoice - Turn Dead Leads Into Booked Revenue',
    description: 'AI voice technology that reactivates dead leads and books appointments 24/7 for home service businesses.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://venturevoice.io',
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://caljoin.com" />
        <link rel="dns-prefetch" href="https://caljoin.com" />
        
        {/* Google tag (gtag.js) - Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T034L4FWR6"></script>
        
        {/* Google Ads Conversion Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17708074409"></script>
        
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Google Analytics 4
            gtag('config', 'G-T034L4FWR6');
            
            // Google Ads with Conversion Linker
            gtag('config', 'AW-17708074409', {
              'allow_enhanced_conversions': true
            });
            
            // Conversion Linker - fires on all pages
            gtag('set', 'linker', {
              'domains': ['venturevoice.io']
            });
            
            // Google Ads Conversion Function
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17708074409/ylMiCJSCwMAbEKmL7_tB',
                'event_callback': callback
              });
              return false;
            }
            
            // Make it globally accessible
            window.gtag_report_conversion = gtag_report_conversion;
          `
        }} />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
        
        {/* Enhanced Structured Data - Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "VentureVoice",
            "url": "https://venturevoice.io",
            "logo": "https://venturevoice.io/favicon.svg",
            "description": "AI voice agent for home service businesses - lead reactivation and appointment booking",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-555-1234",
              "contactType": "customer service",
              "email": "support@venturevoice.io",
              "availableLanguage": "English"
            },
            "sameAs": []
          })
        }} />
        
        {/* Structured Data - Software Application */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "VentureVoice AI Voice Agent",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web-based",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "description": "AI Voice Agent for Lead Reactivation and Appointment Booking"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            },
            "description": "AI voice agent that reactivates dead leads and books appointments 24/7 for HVAC, plumbing, electrical, and roofing businesses"
          })
        }} />
        
        {/* Structured Data - WebSite */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "VentureVoice",
            "url": "https://venturevoice.io",
            "description": "AI voice agent for home service businesses",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://venturevoice.io/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }} />
      </body>
    </html>
  )
}



import { Metadata } from 'next';
import HousecallProAlternativePage from './housecall-pro-alternative-page';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Best Housecall Pro Alternative - AI Receptionist Integration | VentureVoice',
  description: 'Integrate AI voice agent with Housecall Pro. Never miss calls, reactivate dead leads, and book appointments 24/7. Works seamlessly with your existing Housecall Pro setup.',
  keywords: 'Housecall Pro alternative, Housecall Pro integration, AI receptionist, home service AI, plumbing software, HVAC software, lead reactivation, appointment booking',
  openGraph: {
    title: 'Best Housecall Pro Alternative - AI Receptionist Integration',
    description: 'Integrate AI voice agent with Housecall Pro to capture every missed call and reactivate dead leads automatically.',
    type: 'website',
    url: 'https://venturevoice.io/housecall-pro-alternative',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Housecall Pro Alternative - AI Receptionist Integration',
    description: 'Integrate AI voice agent with Housecall Pro to capture every missed call and reactivate dead leads automatically.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://venturevoice.io/housecall-pro-alternative',
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
};

export default function Page() {
  return <HousecallProAlternativePage />;
}



import { Metadata } from 'next';
import BestJobberAlternativePage from './best-jobber-alternative-page';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Best Jobber Alternative - AI Receptionist for Jobber Users | VentureVoice',
  description: 'Keep using Jobber and add AI voice agent to answer calls 24/7, reactivate dead leads, and book appointments automatically. Seamless integration with Jobber.',
  keywords: 'Jobber alternative, Jobber integration, AI receptionist, field service software, home service automation, lead reactivation, appointment scheduling, Jobber add-on',
  openGraph: {
    title: 'Best Jobber Alternative - AI Receptionist for Jobber Users',
    description: 'Keep using Jobber. Add AI voice technology to capture every call and turn dead leads into booked jobs.',
    type: 'website',
    url: 'https://venturevoice.io/best-jobber-alternative',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Jobber Alternative - AI Receptionist for Jobber Users',
    description: 'Keep using Jobber. Add AI voice technology to capture every call and turn dead leads into booked jobs.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://venturevoice.io/best-jobber-alternative',
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
  return <BestJobberAlternativePage />;
}

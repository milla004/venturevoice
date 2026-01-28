

import { Metadata } from 'next';
import PlumbingAnsweringServicePage from './plumbing-answering-service-page';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Plumbing Answering Service - Never Miss Another Emergency Call | Venture Voice',
  description: 'AI answering service for plumbers. Answer every call in under 2 seconds, book emergency jobs 24/7, and stop losing customers to competitors. Setup in 48 hours.',
  keywords: 'plumbing answering service, plumber answering service, plumbing call service, 24/7 plumbing calls, emergency plumber answering, plumbing virtual receptionist, after hours plumbing calls',
  openGraph: {
    title: 'Plumbing Answering Service - Never Miss Another Emergency Call',
    description: 'AI answering service built for plumbers. Answer every call instantly, book jobs 24/7, and turn missed calls into booked revenue.',
    type: 'website',
    url: 'https://venturevoice.io/plumbing-answering-service',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plumbing Answering Service - Never Miss Another Emergency Call',
    description: 'AI answering service built for plumbers. Answer every call instantly, book jobs 24/7, and turn missed calls into booked revenue.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://venturevoice.io/plumbing-answering-service',
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
  return <PlumbingAnsweringServicePage />;
}

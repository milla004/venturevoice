

import { Metadata } from 'next';
import TermsOfServicePage from './terms-of-service-page';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Terms of Service | VentureVoice AI Voice Agent',
  description: 'Read VentureVoice Terms of Service for AI voice agent services. Learn about service agreement, payment terms, and client responsibilities.',
  openGraph: {
    title: 'Terms of Service | VentureVoice',
    description: 'VentureVoice Terms of Service for AI voice agent services.',
    type: 'website',
    url: 'https://venturevoice.io/terms-of-service',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | VentureVoice',
    description: 'VentureVoice Terms of Service for AI voice agent services.',
  },
  alternates: {
    canonical: 'https://venturevoice.io/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <TermsOfServicePage />;
}

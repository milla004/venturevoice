

import { Metadata } from 'next';
import PrivacyPolicyPage from './privacy-policy-page';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Privacy Policy | VentureVoice AI Voice Agent',
  description: 'VentureVoice Privacy Policy. Learn how we collect, use, and protect your information when using our AI voice agent services.',
  openGraph: {
    title: 'Privacy Policy | VentureVoice',
    description: 'VentureVoice Privacy Policy for AI voice agent services.',
    type: 'website',
    url: 'https://venturevoice.io/privacy-policy',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | VentureVoice',
    description: 'VentureVoice Privacy Policy for AI voice agent services.',
  },
  alternates: {
    canonical: 'https://venturevoice.io/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}

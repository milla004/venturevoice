
"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Phone className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Venture Voice</span>
              </div>
            </Link>
            
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: October 25, 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                VentureVoice ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI voice agent services and visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Register for our services or create an account</li>
                <li>Request information about our AI voice agent solutions</li>
                <li>Schedule a consultation or demo call</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Contact us for customer support</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                This information may include your name, email address, phone number, company name, business address, job title, and other contact details.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Business Data</h3>
              <p className="text-gray-700 leading-relaxed">
                When you use our AI voice agent services, we may collect and process business-related information including customer lead data, call recordings, conversation transcripts, appointment details, CRM integration data, and service performance metrics. This data is necessary to provide our lead reactivation and appointment booking services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Click patterns and navigation paths</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Delivery:</strong> To provide, operate, and maintain our AI voice agent services, including lead reactivation calls, appointment booking, and customer communication management</li>
                <li><strong>Service Improvement:</strong> To analyze usage patterns, optimize AI performance, and enhance the quality and effectiveness of our voice technology</li>
                <li><strong>Customer Support:</strong> To respond to your inquiries, provide technical assistance, and resolve service issues</li>
                <li><strong>Communication:</strong> To send you service updates, technical notices, security alerts, and administrative messages</li>
                <li><strong>Marketing:</strong> To send you promotional materials, newsletters, and information about new features (you may opt out at any time)</li>
                <li><strong>Analytics:</strong> To understand how our services are used and to generate insights that help improve business outcomes</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Share Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf, such as cloud hosting providers, payment processors, CRM platforms, and analytics services. These providers are contractually obligated to protect your information.</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or governmental request, or to protect our rights, property, or safety.</li>
                <li><strong>With Your Consent:</strong> We may share information with third parties when you explicitly consent to such sharing.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>We do not sell your personal information to third parties.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption of data in transit and at rest, secure server infrastructure, regular security audits, access controls and authentication, and employee training on data protection. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Call recordings and conversation data are typically retained for a period necessary to provide services, improve AI performance, and comply with legal obligations. When data is no longer needed, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to certain exceptions</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Objection:</strong> Object to processing of your personal information for certain purposes</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:support@venturevoice.io" className="text-blue-600 hover:text-blue-700 font-medium">support@venturevoice.io</a>. We will respond to your request within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to collect information about your browsing activities. Cookies are small data files stored on your device that help us improve our website functionality, analyze usage patterns, and provide personalized experiences. You can control cookie preferences through your browser settings, but disabling cookies may limit certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="font-semibold text-gray-900 mb-2">VentureVoice</p>
                <p className="text-gray-700">11923 NE Sumner ST</p>
                <p className="text-gray-700">STE 852717</p>
                <p className="text-gray-700">Portland, Oregon, 97220</p>
                <p className="text-gray-700">United States</p>
                <p className="text-gray-700 mt-3">
                  Email: <a href="mailto:support@venturevoice.io" className="text-blue-600 hover:text-blue-700 font-medium">support@venturevoice.io</a>
                </p>
              </div>
            </section>

            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>Your privacy is important to us.</strong> We are committed to protecting your personal information and being transparent about our data practices. If you have any questions or concerns, please don't hesitate to reach out.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Phone className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-bold text-white">Venture Voice</span>
            </div>
            
            <div className="text-center md:text-right">
              <p>&copy; 2025 Venture Voice. All rights reserved.</p>
              <p className="text-sm mt-1">AI Voice Solutions for Home Service Businesses</p>
              <p className="text-sm mt-1">11923 NE Sumner ST, STE 852717 Portland, Oregon, 97220</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

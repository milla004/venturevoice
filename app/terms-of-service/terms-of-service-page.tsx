
"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: October 25, 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and VentureVoice ("Company," "we," "our," or "us") regarding your use of our AI voice agent services, including lead reactivation, appointment booking, and related technologies (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                VentureVoice provides AI-powered voice agent technology designed specifically for home service businesses. Our Services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Lead Reactivation:</strong> Automated calling and SMS communication with dormant leads, including old estimates, declined quotes, overdue maintenance customers, and no-shows</li>
                <li><strong>Appointment Booking:</strong> 24/7 AI voice agent that answers calls, qualifies leads, and schedules appointments directly into your calendar system</li>
                <li><strong>CRM Integration:</strong> Connection with your existing customer relationship management systems and business tools</li>
                <li><strong>Custom Voice Configuration:</strong> Personalized AI voice settings, scripts, and conversation flows tailored to your business</li>
                <li><strong>Analytics and Reporting:</strong> Performance metrics, call recordings, and conversion tracking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility and Account Registration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use our Services, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Be at least 18 years of age and have the legal capacity to enter into binding contracts</li>
                <li>Represent a legitimate business entity operating in the home services industry</li>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain the security and confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You are responsible for all activities that occur under your account. We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Fees and Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Pricing</h3>
              <p className="text-gray-700 leading-relaxed">
                Service fees are based on the pricing plan you select and may include setup fees, monthly subscription fees, and usage-based charges. All fees are quoted in U.S. dollars and are exclusive of applicable taxes, which you are responsible for paying.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Payment</h3>
              <p className="text-gray-700 leading-relaxed">
                Payment is due according to the billing schedule specified in your service agreement. You authorize us to charge your designated payment method for all fees incurred. If payment fails, we may suspend or terminate your access to the Services until payment is received.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Refunds</h3>
              <p className="text-gray-700 leading-relaxed">
                Setup fees are non-refundable. Monthly subscription fees may be refunded on a prorated basis if you cancel within the first 30 days of service, subject to our ROI guarantee terms. Usage-based charges are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a Client, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Provide Accurate Data:</strong> Supply complete and accurate lead information, customer data, and business details necessary for service delivery</li>
                <li><strong>Legal Compliance:</strong> Ensure you have obtained all necessary consents and permissions to contact leads and customers through our Services, including compliance with TCPA, CAN-SPAM, and other applicable regulations</li>
                <li><strong>Prohibited Uses:</strong> Not use the Services for any illegal, fraudulent, or unauthorized purposes, including spamming, harassment, or deceptive practices</li>
                <li><strong>Data Quality:</strong> Maintain accurate and up-to-date contact lists and promptly remove individuals who request to opt out</li>
                <li><strong>Cooperation:</strong> Provide reasonable cooperation during setup, integration, and ongoing service optimization</li>
                <li><strong>System Access:</strong> Grant necessary access to your CRM, calendar systems, and other business tools required for service integration</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Activities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use the Services to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Violate any local, state, national, or international law or regulation</li>
                <li>Contact individuals on Do Not Call registries or who have opted out of communications</li>
                <li>Transmit false, misleading, or deceptive information</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the Services or servers connected to the Services</li>
                <li>Attempt to gain unauthorized access to any portion of the Services</li>
                <li>Use the Services to compete with or replicate our business model</li>
                <li>Reverse engineer, decompile, or disassemble any aspect of the Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Services, including all software, algorithms, AI models, voice technology, designs, text, graphics, and other content, are owned by VentureVoice and protected by copyright, trademark, patent, and other intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to use the Services solely for your internal business purposes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You retain ownership of your customer data, lead information, and business content. By using the Services, you grant us a license to use this data solely to provide and improve the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Level and Performance</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Availability</h3>
              <p className="text-gray-700 leading-relaxed">
                We strive to maintain 99.9% uptime for our AI voice services. However, we do not guarantee uninterrupted access and may experience downtime for maintenance, upgrades, or unforeseen technical issues.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Performance Expectations</h3>
              <p className="text-gray-700 leading-relaxed">
                While we aim to deliver high conversion rates and appointment bookings, actual results depend on various factors including lead quality, market conditions, pricing, and your business operations. We do not guarantee specific revenue outcomes or conversion percentages.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">ROI Guarantee</h3>
              <p className="text-gray-700 leading-relaxed">
                Our ROI guarantee, if applicable to your service plan, is subject to specific terms and conditions provided in your service agreement. To qualify, you must meet minimum usage requirements and provide accurate performance data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Privacy and Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We take data security seriously and implement industry-standard measures to protect your information. Our data practices are governed by our Privacy Policy, which is incorporated into these Terms by reference. You acknowledge that you have read and agree to our Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                You are responsible for ensuring that your use of the Services complies with all applicable data protection and privacy laws, including obtaining necessary consents from individuals whose data you provide to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Term and Termination</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Term</h3>
              <p className="text-gray-700 leading-relaxed">
                These Terms begin when you first access the Services and continue until terminated by either party. Subscription services renew automatically unless cancelled.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Cancellation by Client</h3>
              <p className="text-gray-700 leading-relaxed">
                You may cancel your subscription at any time by providing written notice. Cancellation takes effect at the end of your current billing period. You remain responsible for all fees incurred prior to cancellation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Termination by VentureVoice</h3>
              <p className="text-gray-700 leading-relaxed">
                We may suspend or terminate your access to the Services immediately if you breach these Terms, engage in prohibited activities, fail to pay fees, or if we determine that continuing service poses legal or reputational risks.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Effect of Termination</h3>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, your right to use the Services ceases immediately. We will provide you with access to export your data for a period of 30 days, after which we may delete your data in accordance with our data retention policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers and Limitations of Liability</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Disclaimer of Warranties</h3>
              <p className="text-gray-700 leading-relaxed">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Limitation of Liability</h3>
              <p className="text-gray-700 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, VENTUREVOICE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, LOST DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless VentureVoice, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or related to your use of the Services, your violation of these Terms, your violation of any rights of third parties, or your violation of any applicable laws or regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Governing Law</h3>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by the laws of the State of Oregon, United States, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Arbitration</h3>
              <p className="text-gray-700 leading-relaxed">
                Any dispute arising out of or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in Portland, Oregon. You waive your right to participate in class action lawsuits or class-wide arbitration.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Exceptions</h3>
              <p className="text-gray-700 leading-relaxed">
                Either party may seek injunctive or other equitable relief in court to protect intellectual property rights or confidential information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of the Services after such changes constitutes acceptance of the modified Terms. If you do not agree to the modified Terms, you must discontinue use of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">General Provisions</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Entire Agreement</h3>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with our Privacy Policy and any service agreement you execute, constitute the entire agreement between you and VentureVoice regarding the Services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Severability</h3>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Waiver</h3>
              <p className="text-gray-700 leading-relaxed">
                Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Assignment</h3>
              <p className="text-gray-700 leading-relaxed">
                You may not assign or transfer these Terms or your rights under these Terms without our prior written consent. We may assign these Terms without restriction.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Force Majeure</h3>
              <p className="text-gray-700 leading-relaxed">
                We shall not be liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, network infrastructure failures, or strikes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
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
                <strong>By using VentureVoice services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong> If you have any questions or concerns, please contact us before using the Services.
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

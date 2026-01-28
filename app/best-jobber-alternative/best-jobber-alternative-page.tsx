
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  TrendingUp,
  Zap,
  DollarSign,
  Clock,
  Users,
  BarChart3,
  Shield,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { DemoCallDialog } from "@/components/demo-call-dialog";
import { trackBookingButtonClick } from "@/lib/analytics";

export default function BestJobberAlternativePage() {
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  // Missed Call Calculator state - Simplified 3-input version (Pure Loss Focus)
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(10);
  const [avgJobValue, setAvgJobValue] = useState(500);
  const [competitorRate, setCompetitorRate] = useState(50); // % that book with competitors

  // Calculator results - Simplified logic focused on competitor threat
  const missedCallsPerMonth = missedCallsPerWeek * 4;
  const jobsLostToCompetitors = Math.round(missedCallsPerMonth * (competitorRate / 100));
  const monthlyLostRevenue = jobsLostToCompetitors * avgJobValue;
  const annualRevenueAtRisk = monthlyLostRevenue * 12;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Structured Data - Product */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "VentureVoice AI Receptionist for Jobber",
          "description": "AI voice agent that integrates with Jobber to answer calls 24/7, reactivate dead leads, and book appointments automatically",
          "brand": {
            "@type": "Brand",
            "name": "VentureVoice"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://venturevoice.io/best-jobber-alternative"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "127"
          }
        })
      }} />
      
      {/* Structured Data - FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does VentureVoice integrate with Jobber?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, VentureVoice integrates seamlessly with Jobber. You can keep using Jobber while our AI handles all incoming calls and reactivates dead leads."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to switch from Jobber?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, you don't need to switch platforms. VentureVoice works alongside Jobber to enhance your existing workflow."
              }
            },
            {
              "@type": "Question",
              "name": "How much does it cost compared to hiring staff?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "VentureVoice costs a fraction of hiring full-time staff. While a receptionist costs $3,000+/month, our AI provides 24/7 coverage at a fixed monthly rate."
              }
            }
          ]
        })
      }} />
      
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                <Phone className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Venture Voice</span>
              </div>
            </Link>
            
            <Button 
              onClick={() => {
                trackBookingButtonClick('Schedule a Call - Nav', '/best-jobber-alternative');
                window.open('https://caljoin.com/venturevoice', '_blank');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-2.5 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">Integrates With Jobber, Housecall Pro & ServiceTitan</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Best Jobber Alternative?
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Actually, Use Both.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-blue-100 leading-relaxed">
              You don't need to replace Jobber. You need an AI Receptionist that works WITH it.
            </p>
            
            <p className="text-lg md:text-xl mb-10 text-blue-200">
              Stop missing calls and losing leads. Our AI integrates with Jobber to answer every call,
              <br className="hidden md:block" />
              reactivate dead leads, and book appointments—24/7, automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Social Proof Badge */}
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 w-fit mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">127 contractors tested this week</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button 
                  size="lg"
                  onClick={() => setShowDemoDialog(true)}
                  className="bg-white hover:bg-gray-100 text-blue-600 text-lg px-12 py-8 rounded-2xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 border-4 border-blue-300 font-bold"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Try AI Demo Call - FREE
                </Button>
                {/* Risk Reversal */}
                <p className="text-xs text-white/90 text-center">No credit card required • Takes 60 seconds • Works on any phone</p>
              </div>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => {
                  trackBookingButtonClick('Schedule Strategy Call - Hero', '/best-jobber-alternative');
                  window.open('https://caljoin.com/venturevoice', '_blank');
                }}
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white text-lg px-12 py-8 rounded-2xl font-bold"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Schedule Strategy Call
              </Button>
              
              {/* Micro-Testimonial */}
              <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white rounded-lg p-4 mt-4">
                <p className="text-white italic mb-2">"I was skeptical until I heard how real it sounded. Booked 3 jobs that week."</p>
                <p className="text-sm font-semibold text-white">— Mike R., HVAC Owner</p>
              </div>
            </div>
            
            <p className="mt-8 text-blue-200 text-sm">
              ✓ 14-Day Free Trial  ✓ No Credit Card Required  ✓ Cancel Anytime
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white" id="problem">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                You're Using Jobber, But Still Missing Calls
              </h2>
              <p className="text-xl text-gray-600">
                Jobber is great for scheduling. But it can't answer your phone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-red-200 bg-red-50/50">
                <CardContent className="pt-6">
                  <XCircle className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Calls Go to Voicemail</h3>
                  <p className="text-gray-700">
                    Your team is busy in the field. Customers call. No answer. They hang up and call your competitor.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-red-200 bg-red-50/50">
                <CardContent className="pt-6">
                  <XCircle className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dead Leads Everywhere</h3>
                  <p className="text-gray-700">
                    Hundreds of old quotes sitting in Jobber. No one follows up. That's money left on the table.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-red-200 bg-red-50/50">
                <CardContent className="pt-6">
                  <XCircle className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Can't Afford More Staff</h3>
                  <p className="text-gray-700">
                    Hiring a full-time receptionist costs $3,000+/month. Plus training, benefits, and management headaches.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50" id="solution">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI Receptionist That Integrates With Jobber
              </h2>
              <p className="text-xl text-gray-600">
                Keep using Jobber. Just add our AI to handle calls and reactivate leads.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-blue-200 bg-white shadow-lg">
                <CardContent className="pt-6">
                  <CheckCircle2 className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Answer Every Call Instantly</h3>
                  <p className="text-gray-700 mb-4">
                    Our AI picks up in under 2 seconds. Qualifies leads. Books appointments. Syncs with Jobber automatically.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Works 24/7, even after hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Handles unlimited calls simultaneously</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Never takes a sick day or vacation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-200 bg-white shadow-lg">
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Revive Dead Leads Automatically</h3>
                  <p className="text-gray-700 mb-4">
                    AI calls your old Jobber leads, re-engages them, and books jobs you thought were lost forever.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Automatically pulls leads from Jobber</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Personalized outreach at scale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Books appointments directly into your calendar</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Seamless Jobber Integration—No Platform Switch Needed
              </h3>
              <p className="text-lg text-green-100 mb-6">
                Keep your existing workflow. Our AI plugs right into Jobber and starts working immediately.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  ✓ Jobber Integration
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  ✓ Housecall Pro Compatible
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  ✓ ServiceTitan Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-white" id="calculator">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Much Are You Losing to Missed Calls?
              </h2>
              <p className="text-xl text-gray-600">
                Most Jobber users lose $10K-$50K per month from unanswered calls. Calculate your actual loss.
              </p>
            </div>
            
            <Card className="border-2 border-blue-200 shadow-xl">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Missed Calls Per Week
                    </label>
                    <Input 
                      type="number" 
                      value={missedCallsPerWeek}
                      onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
                      className="text-lg border-2 border-red-200"
                    />
                    <p className="text-xs text-gray-500 mt-1">Calls that go to voicemail when you're busy</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Average Job Value ($)
                    </label>
                    <Input 
                      type="number" 
                      value={avgJobValue}
                      onChange={(e) => setAvgJobValue(Number(e.target.value))}
                      className="text-lg"
                    />
                    <p className="text-xs text-gray-500 mt-1">Your typical invoice amount</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      % That Book With Competitors
                    </label>
                    <Input 
                      type="number" 
                      value={competitorRate}
                      onChange={(e) => setCompetitorRate(Number(e.target.value))}
                      className="text-lg border-2 border-orange-200"
                    />
                    <p className="text-xs text-gray-500 mt-1">If they can't reach you, they call the next guy</p>
                  </div>
                </div>
                
                {/* Pure Loss Focus */}
                <div className="mt-8 space-y-4">
                  {/* Monthly Loss - RED */}
                  <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 text-center">
                    <div className="text-sm opacity-90 mb-2">💸 Revenue Lost This Month</div>
                    <div className="text-5xl font-bold">${monthlyLostRevenue.toLocaleString()}</div>
                    <p className="text-red-100 mt-2 text-xs">From {jobsLostToCompetitors} jobs that went to your competitors</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Annual Risk */}
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg p-4">
                      <div className="text-xs opacity-90 mb-1">📉 Annual Revenue at Risk</div>
                      <div className="text-3xl font-bold">${annualRevenueAtRisk.toLocaleString()}</div>
                    </div>
                    
                    {/* Jobs Lost to Competitors */}
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-lg p-4">
                      <div className="text-xs opacity-90 mb-1">🎯 Jobs Lost to Competitors</div>
                      <div className="text-3xl font-bold">{jobsLostToCompetitors} jobs/month</div>
                      <p className="text-gray-300 mt-1 text-xs">They called the next guy instead</p>
                    </div>
                  </div>
                  
                  {/* Strong CTA */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center border-2 border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      This is what missed calls are costing you RIGHT NOW.
                    </h3>
                    <p className="text-base text-gray-700 mb-4">
                      Want to hear how our AI stops the bleeding?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        size="lg"
                        onClick={() => setShowDemoDialog(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Try AI Demo Call - FREE
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => {
                          trackBookingButtonClick('Schedule Strategy Call - Calculator CTA', '/best-jobber-alternative');
                          window.open('https://caljoin.com/venturevoice', '_blank');
                        }}
                        className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg"
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        Schedule Strategy Call
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" id="comparison">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How We Compare to Other Solutions
              </h2>
              <p className="text-xl text-gray-600">
                See why adding Venture Voice to Jobber beats any alternative
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-center font-bold">Jobber + Venture Voice</th>
                    <th className="px-6 py-4 text-center font-bold">Jobber Alone</th>
                    <th className="px-6 py-4 text-center font-bold">Switching to New Platform</th>
                    <th className="px-6 py-4 text-center font-bold">Hiring Receptionist</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">24/7 Call Answering</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="h-6 w-6 text-red-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-yellow-600 font-semibold">Maybe</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-yellow-600 font-semibold">Partial</span>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Dead Lead Reactivation</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="h-6 w-6 text-red-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="h-6 w-6 text-red-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="h-6 w-6 text-red-600 mx-auto" />
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Keep Existing Workflow</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="h-6 w-6 text-red-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Setup Time</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-bold">48 Hours</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-600">N/A</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 font-bold">4-8 Weeks</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 font-bold">2-4 Weeks</span>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Monthly Cost</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-bold">Fixed</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-blue-600 font-bold">$129+</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-yellow-600 font-bold">$200-500</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 font-bold">$3,000+</span>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Learning Curve</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-bold">None</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-bold">None</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 font-bold">High</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-yellow-600 font-bold">Medium</span>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">ROI Guarantee</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="h-6 w-6 text-red-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="h-6 w-6 text-red-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <XCircle className="h-6 w-6 text-red-600 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                size="lg"
                onClick={() => setShowDemoDialog(true)}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-xl font-bold px-16 py-8 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Phone className="mr-3 h-6 w-6" />
                Try AI Demo Call - FREE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Iron-Clad Guarantee
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-2xl font-bold mb-4">
                5 more jobs guarantee
              </p>
              <p className="text-xl text-green-100 mb-6">
                If you don't book at least 5 more jobs in your first 14 days, we'll refund every penny—no questions asked.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-semibold">No Setup Fees</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-semibold">Cancel Anytime</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-semibold">Full Refund Available</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => {
                  trackBookingButtonClick('Schedule a call now - Final CTA', '/best-jobber-alternative');
                  window.open('https://caljoin.com/venturevoice', '_blank');
                }}
                className="bg-white hover:bg-gray-100 text-green-600 text-xl font-bold px-16 py-8 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Schedule a call now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Call Dialog */}
      <DemoCallDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Phone className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Venture Voice</span>
            </div>
            
            <p className="text-gray-400 mb-6">
              © 2025 Venture Voice. All rights reserved.
              <br />
              AI Voice Solutions for Home Service Businesses
              <br />
              11923 NE Sumner ST, STE 852717 Portland, Oregon, 97220
            </p>
            
            <div className="flex justify-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a href="mailto:support@venturevoice.io" className="text-gray-400 hover:text-white transition-colors">
                support@venturevoice.io
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

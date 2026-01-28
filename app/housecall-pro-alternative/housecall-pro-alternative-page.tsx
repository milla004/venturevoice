
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

export default function HousecallProAlternativePage() {
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
          "name": "VentureVoice AI Receptionist for Housecall Pro",
          "description": "AI voice agent that integrates seamlessly with Housecall Pro to answer calls, reactivate dead leads, and book appointments 24/7",
          "brand": {
            "@type": "Brand",
            "name": "VentureVoice"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://venturevoice.io/housecall-pro-alternative"
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
              "name": "Does VentureVoice work with Housecall Pro?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, VentureVoice integrates seamlessly with Housecall Pro to answer every call, reactivate dead leads, and book appointments directly into your calendar."
              }
            },
            {
              "@type": "Question",
              "name": "How long does setup take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Setup takes only 48 hours. We handle the entire integration with your Housecall Pro system."
              }
            },
            {
              "@type": "Question",
              "name": "Can the AI voice be customized?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, the AI voice can be fully customized to match your business tone, brand, and specific conversation flows."
              }
            }
          ]
        })
      }} />
      
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                <Phone className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Venture Voice</span>
              </div>
            </Link>
            
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('comparison')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Competitor Comparison
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </button>
            </div>
            
            <Button 
              onClick={() => {
                trackBookingButtonClick('Schedule a Call - Nav', '/housecall-pro-alternative');
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
              <span className="text-sm font-semibold">Works With Housecall Pro, Jobber & ServiceTitan</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Housecall Pro Alternative?
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Try This Instead.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-blue-100 leading-relaxed">
              You're using Housecall Pro, but still missing calls and losing revenue.
            </p>
            
            <p className="text-lg md:text-xl mb-10 text-blue-200">
              Our AI Receptionist integrates with Housecall Pro to catch every missed call
              <br className="hidden md:block" />
              and turn dead leads into booked jobs—24/7, no humans needed.
            </p>
            
            {/* Social Proof Badge - Above buttons */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">127 contractors tested this week</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
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
                  trackBookingButtonClick('Schedule Strategy Call - Hero', '/housecall-pro-alternative');
                  window.open('https://caljoin.com/venturevoice', '_blank');
                }}
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white text-lg px-12 py-8 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Schedule Strategy Call
              </Button>
            </div>
            
            {/* Micro-Testimonial - Below buttons */}
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border-l-4 border-white rounded-lg p-4">
              <p className="text-white italic mb-2">"I was skeptical until I heard how real it sounded. Booked 3 jobs that week."</p>
              <p className="text-sm font-semibold text-white">— Mike R., HVAC Owner</p>
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
                You're Using Housecall Pro, But Still Missing Calls
              </h2>
              <p className="text-xl text-gray-600">
                Sound familiar? You're not alone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-red-200 bg-red-50/50">
                <CardContent className="pt-6">
                  <XCircle className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Missed Calls = Lost Revenue</h3>
                  <p className="text-gray-700">
                    Every missed call is a customer going to your competitor. You're bleeding money.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-red-200 bg-red-50/50">
                <CardContent className="pt-6">
                  <XCircle className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dead Leads Pile Up</h3>
                  <p className="text-gray-700">
                    Hundreds of leads sitting in your CRM. No one's following up. Pure waste.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-red-200 bg-red-50/50">
                <CardContent className="pt-6">
                  <XCircle className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Staff Can't Keep Up</h3>
                  <p className="text-gray-700">
                    Your team is in the field. Calls go to voicemail. Customers don't wait.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50" id="services">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI Receptionist That Integrates With Housecall Pro
              </h2>
              <p className="text-xl text-gray-600">
                The smarter way to capture every opportunity—without hiring more staff.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-blue-200 bg-white shadow-lg">
                <CardContent className="pt-6">
                  <CheckCircle2 className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Never Miss Another Call</h3>
                  <p className="text-gray-700 mb-4">
                    Our AI answers every call instantly, 24/7. No more voicemails. No more lost leads.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Answers in under 2 seconds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Handles multiple calls simultaneously</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Works 24/7, even on weekends</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-200 bg-white shadow-lg">
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Reactivate Dead Leads</h3>
                  <p className="text-gray-700 mb-4">
                    Automatically calls your old leads, qualifies them, and books appointments.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Turns cold leads into hot appointments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Syncs directly with Housecall Pro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">No manual data entry required</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Works Seamlessly With Your Existing Housecall Pro Setup
              </h3>
              <p className="text-lg text-green-100 mb-6">
                No complicated setup. No switching platforms. Just plug in and start booking more jobs.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  ✓ Housecall Pro Integration
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  ✓ Jobber Compatible
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  ✓ ServiceTitan Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" id="features">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Features That Drive Results
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to turn missed opportunities into revenue
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <Zap className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning-Fast Response</h3>
                  <p className="text-gray-700">
                    Answers calls in under 2 seconds. No hold music, no waiting. Just instant, professional service.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <Calendar className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Scheduling</h3>
                  <p className="text-gray-700">
                    Books appointments directly into your Housecall Pro calendar. No double-bookings, no conflicts.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Qualification</h3>
                  <p className="text-gray-700">
                    Asks the right questions to qualify leads automatically, so you only focus on high-value jobs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <Clock className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Availability</h3>
                  <p className="text-gray-700">
                    Never miss a call again—nights, weekends, holidays. Your AI receptionist is always on duty.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <BarChart3 className="h-12 w-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics Dashboard</h3>
                  <p className="text-gray-700">
                    Track every call, conversion rate, and revenue generated. Full transparency into your ROI.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <DollarSign className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dead Lead Revival</h3>
                  <p className="text-gray-700">
                    Automatically reaches out to old leads and turns them into paying customers on autopilot.
                  </p>
                </CardContent>
              </Card>
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
                Most Housecall Pro users lose $10K-$50K per month from unanswered calls. Calculate your actual loss.
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
                          trackBookingButtonClick('Schedule Strategy Call - Calculator CTA', '/housecall-pro-alternative');
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
                See why Venture Voice is the clear choice for home service businesses
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-center font-bold">Venture Voice</th>
                    <th className="px-6 py-4 text-center font-bold">Housecall Pro Alone</th>
                    <th className="px-6 py-4 text-center font-bold">Hiring Staff</th>
                    <th className="px-6 py-4 text-center font-bold">Other AI Services</th>
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
                      <span className="text-yellow-600 font-semibold">Partial</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
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
                    <td className="px-6 py-4 font-semibold text-gray-900">Housecall Pro Integration</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-blue-600 font-semibold">Native</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-yellow-600 font-semibold">Manual</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-yellow-600 font-semibold">Varies</span>
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
                      <span className="text-red-600 font-bold">2-4 Weeks</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-yellow-600 font-bold">1-2 Weeks</span>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">Monthly Cost</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-bold">Fixed</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-blue-600 font-bold">$169+</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-600 font-bold">$3,000+</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-yellow-600 font-bold">$800-2,000</span>
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
                  trackBookingButtonClick('Schedule a call now - Final CTA', '/housecall-pro-alternative');
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

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Stop Losing Money on Missed Calls?
              </h2>
              <p className="text-xl text-gray-600">
                Get started in 3 simple steps—no complicated setup, no long contracts
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Try the AI Demo</h3>
                <p className="text-gray-700">
                  Call our demo line or click to connect. Hear how natural and fast it is.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Book a Strategy Call</h3>
                <p className="text-gray-700">
                  We'll walk you through exactly how it works with your Housecall Pro setup.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Go Live in 48 Hours</h3>
                <p className="text-gray-700">
                  We handle the setup. You start capturing every call and booking more jobs.
                </p>
              </div>
            </div>
            
            <Card className="border-2 border-blue-200 shadow-xl bg-white">
              <CardContent className="pt-8 pb-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Get Started Today
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Button 
                      size="lg"
                      onClick={() => setShowDemoDialog(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold px-12 py-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="mr-3 h-6 w-6" />
                      Try AI Demo Call - FREE
                    </Button>
                    
                    <Button 
                      size="lg"
                      onClick={() => {
                        trackBookingButtonClick('Schedule Strategy Call - Contact Section', '/housecall-pro-alternative');
                        window.open('https://caljoin.com/venturevoice', '_blank');
                      }}
                      className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 text-xl font-bold px-12 py-6 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <Calendar className="mr-3 h-6 w-6" />
                      Schedule Strategy Call
                    </Button>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-900 mb-1">Call Us</p>
                      <a href="tel:+18005551234" className="text-blue-600 hover:underline">
                        1-800-555-1234
                      </a>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <ArrowRight className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-900 mb-1">Email Us</p>
                      <a href="mailto:support@venturevoice.io" className="text-blue-600 hover:underline">
                        support@venturevoice.io
                      </a>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-900 mb-1">Response Time</p>
                      <p className="text-gray-700">Under 2 hours</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    ✓ 14-Day Free Trial  ✓ No Credit Card Required  ✓ Setup in 48 Hours  ✓ Cancel Anytime
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

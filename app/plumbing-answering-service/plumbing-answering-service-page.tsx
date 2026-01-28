

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  PhoneCall,
  AlertTriangle,
  Shield,
  ArrowRight,
  Star
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { DemoCallDialog } from "@/components/demo-call-dialog";
import { trackBookingButtonClick } from "@/lib/analytics";

export default function PlumbingAnsweringServicePage() {
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
  // Missed Call Calculator state
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(15);
  const [avgJobValue, setAvgJobValue] = useState(450);
  const [competitorRate, setCompetitorRate] = useState(60); // Plumbers lose more to competitors due to emergency nature

  // Calculator results
  const missedCallsPerMonth = missedCallsPerWeek * 4;
  const jobsLostToCompetitors = Math.round(missedCallsPerMonth * (competitorRate / 100));
  const monthlyLostRevenue = jobsLostToCompetitors * avgJobValue;
  const annualRevenueAtRisk = monthlyLostRevenue * 12;

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@')) {
      return;
    }

    try {
      const response = await fetch('/api/send-report-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          missedCallsPerWeek,
          avgJobValue,
          competitorRate,
        }),
      });

      if (response.ok) {
        setEmailSubmitted(true);
        setTimeout(() => {
          setShowEmailDialog(false);
          setEmailSubmitted(false);
          setEmail("");
        }, 2000);
      } else {
        console.error('Failed to send email');
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Structured Data - LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Plumbing Answering Service",
          "provider": {
            "@type": "Organization",
            "name": "Venture Voice",
            "url": "https://venturevoice.io"
          },
          "areaServed": "United States",
          "description": "AI-powered answering service for plumbing businesses. Answer calls 24/7, book emergency jobs instantly, and never lose another customer to competitors.",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://venturevoice.io/plumbing-answering-service"
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
              "name": "How quickly can the AI answer plumbing emergency calls?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our AI answers every call in under 2 seconds. No more voicemail, no more customers calling your competitors because they couldn't reach you."
              }
            },
            {
              "@type": "Question",
              "name": "Can the AI handle after-hours emergency calls?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Our AI works 24/7/365, including nights, weekends, and holidays. It can book emergency plumbing jobs, provide pricing, and escalate urgent situations instantly."
              }
            },
            {
              "@type": "Question",
              "name": "How long does setup take for a plumbing business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Setup takes only 48 hours. We build and train your custom AI voice agent specifically for your plumbing business, integrate it with your calendar, and you're live."
              }
            },
            {
              "@type": "Question",
              "name": "Does it sound like a robot?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Our AI uses ultra-realistic voice technology that customers can't distinguish from a human receptionist. Try our free demo call to hear it yourself."
              }
            },
            {
              "@type": "Question",
              "name": "Can it give quotes for plumbing services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The AI can provide standard pricing for common jobs like drain cleaning, water heater repair, leak fixes, and emergency services based on your pricing structure."
              }
            }
          ]
        })
      }} />

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50/30">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <Phone className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Venture Voice</span>
              </Link>
              
              <div className="hidden md:flex items-center gap-6">
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('calculator')}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Calculator
                </button>
                <button 
                  onClick={() => scrollToSection('competitors')}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Competitors
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Pricing
                </button>
              </div>
              
              <Button 
                onClick={() => {
                  trackBookingButtonClick('Schedule a Call - Nav', '/plumbing-answering-service');
                  window.open('https://caljoin.com/venturevoice', '_blank');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-2.5 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section - Benefit-Driven Headline with AdSkills Formula */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10"></div>
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              {/* Urgency Badge - FOMO */}
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                  <AlertTriangle className="h-4 w-4" />
                  Plumbing Answering Service
                </span>
              </div>
              
              {/* Main Headline - "Now You Can" Formula */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight text-center mb-6">
                Now You Can Answer
                <span className="gradient-text block mt-2">Every Emergency Plumbing Call</span>
                <span className="block mt-2 text-4xl md:text-5xl">In Under 2 Seconds</span>
              </h1>
              
              {/* Sub-headline - Benefit-Focused */}
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-4">
                Stop losing $20K-$50K per month from missed calls. Our AI answering service answers 24/7, books emergency jobs instantly, and sounds 100% human.
              </p>
              
              {/* Proof Element */}
              <p className="text-center text-gray-600 mb-8">
                <strong className="text-gray-900">127 plumbers</strong> tested our AI voice this week
              </p>
              
              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  onClick={() => setShowDemoDialog(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-2xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 font-bold ring-4 ring-blue-200"
                >
                  <PhoneCall className="mr-3 h-7 w-7" />
                  Try AI Demo Call - FREE
                </Button>
                
                <Button 
                  size="lg" 
                  variant="ghost"
                  onClick={() => {
                    trackBookingButtonClick('Book Strategy Call - Hero', '/plumbing-answering-service');
                    window.open('https://caljoin.com/venturevoice', '_blank');
                  }}
                  className="text-lg px-8 py-6 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-semibold"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Strategy Call
                </Button>
              </div>
              
              {/* Risk Reversal */}
              <p className="text-center text-sm text-gray-600 mb-12">
                ✓ No credit card required  •  ✓ Takes 60 seconds  •  ✓ Hear it on your own phone
              </p>
              
              {/* Trust Indicators */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-700 font-semibold">Never Miss Emergency Calls</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">48hrs</div>
                  <div className="text-gray-700 font-semibold">Live By End of Week</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-700 font-semibold">Sounds Human</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section - Scent Trail Matching */}
        <section className="py-16 bg-gradient-to-b from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
                The Plumbing Business Problem
              </h2>
              <p className="text-xl text-gray-700 text-center mb-12">
                Every missed call is money down the drain
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-red-200 bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-red-900">
                      <XCircle className="h-8 w-8 text-red-600" />
                      After-Hours Emergencies Lost
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      A burst pipe at 2 AM? Customer calls you first, gets voicemail, calls the next plumber who answers. <strong>$800 emergency job gone.</strong>
                    </p>
                    <p className="text-sm text-red-600 font-semibold">
                      This happens 10-20 times per month for most plumbers
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-orange-200 bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-orange-900">
                      <XCircle className="h-8 w-8 text-orange-600" />
                      Peak Season Overload
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      You're under a sink, phone rings, you can't answer. Customer needs same-day service. <strong>They book with whoever picks up first.</strong>
                    </p>
                    <p className="text-sm text-orange-600 font-semibold">
                      60% of missed calls book with competitors within 30 minutes
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-red-200 bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-red-900">
                      <XCircle className="h-8 w-8 text-red-600" />
                      Weekend & Holiday Revenue
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Weekends and holidays are peak emergency times. No receptionist wants to work those hours. <strong>Losing premium-rate jobs.</strong>
                    </p>
                    <p className="text-sm text-red-600 font-semibold">
                      Emergency calls pay 1.5x-3x your normal rate
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-orange-200 bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-orange-900">
                      <XCircle className="h-8 w-8 text-orange-600" />
                      Dead Leads Sitting Idle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      You have hundreds of old quotes, unscheduled estimates, and "I'll think about it" leads. <strong>Pure gold collecting dust.</strong>
                    </p>
                    <p className="text-sm text-orange-600 font-semibold">
                      Reactivating 10% of dead leads = $5K-$15K in new revenue
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section - "Makes It Easy To" Formula */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Makes It Easy To Capture Every Dollar
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our AI answering service handles everything your receptionist does (and more) — for 90% less cost
                </p>
              </div>
              
              {/* Benefit Bullets - Sizzle, Not Steak */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Answer 24/7 — Even at 3 AM</h3>
                    <p className="text-gray-600">
                      Emergency plumbing calls happen at the worst times. Our AI never sleeps, never takes breaks, never calls in sick. <strong>Your phone rings, we answer — always.</strong>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Book Jobs While You're On-Site</h3>
                    <p className="text-gray-600">
                      Don't lose tomorrow's job while you're finishing today's. AI books appointments instantly into your calendar <strong>so you never turn away work.</strong>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Give Accurate Pricing Instantly</h3>
                    <p className="text-gray-600">
                      "How much to fix a leaky faucet?" AI knows your pricing, qualifies the job, and books same-day or next-day service. <strong>No more phone tag.</strong>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Reactivate Old Quotes Automatically</h3>
                    <p className="text-gray-600">
                      That $3,500 water heater install from 6 months ago? AI calls them back, offers a discount, and books the job. <strong>Pure profit from leads you already paid for.</strong>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sounds 100% Human (Not Robotic)</h3>
                    <p className="text-gray-600">
                      Ultra-realistic voice AI that understands plumbing emergencies, asks the right questions, and books the job. <strong>Customers can't tell it's AI.</strong>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="h-7 w-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Replace 2-3 Full-Time Staff</h3>
                    <p className="text-gray-600">
                      Save $60K-$120K per year on receptionist salaries, benefits, and training. AI costs 90% less and works 3x harder. <strong>No sick days, no drama.</strong>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Strong CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Hear It For Yourself
                </h3>
                <p className="text-xl mb-8 opacity-95">
                  Try a free AI demo call right now. You'll hear how realistic it sounds in under 60 seconds.
                </p>
                <Button 
                  size="lg"
                  onClick={() => setShowDemoDialog(true)}
                  className="bg-white text-blue-600 hover:bg-blue-50 text-xl font-bold px-12 py-7 rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <PhoneCall className="mr-3 h-6 w-6" />
                  Call Me Now - Free
                </Button>
                <p className="text-sm mt-4 opacity-90">
                  Takes 60 seconds • No signup required • Works on any phone
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  How Much Are Missed Calls Costing Your Plumbing Business?
                </h2>
                <p className="text-xl text-gray-600">
                  Calculate your actual losses from calls that go unanswered
                </p>
              </div>
              
              <Card className="shadow-2xl border-2 border-blue-100">
                <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                  <CardTitle className="text-2xl text-red-900">💸 Missed Call Revenue Calculator</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="space-y-2">
                      <Label htmlFor="missedCalls" className="text-base font-semibold">Missed Calls Per Week</Label>
                      <Input 
                        id="missedCalls"
                        type="number" 
                        value={missedCallsPerWeek}
                        onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
                        className="text-lg h-12 border-2 border-red-200 focus:border-red-400"
                      />
                      <p className="text-sm text-gray-500">When you're on a job or after-hours</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="avgJobValue" className="text-base font-semibold">Average Job Value ($)</Label>
                      <Input 
                        id="avgJobValue"
                        type="number" 
                        value={avgJobValue}
                        onChange={(e) => setAvgJobValue(Number(e.target.value))}
                        className="text-lg h-12"
                      />
                      <p className="text-sm text-gray-500">Typical invoice amount</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="competitorRate" className="text-base font-semibold">% Lost to Competitors</Label>
                      <Input 
                        id="competitorRate"
                        type="number" 
                        value={competitorRate}
                        onChange={(e) => setCompetitorRate(Number(e.target.value))}
                        className="text-lg h-12 border-2 border-orange-200 focus:border-orange-400"
                      />
                      <p className="text-sm text-gray-500">They call the next plumber</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Monthly Loss */}
                    <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-8">
                      <div className="text-center">
                        <div className="text-lg opacity-90 mb-2">💸 Revenue Lost This Month</div>
                        <div className="text-6xl font-bold">${monthlyLostRevenue.toLocaleString()}</div>
                        <p className="text-red-100 mt-4 text-sm">From {jobsLostToCompetitors} jobs stolen by competitors</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Annual Risk */}
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg p-6">
                        <div className="text-sm opacity-90 mb-2">📉 Annual Revenue at Risk</div>
                        <div className="text-4xl font-bold">${annualRevenueAtRisk.toLocaleString()}</div>
                        <p className="text-orange-100 mt-2 text-xs">If nothing changes...</p>
                      </div>
                      
                      {/* Jobs Lost */}
                      <div className="bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-lg p-6">
                        <div className="text-sm opacity-90 mb-2">🎯 Monthly Jobs Lost</div>
                        <div className="text-4xl font-bold">{jobsLostToCompetitors} jobs</div>
                        <p className="text-gray-300 mt-2 text-xs">Going to other plumbers</p>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center border-2 border-blue-200">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Stop The Bleeding Today
                      </h3>
                      <p className="text-lg text-gray-700 mb-6">
                        Hear how our AI captures every call and turns missed opportunities into booked revenue
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          onClick={() => setShowDemoDialog(true)}
                          className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold px-12 py-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                          <Phone className="mr-3 h-6 w-6" />
                          Try AI Demo Call
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          onClick={() => setShowEmailDialog(true)}
                          className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 text-xl font-bold px-12 py-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                          <DollarSign className="mr-3 h-6 w-6" />
                          Email Me Custom Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  How Venture Voice Works
                </h2>
                <p className="text-xl text-gray-600">
                  Live in 48 hours. No AI expertise needed.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">15-Minute Setup Call</h3>
                  <p className="text-gray-600">
                    Tell us about your plumbing business: services, pricing, availability. We build your custom AI voice agent.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">We Build & Train It</h3>
                  <p className="text-gray-600">
                    Our team trains the AI on plumbing terminology, common emergencies, and your specific services. Takes 48 hours.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">You Go Live</h3>
                  <p className="text-gray-600">
                    Forward your calls, and the AI starts answering. Watch appointments book automatically. Zero learning curve.
                  </p>
                </div>
              </div>
              
              <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="h-12 w-12 text-green-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Risk-Free Guarantee</h3>
                    <p className="text-gray-700">Try it for 30 days. If it doesn't book at least 5x its cost in new jobs, we refund everything.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitor Comparison Section */}
        <section id="competitors" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  How We Compare to Traditional Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  See why plumbers are switching from answering services and receptionists to AI
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-2xl shadow-2xl border-2 border-gray-200">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-100 to-gray-50">
                      <th className="p-6 text-left text-lg font-bold text-gray-900 border-b-2 border-gray-300">Feature</th>
                      <th className="p-6 text-center text-lg font-bold text-blue-600 border-b-2 border-blue-300 bg-blue-50">
                        Venture Voice AI
                      </th>
                      <th className="p-6 text-center text-lg font-semibold text-gray-700 border-b-2 border-gray-300">
                        Traditional Answering Service
                      </th>
                      <th className="p-6 text-center text-lg font-semibold text-gray-700 border-b-2 border-gray-300">
                        Full-Time Receptionist
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-semibold text-gray-900">Monthly Cost</td>
                      <td className="p-6 text-center bg-blue-50">
                        <div className="text-2xl font-bold text-blue-600">Custom Pricing</div>
                        <div className="text-xs text-gray-600">Based on your needs</div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-xl font-semibold text-gray-900">$800-$2,000</div>
                        <div className="text-xs text-gray-600">Per minute charges</div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-xl font-semibold text-gray-900">$3,500+</div>
                        <div className="text-xs text-gray-600">+ benefits</div>
                      </td>
                    </tr>
                    
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-semibold text-gray-900">24/7 Availability</td>
                      <td className="p-6 text-center bg-blue-50">
                        <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-gray-600">Sometimes</div>
                        <div className="text-xs text-gray-500">(extra cost)</div>
                      </td>
                      <td className="p-6 text-center">
                        <XCircle className="h-8 w-8 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-semibold text-gray-900">Sounds Human</td>
                      <td className="p-6 text-center bg-blue-50">
                        <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
                        <div className="text-xs text-gray-600 mt-1">100% realistic</div>
                      </td>
                      <td className="p-6 text-center">
                        <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-semibold text-gray-900">Books Appointments</td>
                      <td className="p-6 text-center bg-blue-50">
                        <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
                        <div className="text-xs text-gray-600 mt-1">Auto-syncs calendar</div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-gray-600">Manual</div>
                        <div className="text-xs text-gray-500">Calls you after</div>
                      </td>
                      <td className="p-6 text-center">
                        <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-semibold text-gray-900">Gives Pricing Quotes</td>
                      <td className="p-6 text-center bg-blue-50">
                        <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
                        <div className="text-xs text-gray-600 mt-1">Instant quotes</div>
                      </td>
                      <td className="p-6 text-center">
                        <XCircle className="h-8 w-8 text-red-500 mx-auto" />
                        <div className="text-xs text-gray-500">Takes messages only</div>
                      </td>
                      <td className="p-6 text-center">
                        <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-semibold text-gray-900">Handles Multiple Calls</td>
                      <td className="p-6 text-center bg-blue-50">
                        <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
                        <div className="text-xs text-gray-600 mt-1">Unlimited simultaneous</div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-gray-600">Limited</div>
                        <div className="text-xs text-gray-500">May go to voicemail</div>
                      </td>
                      <td className="p-6 text-center">
                        <XCircle className="h-8 w-8 text-red-500 mx-auto" />
                        <div className="text-xs text-gray-500">One at a time</div>
                      </td>
                    </tr>
                    
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-semibold text-gray-900">Reactivates Old Leads</td>
                      <td className="p-6 text-center bg-blue-50">
                        <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
                        <div className="text-xs text-gray-600 mt-1">Automatic outreach</div>
                      </td>
                      <td className="p-6 text-center">
                        <XCircle className="h-8 w-8 text-red-500 mx-auto" />
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-gray-600">Manual</div>
                        <div className="text-xs text-gray-500">If they have time</div>
                      </td>
                    </tr>
                    
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-semibold text-gray-900">Setup Time</td>
                      <td className="p-6 text-center bg-blue-50">
                        <div className="text-lg font-bold text-blue-600">48 hours</div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-gray-900">1-2 weeks</div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="text-gray-900">2-4 weeks</div>
                        <div className="text-xs text-gray-500">Hiring + training</div>
                      </td>
                    </tr>
                    
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-semibold text-gray-900">Sick Days / Vacations</td>
                      <td className="p-6 text-center bg-blue-50">
                        <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
                        <div className="text-xs text-gray-600 mt-1">Never</div>
                      </td>
                      <td className="p-6 text-center">
                        <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto" />
                        <div className="text-xs text-gray-600 mt-1">Covered by team</div>
                      </td>
                      <td className="p-6 text-center">
                        <XCircle className="h-8 w-8 text-red-500 mx-auto" />
                        <div className="text-xs text-gray-500">Need backup coverage</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">
                  The Clear Winner for Plumbing Businesses
                </h3>
                <p className="text-xl mb-6 opacity-95">
                  AI that works 24/7, costs 85% less than a receptionist, and books jobs while you sleep
                </p>
                <Button 
                  size="lg"
                  onClick={() => setShowDemoDialog(true)}
                  className="bg-white text-blue-600 hover:bg-blue-50 text-xl font-bold px-12 py-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <PhoneCall className="mr-3 h-6 w-6" />
                  Try AI Demo Call - FREE
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-xl text-gray-600">
                  One fixed monthly fee. No hidden costs. Cancel anytime.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Traditional Receptionist */}
                <Card className="border-2 border-gray-300 shadow-lg">
                  <CardHeader className="bg-gray-100">
                    <CardTitle className="text-2xl text-gray-900">Traditional Receptionist</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="text-5xl font-bold text-gray-900 mb-2">$3,500</div>
                    <div className="text-gray-600 mb-6">per month</div>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Only works 9-5 weekdays</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Sick days & vacations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Training & management time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Can only handle 1 call at a time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Miss all emergency night calls</span>
                      </li>
                    </ul>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600 mb-2">$42,000/year</div>
                        <div className="text-sm text-gray-600">+ benefits & payroll taxes</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Venture Voice AI */}
                <Card className="border-4 border-blue-500 shadow-2xl relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      BEST VALUE
                    </span>
                  </div>
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <CardTitle className="text-2xl">Venture Voice AI</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="text-5xl font-bold text-blue-600 mb-2">Let's Talk</div>
                    <div className="text-gray-600 mb-6">Tailored to your business</div>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">24/7/365 availability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">Never sick, never on vacation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">No training needed</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">Handle 100+ calls simultaneously</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">Capture every emergency call</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold">Reactivate dead leads automatically</span>
                      </li>
                    </ul>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="text-center mb-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2">Performance-Based Options Available</div>
                        <div className="text-sm text-gray-600">Pay only for results • Save $36,000+ annually</div>
                      </div>
                      
                      <Button
                        size="lg"
                        onClick={() => {
                          trackBookingButtonClick('Get Custom Quote', 'Pricing Card');
                          window.open('https://cal.com/venturevoice/15min', '_blank');
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        Get Custom Quote
                        <ArrowRight className="ml-2 h-6 w-6" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonial Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  What Plumbers Are Saying
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-blue-100 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "First week, AI booked 3 emergency calls at 2 AM. That's $2,400 I would've lost to competitors. Paid for itself in 5 days."
                    </p>
                    <p className="font-semibold text-gray-900">— Mike R., Ace Plumbing, Dallas TX</p>
                    <p className="text-sm text-gray-600">In business 12 years</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "I was skeptical it would sound robotic. Called the demo line myself — blew my mind. Customers can't tell it's AI."
                    </p>
                    <p className="font-semibold text-gray-900">— Sarah K., Metro Plumbing Solutions, Phoenix AZ</p>
                    <p className="text-sm text-gray-600">7 trucks, 14 employees</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "The AI called 200 old quotes from last year. Booked 11 jobs. $18K in revenue from leads I thought were dead."
                    </p>
                    <p className="font-semibold text-gray-900">— Tom B., Rapid Response Plumbing, Chicago IL</p>
                    <p className="text-sm text-gray-600">Solo plumber, growing fast</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-blue-100 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "Setup took 48 hours like they said. No tech skills needed. Just forwarded my phone and it started booking jobs immediately."
                    </p>
                    <p className="font-semibold text-gray-900">— James L., Premier Plumbing Co., Miami FL</p>
                    <p className="text-sm text-gray-600">Family business, 20+ years</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stop Losing Emergency Calls to Competitors
              </h2>
              <p className="text-xl mb-8 opacity-95">
                Try our AI answering service risk-free for 30 days. If it doesn't book 5x its cost, we refund everything.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg"
                  onClick={() => setShowDemoDialog(true)}
                  className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 text-xl px-12 py-7 rounded-xl shadow-xl transition-all duration-300 font-bold"
                >
                  <PhoneCall className="mr-3 h-6 w-6" />
                  Try Free Demo Call
                </Button>
                
                <Button 
                  size="lg"
                  onClick={() => window.open('https://caljoin.com/venturevoice', '_blank')}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 text-xl px-12 py-7 rounded-xl shadow-xl transition-all duration-300 font-bold"
                >
                  <Calendar className="mr-3 h-6 w-6" />
                  Schedule Live Demo
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold mb-2">No Setup Fees</div>
                  <div className="opacity-90">Get started risk-free</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">48-Hour Launch</div>
                  <div className="opacity-90">Live by end of week</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">ROI Guaranteed</div>
                  <div className="opacity-90">Or your money back</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Link href="/" className="flex items-center space-x-2">
                <Phone className="h-6 w-6 text-blue-500" />
                <span className="text-lg font-bold text-white">Venture Voice</span>
              </Link>
              
              <div className="text-center">
                <p>&copy; 2025 Venture Voice. All rights reserved.</p>
                <p className="text-sm mt-1">AI Answering Service for Plumbing Businesses</p>
                <p className="text-sm mt-1">11923 NE Sumner ST, STE 852717 Portland, Oregon, 97220</p>
                <div className="flex items-center justify-center gap-4 mt-2">
                  <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
                  <span className="text-gray-600">|</span>
                  <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-sm font-semibold text-white">Contact Us</p>
                <a href="mailto:support@venturevoice.io" className="text-sm hover:text-blue-400 transition-colors">support@venturevoice.io</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Demo Call Dialog */}
        <DemoCallDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
        
        {/* Email Dialog for Custom Report */}
        <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Get Your Custom Loss Report
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                We'll email you a detailed breakdown of your missed revenue opportunity plus tips to capture more calls.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              {!emailSubmitted ? (
                <>
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-red-700 mb-1">Your Current Monthly Loss:</div>
                      <div className="text-3xl font-bold text-red-600">${monthlyLostRevenue.toLocaleString()}</div>
                      <div className="text-xs text-red-600 mt-1">From {jobsLostToCompetitors} jobs lost to competitors</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">Your Email Address</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-lg"
                    />
                  </div>
                  
                  <Button
                    onClick={handleEmailSubmit}
                    disabled={!email || !email.includes('@')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-6 rounded-xl"
                  >
                    <DollarSign className="mr-2 h-5 w-5" />
                    Email Me My Custom Report
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    We'll also include a free guide: "5 Ways to Never Miss Another Emergency Call"
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Report Sent!</h3>
                  <p className="text-gray-600">Check your inbox for your custom loss analysis.</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

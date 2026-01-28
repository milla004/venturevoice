"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, PhoneCall, Zap, CheckCircle2, TrendingUp, AlertTriangle, ArrowRight, PlayCircle, Star, Timer } from "lucide-react";
import { DemoCallDialog } from "@/components/demo-call-dialog";
import Link from "next/link";

export default function HomePage() {
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  
  // Calculator state
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(15);
  const [avgJobValue, setAvgJobValue] = useState(850);
  const [competitorRate, setCompetitorRate] = useState(72);
  
  // Calculator results
  const missedCallsPerMonth = missedCallsPerWeek * 4;
  const jobsLostToCompetitors = Math.round(missedCallsPerMonth * (competitorRate / 100));
  const monthlyLostRevenue = jobsLostToCompetitors * avgJobValue;
  const annualRevenueAtRisk = monthlyLostRevenue * 12;
  const avgLeadCost = 87;
  const monthlyWastedAdSpend = Math.round(jobsLostToCompetitors * avgLeadCost);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Phone className="h-7 w-7 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Venture Voice</span>
            </div>
            
            <Button 
              size="lg"
              onClick={() => setShowDemoDialog(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 sm:px-6 py-2.5 text-xs sm:text-base font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <PhoneCall className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="whitespace-nowrap">PROVE IT IN 60 SEC</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - 3-Part Headline Structure */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            {/* Lead-in Headline - Pattern Interrupt */}
            <p className="text-xl md:text-2xl font-bold text-gray-700 max-w-3xl mx-auto">
              If You're Still Manually Calling Back Leads In 2025, You're Literally <span className="text-red-600">Throwing $27,000/Month In The Trash</span>
            </p>

            {/* Main Headline - Big Promise */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-gray-900">Plug In The 24/7 AI </span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">'Revenue Mercenary'</span>
              <span className="text-gray-900"> That Contacts Every Hot Lead Within </span>
              <span className="text-blue-600">60 Seconds</span>
              <span className="text-gray-900"> — Before They Call Your Competitor</span>
            </h1>

            {/* Subheadline - Specific Details */}
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Get Your Own Ruthless AI Sales Agent Working <span className="font-bold text-blue-600">24/7/365 In 14 Days</span> (For <span className="font-bold">Less Than 1/3 Of A Minimum-Wage Employee</span>) — And Watch Your Booked Appointments <span className="font-bold text-green-600">3.2x</span> While You Finally Work <span className="font-bold">ON Your Business Instead Of IN It</span>
            </p>

            {/* Social Proof Badge */}
            <div className="flex items-center justify-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2 w-fit mx-auto">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700">127 contractors tested this week</span>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col items-center gap-4 pt-6 px-4">
              <Button 
              size="lg"
              onClick={() => setShowDemoDialog(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 sm:px-3.5 py-2.5 sm:py-1.5 text-xs sm:text-base font-bold tracking-wide sm:tracking-[2px] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-1 sm:gap-2"
            >
              <PhoneCall className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="whitespace-nowrap">PROVE IT IN 60 SEC</span>
            </Button>
              <p className="text-xs sm:text-sm text-gray-600 text-center px-4">
                No credit card required • Takes 60 seconds • Works on any phone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">$200K+</div>
              <div className="text-sm md:text-base text-blue-100">Annual Savings</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">24/7</div>
              <div className="text-sm md:text-base text-blue-100">Always Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">87%</div>
              <div className="text-sm md:text-base text-blue-100">Lead Conversion</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black mb-2">&lt;60s</div>
              <div className="text-sm md:text-base text-blue-100">Speed to Lead</div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Copy - Story + Pain Agitation */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-xl font-semibold text-gray-900">
              Look — if you're running HVAC, plumbing, electrical, dental, or any service business where leads cost real money... you're bleeding cash right now.
            </p>
            
            <p className="text-lg">
              Not from bad ads. Not from poor targeting.
            </p>
            
            <p className="text-lg font-bold text-red-600">
              But from the <span className="text-2xl">97-second gap</span> between when a lead submits your form and when your team finally gets around to calling them back.
            </p>
            
            <p className="text-lg">
              By then? They've already called your competitor. Clicked another ad. Forgotten they even contacted you.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
              <p className="text-xl font-bold text-gray-900 mb-2">
                Here's the brutal truth:
              </p>
              <p className="text-lg">
                Your $87-per-lead Google Ads spend? <span className="font-black text-red-600 text-2xl">72%</span> of it's going straight into the trash because you're too slow.
              </p>
            </div>

            <p className="text-xl font-bold text-gray-900 mt-8">
              But what if you could...
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-lg">Contact <strong>EVERY</strong> lead within 60 seconds (not 60 minutes)?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-lg">Qualify them based on <strong>YOUR</strong> exact criteria (not some call center script)?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-lg">Book appointments directly into <strong>YOUR</strong> calendar (while you're sleeping)?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-lg">Do it <strong>24/7/365</strong> (without paying overtime, benefits, or dealing with turnover)?</span>
              </li>
            </ul>

            <div className="text-center my-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                This Isn't Another Chatbot.
              </h2>
              <p className="text-xl text-gray-700">
                This isn't "automation software." This is a <strong className="text-blue-600">ruthless lead-conversion machine</strong> that works while you don't.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-12">
            Here's What Happens When You <span className="text-blue-600">'Plug Emma In'</span>:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-green-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-xl">1</span>
                  </div>
                  <CardTitle className="text-2xl">Day 1</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">We install. Connect to your CRM. Set your rules.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-xl">2</span>
                  </div>
                  <CardTitle className="text-2xl">Day 2</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">Emma starts answering calls. Qualifying leads. Booking appointments.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-xl">3</span>
                  </div>
                  <CardTitle className="text-2xl">Day 3</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">You wake up to a calendar full of qualified, ready-to-buy leads.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-xl">14</span>
                  </div>
                  <CardTitle className="text-2xl">Day 14</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700">You've <strong>doubled</strong> your booked appointments WITHOUT increasing ad spend.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-300 shadow-lg md:col-span-2 bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-xl">30</span>
                  </div>
                  <CardTitle className="text-2xl">Day 30</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-gray-900">You're wondering why you waited this long.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Math - Revenue Calculator */}
      <section id="calculator" className="py-20 px-4 bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              The Math <span className="text-green-600">Your Accountant</span> Will Love:
            </h2>
          </div>
          
          <Card className="shadow-2xl border-4 border-red-300 mb-12">
            <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
              <CardTitle className="text-3xl">💸 What You're ACTUALLY Losing Calculator</CardTitle>
              <CardDescription className="text-base text-red-100">Stop guessing. See the real damage.</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="space-y-3">
                  <Label htmlFor="missedCalls" className="text-base font-bold text-gray-900">Missed Calls Per Week</Label>
                  <Input 
                    id="missedCalls"
                    type="number" 
                    value={missedCallsPerWeek}
                    onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
                    className="text-xl h-14 border-2 border-red-300 focus:border-red-500 font-semibold"
                  />
                  <p className="text-sm text-gray-600">How many go to voicemail</p>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="avgJobValue" className="text-base font-bold text-gray-900">Average Job Value ($)</Label>
                  <Input 
                    id="avgJobValue"
                    type="number" 
                    value={avgJobValue}
                    onChange={(e) => setAvgJobValue(Number(e.target.value))}
                    className="text-xl h-14 border-2 border-gray-300 focus:border-blue-500 font-semibold"
                  />
                  <p className="text-sm text-gray-600">Your typical invoice</p>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="competitorRate" className="text-base font-bold text-gray-900">% Lost To Competitors</Label>
                  <Input 
                    id="competitorRate"
                    type="number" 
                    value={competitorRate}
                    onChange={(e) => setCompetitorRate(Number(e.target.value))}
                    className="text-xl h-14 border-2 border-orange-300 focus:border-orange-500 font-semibold"
                  />
                  <p className="text-sm text-gray-600">They're calling the next guy</p>
                </div>
              </div>
              
              {/* Results */}
              <div className="space-y-4 bg-gradient-to-br from-red-100 to-orange-100 p-8 rounded-2xl border-2 border-red-300">
                <div className="flex items-center justify-between pb-3 border-b-2 border-red-300">
                  <span className="text-lg font-semibold text-gray-900">Wasted Ad Spend Per Month:</span>
                  <span className="text-3xl font-black text-red-600">${monthlyWastedAdSpend.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b-2 border-red-300">
                  <span className="text-lg font-semibold text-gray-900">Lost Revenue Per Month:</span>
                  <span className="text-3xl font-black text-red-600">${monthlyLostRevenue.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-xl font-bold text-gray-900">💀 ANNUAL Damage:</span>
                  <span className="text-4xl md:text-5xl font-black text-red-600">${annualRevenueAtRisk.toLocaleString()}</span>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="mt-10 grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-4">❌ Current (Without Emma):</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>$2,500/month ads → <strong>20 booked jobs</strong></p>
                    <p className="text-2xl font-black text-red-600">$10,000 revenue</p>
                  </div>
                </div>
                
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-4">✅ With Emma:</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Same $2,500/month ads → <strong>65 booked jobs</strong></p>
                    <p className="text-2xl font-black text-green-600">$32,500 revenue</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  That's <span className="text-green-600 text-3xl">$22,500</span> more monthly revenue
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  For a cost of a meal per day. (Do the math. I'll wait.)
                </p>
                <Button 
                  size="lg"
                  onClick={() => setShowDemoDialog(true)}
                  className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-3 sm:px-3.5 py-2.5 sm:py-1.5 text-xs sm:text-base font-bold tracking-wide sm:tracking-[2px] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-1 sm:gap-2"
                >
                  <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">PROVE IT IN 60 SEC</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-4">
            But Don't Take My Word For It...
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Here's what happens when real business owners stop being skeptical and start testing:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-white shadow-lg border-2 border-blue-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-lg text-gray-700 mb-4 italic leading-relaxed">
                  "I was skeptical until I heard how real it sounded. Booked 3 jobs that week."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">MR</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Mike R.</p>
                    <p className="text-sm text-gray-600">HVAC Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white shadow-lg border-2 border-green-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-lg text-gray-700 mb-4 italic leading-relaxed">
                  "Was spending $14,500/month on Google Ads. Getting 38 leads/week. Booking 7 appointments. After Emma: <span className="font-bold text-green-600">Same ad spend. Now booking 32 appointments.</span> That's 357% more booked jobs WITHOUT spending another dime."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">MP</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Mike's Plumbing</p>
                    <p className="text-sm text-gray-600">23 employees</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-8">
            Here's Where I <span className="text-red-600">Lose Most Skeptics</span>...
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-xl">
              You're thinking:
            </p>
            
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <span>"AI can't sound human."</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <span>"My business is different."</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <span>"This is too good to be true."</span>
              </li>
            </ul>

            <p className="text-xl font-semibold text-gray-900 mt-8">
              I get it. You've been burned before.
            </p>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-600 p-8 rounded-r-2xl my-8">
              <p className="text-2xl font-black text-gray-900 mb-4">
                So I'm not asking you to believe me.
              </p>
              <p className="text-xl font-bold text-orange-900">
                I'm going to PROVE IT in the next 60 seconds.
              </p>
            </div>

            <p className="text-xl">
              Click below. Fill out your info. Emma will call you in under 60 seconds.
            </p>

            <p className="text-lg">
              Not to sell you. Not to pitch you.
            </p>

            <p className="text-xl font-bold text-gray-900">
              But to show you EXACTLY what your customers will experience.
            </p>

            <div className="bg-blue-50 rounded-2xl p-8 my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">You'll hear:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg">How she handles objections</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg">How she qualifies leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg">How she books appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg">How she sounds <strong>100% human</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-lg">How she could be working for <strong>YOU</strong> tonight</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 my-8">
              <p className="text-xl font-bold text-red-900">
                ⚠️ Warning: If you're not ready to have your mind blown about what's possible in 2025... don't click.
              </p>
            </div>

            <p className="text-xl font-semibold text-gray-900">
              But if you're tired of watching $22,500/month walk out the door because your team can't keep up...
            </p>

            <p className="text-2xl font-black text-gray-900">
              This 60-second demo will change everything.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA - Hard Close */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready To Experience Emma In Action?
          </h2>
          <p className="text-xl md:text-2xl mb-4">
            Just pop in your info below & experience it in <span className="font-black">live-action...in less than 60 seconds!</span>
          </p>
          <p className="text-lg mb-8 text-blue-100">
            <span className="font-bold">IMPORTANT:</span> Due to high demand, Emma's live test calls are currently limited to only US & Canada numbers. International? No worries, opt in anyway and we'll reach you via email with next steps.
          </p>

          <Button 
            size="lg"
            onClick={() => setShowDemoDialog(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 rounded-lg px-3 sm:px-3.5 py-2.5 sm:py-1.5 text-xs sm:text-base font-bold tracking-wide sm:tracking-[2px] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 mb-6 flex items-center justify-center gap-1 sm:gap-2"
          >
            <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <span className="whitespace-nowrap">PROVE IT IN 60 SEC</span>
          </Button>

          <p className="text-sm text-blue-200">
            No credit card required • Takes 60 seconds • Works on any phone
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Phone className="h-6 w-6 text-blue-500" />
                <span className="text-lg font-bold text-white">VentureVoice</span>
              </div>
              <p className="text-sm text-gray-400">
                AI Voice Solutions for Service Base Businesses
              </p>
            </div>
            
            {/* Address */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3">Address</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                11923 NE Sumner ST, STE 852717<br />
                Portland, Oregon, 97220
              </p>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold text-white mb-3">Contact Us</h3>
              <a 
                href="mailto:support@venturevoice.io" 
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                support@venturevoice.io
              </a>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
              <p className="text-sm">© 2024 VentureVoice AI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Call Dialog */}
      <DemoCallDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </div>
  );
}

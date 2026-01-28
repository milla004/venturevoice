"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneCall } from "lucide-react";
import { trackDemoCallConversion, trackDemoPopupOpened, trackFormStarted, trackDemoCallSuccess } from "@/lib/analytics";

interface DemoCallDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoCallDialog({ open, onOpenChange }: DemoCallDialogProps) {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formStarted, setFormStarted] = useState(false);

  // Track when popup is opened
  useState(() => {
    if (open) {
      trackDemoPopupOpened();
    }
  });

  // Track when user starts filling the form
  const handleFormStart = () => {
    if (!formStarted) {
      trackFormStarted();
      setFormStarted(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName || !phone || !email) {
      alert("Please fill in all required fields");
      return;
    }

    // Basic phone validation
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Fire Google Ads conversion event
      trackDemoCallConversion();

      const response = await fetch("/api/demo-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          phone,
          email,
          businessType,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to initiate demo call");
      }

      // Track successful submission
      trackDemoCallSuccess();

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onOpenChange(false);
        // Reset form
        setFirstName("");
        setPhone("");
        setEmail("");
        setBusinessType("");
        setFormStarted(false);
      }, 3000);
    } catch (error) {
      console.error("Error initiating demo call:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        {showSuccess ? (
          <div className="text-center py-8">
            <div className="mb-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <PhoneCall className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold mb-2">Success!</DialogTitle>
            <DialogDescription className="text-lg">
              Emma will call you in the next 60 seconds. Please answer your phone!
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-t-lg p-4 -mx-6 -mt-6 mb-4">
                <div className="text-sm text-center text-gray-600 font-semibold mb-2">Step 1 of 2</div>
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-black text-center">
                Want To Test Drive Emma (Our AI Sales Agent)?
              </DialogTitle>
              <DialogDescription className="text-center text-base md:text-lg">
                Just pop in your info below & experience it in live-action....<span className="italic">in less than 60 seconds!</span>
              </DialogDescription>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-red-600">IMPORTANT:</span> Due to high demand, Emma's live test calls are currently limited to only US & Canada numbers. International? No worries, opt in anyway and we'll reach you via email with next steps.
                </p>
              </div>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-base font-bold">
                  First Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    handleFormStart();
                  }}
                  className="h-12 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-bold">
                  Email <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your best email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    handleFormStart();
                  }}
                  className="h-12 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-bold">
                  Phone <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    handleFormStart();
                  }}
                  className="h-12 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessType" className="text-base font-bold">
                  Business Type
                </Label>
                <Input
                  id="businessType"
                  type="text"
                  placeholder="e.g., HVAC, Plumbing, Electrical, Landscaping"
                  value={businessType}
                  onChange={(e) => {
                    setBusinessType(e.target.value);
                    handleFormStart();
                  }}
                  className="h-12 text-base"
                />
                <p className="text-sm text-gray-500">Optional - helps Emma personalize your demo</p>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <span>Initiating Call...</span>
                ) : (
                  <>
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Test The Agent Right Now!
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic text-center">
                "I was skeptical about AI until I heard it speak at Dan Martell's event. The conversation was so realistic, I knew right then we needed this." - <span className="font-bold">Colin Lyons</span>
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

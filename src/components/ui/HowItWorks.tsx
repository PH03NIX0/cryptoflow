import { Download, Wallet, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Create Your Account",
    description: "Sign up in minutes with our streamlined onboarding process. No complicated forms or lengthy verification.",
  },
  {
    number: "02",
    icon: Wallet,
    title: "Fund Your Wallet",
    description: "Easily deposit crypto or fiat through multiple payment options with zero deposit fees.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Start Trading",
    description: "Access 50+ cryptocurrencies and start trading immediately with intuitive tools and real-time data.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: '#0E0B1F' }}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#A78BFA' }}>
            How It Works
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto px-4" style={{ color: '#9CA3AF' }}>
            Getting started with CryptoFlow is easy. Follow these simple steps to begin your crypto journey.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 mb-8 sm:mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.number}
                className="shadow-lg relative"
                style={{ 
                  backgroundColor: '#1E1B2E',
                  borderColor: '#393d4b',
                  borderWidth: '1px'
                }}
              >
                {/* Step Number Badge */}
                <div 
                  className="absolute -top-3 -left-3 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg"
                  style={{ 
                    backgroundColor: '#2D2A3F',
                    borderColor: '#393d4b',
                    borderWidth: '1px',
                    color: '#9989eb'
                  }}
                >
                  {step.number}
                </div>

                <CardContent className="p-6 pt-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#3a3958' }}>
                    <Icon className="w-6 h-6" style={{ color: '#9989eb' }} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-sm" style={{ color: '#9CA3AF' }}>
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Create Free Account
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

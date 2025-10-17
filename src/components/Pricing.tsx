import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: 0,
      description: "Perfect for beginners getting started with crypto trading.",
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      features: [
        "Access to 20+ cryptocurrencies",
        "Basic charting tools",
        "Market data with 15-min delay",
        "Email support",
        "Mobile app access",
      ],
    },
    {
      name: "Pro",
      price: 19,
      popular: true,
      description: "Designed for active traders seeking advanced tools.",
      buttonText: "Start 7-Day Free Trial",
      buttonVariant: "default" as const,
      features: [
        "Access to 50+ cryptocurrencies",
        "Advanced charting tools",
        "Real-time market data",
        "Priority email support",
        "Reduced trading fees (0.1%)",
        "API access",
        "Portfolio analytics",
      ],
    },
    {
      name: "Enterprise",
      price: 49,
      description: "Comprehensive solution for professional traders.",
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      features: [
        "Access to all cryptocurrencies",
        "Professional-grade charts",
        "Real-time market data",
        "24/7 dedicated support",
        "Zero trading fees",
        "Advanced API access",
        "Institutional-grade security",
        "Custom reporting",
        "Team management",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: '#0E0B1F' }}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#A78BFA' }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto px-4" style={{ color: '#9CA3AF' }}>
            Choose the plan that best fits your trading needs. All plans include our core platform features.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex rounded-full p-1" style={{ backgroundColor: '#1E1B2E' }}>
            <button
              onClick={() => setIsAnnual(false)}
              className="px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all"
              style={{
                backgroundColor: !isAnnual ? '#9989eb' : 'transparent',
                color: '#FFFFFF',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className="px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
              style={{
                backgroundColor: isAnnual ? '#9989eb' : 'transparent',
                color: '#FFFFFF',
              }}
            >
              Annual
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ backgroundColor: '#9989eb20' }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="relative shadow-lg"
              style={{
                backgroundColor: '#1E1B2E',
                borderColor: plan.popular ? '#9989eb' : '#393d4b',
                borderWidth: '1px',
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: '#9989eb' }}
                >
                  Most Popular
                </div>
              )}
              
              <CardHeader className="space-y-6 pt-8 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl font-bold text-white">
                      ${isAnnual ? Math.floor(plan.price * 0.8) : plan.price}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-lg" style={{ color: '#9CA3AF' }}>
                        /month
                      </span>
                    )}
                  </div>
                  <p style={{ color: '#9CA3AF' }}>{plan.description}</p>
                </div>

                <Button
                  className="w-full"
                  variant={plan.buttonVariant}
                  style={
                    plan.buttonVariant === "default"
                      ? { backgroundColor: '#9989eb', color: '#FFFFFF' }
                      : { backgroundColor: '#2E2A3E', color: '#FFFFFF', borderColor: '#393d4b' }
                  }
                >
                  {plan.buttonText}
                </Button>
              </CardHeader>

              <CardContent className="space-y-4">
                <h4 className="font-semibold text-white">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: '#9989eb' }}
                      />
                      <span style={{ color: '#9CA3AF' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

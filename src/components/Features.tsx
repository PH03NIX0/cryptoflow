import { TrendingUp, Lock, Zap, PieChart, Bell, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Monitor market movements with advanced charts and indicators updated in real-time.",
  },
  {
    icon: Lock,
    title: "Bank-level Security",
    description: "Your assets are protected with military-grade encryption and multi-factor authentication.",
  },
  {
    icon: Zap,
    title: "Instant Execution",
    description: "Execute trades in milliseconds with our high-performance trading engine.",
  },
  {
    icon: PieChart,
    title: "Smart Portfolio",
    description: "Optimize your crypto holdings with AI-driven portfolio management.",
  },
  {
    icon: Bell,
    title: "Price Alerts",
    description: "Never miss an opportunity with customizable real-time alerts.",
  },
  {
    icon: Shield,
    title: "Cold Storage",
    description: "Majority of assets stored in offline cold wallets for maximum safety.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: '#0E0B1F' }}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#A78BFA' }}>
            Powerful Features
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto px-4" style={{ color: '#9CA3AF' }}>
            CryptoFlow gives you the edge with advanced tools designed for both beginners and professional traders.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="shadow-lg"
                style={{ 
                  backgroundColor: '#1E1B2E',
                  borderColor: '#393d4b',
                  borderWidth: '1px'
                }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#3a3958' }}>
                    <Icon className="w-6 h-6" style={{ color: '#9989eb' }} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-sm" style={{ color: '#9CA3AF' }}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.jpg";

const Hero = () => {
  return (
    <section
      className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, #2D1B4F 0%, #1A0F2E 50%, #000000 100%)',
      }}
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border backdrop-blur-sm text-xs sm:text-sm"
              style={{
                backgroundColor: '#1E293B',
                borderColor: '#334155',
              }}
            >
              <span className="font-semibold whitespace-nowrap" style={{ color: '#A78BFA' }}>
                New Feature
              </span>
              <span className="text-white">AI-Powered Signals</span>
              <ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: '#A78BFA' }} />
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary-glow)), hsl(var(--foreground)))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Trade Crypto
                </span>
                <br />
                <span className="text-foreground">with Confidence</span>
                <br />
                <span className="text-foreground">& Clarity</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Experience seamless cryptocurrency trading with real-time analytics, AI-powered insights, and zero commission fees.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Start Trading
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="dark" size="lg">
                View Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 divide-x divide-border/30">
              <div className="pl-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">$2.5B+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Trading Volume</div>
              </div>
              <div className="pl-4 sm:pl-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">120K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Active Traders</div>
              </div>
              <div className="pl-4 sm:pl-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Global Markets</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative max-w-xl mx-auto lg:mx-0">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img
                src={heroLaptop}
                alt="Cryptocurrency trading dashboard"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Security Badge */}
            <div className="absolute -top-4 -left-4 p-4 rounded-xl bg-background/20 backdrop-blur-md border border-white/10 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/30">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground/80">Security Level</div>
                  <div className="text-sm font-semibold text-foreground/90">Enterprise</div>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-background/20 backdrop-blur-md border border-white/10 shadow-lg animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-success/30">
                  <TrendingUp className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground/80">24h Change</div>
                  <div className="text-xl font-bold text-success">+12.34%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
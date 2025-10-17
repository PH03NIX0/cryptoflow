import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: '#0E0B1F' }}>
      <div className="container mx-auto max-w-5xl">
        <div
          className="rounded-2xl p-8 sm:p-12 md:p-16 text-center space-y-6 sm:space-y-8"
          style={{
            backgroundColor: '#1E1B2E',
            borderColor: '#393d4b',
            borderWidth: '1px',
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-white">Ready to revolutionize your </span>
            <span style={{ color: '#A78BFA' }}>crypto trading</span>
            <span className="text-white">?</span>
          </h2>
          
          <p className="text-base sm:text-lg max-w-2xl mx-auto px-4" style={{ color: '#9CA3AF' }}>
            Join thousands of traders who have already upgraded their crypto experience with CryptoFlow. Start today with zero risk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="text-white font-semibold px-8"
              style={{ backgroundColor: '#9989eb' }}
            >
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold px-8"
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                borderColor: '#393d4b',
              }}
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm" style={{ color: '#9CA3AF' }}>
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

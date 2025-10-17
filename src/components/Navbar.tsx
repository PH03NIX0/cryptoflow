import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/10">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold">
              <span className="text-foreground">Crypto</span>
              <span className="text-primary">Flow</span>
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
              How it works
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">
              Testimonials
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium">
              FAQ
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="text-foreground hover:text-primary transition-colors font-medium">
              Login
            </a>
            <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Buy Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              How it works
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              FAQ
            </a>
            <div className="pt-4 space-y-3">
              <a
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Login
              </a>
              <Button size="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Buy Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

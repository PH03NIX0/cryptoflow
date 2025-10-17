import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6" style={{ backgroundColor: '#0E0B1F' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">
              <span className="text-white">Crypto</span>
              <span style={{ color: '#A78BFA' }}>Flow</span>
            </h2>
            <p className="text-base max-w-sm" style={{ color: '#9CA3AF' }}>
              The most trusted cryptocurrency platform, empowering traders with innovative tools and unparalleled security.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" style={{ color: '#9CA3AF' }} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  Exchange
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  Wallet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  Institutional
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  DeFi Platform
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  Market Data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  Legal & Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#9CA3AF' }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
          style={{
            borderTopColor: '#393d4b',
            borderTopWidth: '1px',
          }}
        >
          <p className="text-sm sm:text-base" style={{ color: '#9CA3AF' }}>
            © {currentYear} CryptoFlow. All rights reserved. ~ Distributed By{" "}
            <a
              href="https://themewagon.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#A78BFA' }}
              className="hover:underline"
            >
              ThemeWagon
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base">
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              style={{ color: '#9CA3AF' }}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              style={{ color: '#9CA3AF' }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              style={{ color: '#9CA3AF' }}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

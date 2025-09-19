import { Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8">
          {/* Logo & Mission */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-2">Heimdall Strategy</h3>
            <p className="text-sm">The Modern ERP for Political Campaigns.</p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="/features" className="hover:text-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-blue-400 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-blue-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/press" className="hover:text-blue-400 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/case-studies" className="hover:text-blue-400 transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-white mb-4 text-center md:text-left">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left">
            &copy; {currentYear} Heimdall Strategy, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="/do-not-sell-or-share"
              className="text-sm hover:text-blue-400 transition-colors"
            >
              Do Not Sell or Share
            </a>
            <a href="/privacy" className="text-sm hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

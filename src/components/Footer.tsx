import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-heimdall-white text-heimdall-text-subtle">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8">
          {/* Logo & Mission */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-heimdall-text-primary mb-2">Heimdall Strategy</h3>
            <p className="text-sm">The Political ERP for Modern Campaigns.</p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-heimdall-text-primary mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-heimdall-accent-teal transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-heimdall-accent-teal transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-heimdall-accent-teal transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-heimdall-accent-teal transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-heimdall-text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-heimdall-accent-teal transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-heimdall-accent-teal transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-heimdall-accent-teal transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-heimdall-accent-teal transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-heimdall-text-primary mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-heimdall-accent-teal transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-heimdall-accent-teal transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-heimdall-accent-teal transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-heimdall-accent-teal transition-colors">API Status</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-2 md:col-span-1">
             <h4 className="font-semibold text-heimdall-text-primary mb-4">Connect</h4>
             <div className="flex space-x-4">
                <a href="#" aria-label="Twitter" className="hover:text-heimdall-accent-teal transition-colors"><Twitter size={20} /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-heimdall-accent-teal transition-colors"><Linkedin size={20} /></a>
                <a href="#" aria-label="Facebook" className="hover:text-heimdall-accent-teal transition-colors"><Facebook size={20} /></a>
             </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left">
            &copy; {currentYear} Heimdall Strategy, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-sm hover:text-heimdall-accent-teal transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-heimdall-accent-teal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
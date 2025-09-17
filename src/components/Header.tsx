import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // For a mobile menu icon

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-heimdall-primary-navy/50 bg-heimdall-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo/Brand Name */}
        <a href="/" className="text-2xl font-bold text-heimdall-text-primary">
          Heimdall Strategy
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-heimdall-text-body hover:text-heimdall-accent-teal transition-colors">
            Features
          </a>
          <a href="#" className="text-heimdall-text-body hover:text-heimdall-accent-teal transition-colors">
            Pricing
          </a>
          <a href="#" className="text-heimdall-text-body hover:text-heimdall-accent-teal transition-colors">
            About Us
          </a>
          <a href="#" className="text-heimdall-text-body hover:text-heimdall-accent-teal transition-colors">
            Contact
          </a>
        </nav>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-heimdall-accent-red hover:bg-heimdall-accent-red/90 text-white"
          >
            Request a Demo
          </Button>
        </div>

        {/* Mobile Menu Toggle (Placeholder for now) */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-heimdall-text-primary" />
          <span className="sr-only">Toggle mobile menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // For a mobile menu icon
import { RequestDemoDialog } from "@/components/RequestDemoDialog";
import { DesktopNav } from "@/components/DesktopNav";
import { MobileNav } from "@/components/MobileNav";
import Logo from "@/components/Logo"; // Import the new Logo component

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-heimdall-border bg-heimdall-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <DesktopNav />
        </nav>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <RequestDemoDialog>
            <Button
              size="sm"
              variant="destructive"
            >
              Request a Demo
            </Button>
          </RequestDemoDialog>
        </div>

        {/* Mobile Menu Toggle */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
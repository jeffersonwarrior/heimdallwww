import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // For a mobile menu icon
import { RequestDemoDialog } from "@/components/RequestDemoDialog";
import { DesktopNav } from "@/components/DesktopNav";
import { MobileNav } from "@/components/MobileNav";
import Logo from "@/components/Logo"; // Import the new Logo component
import Breadcrumb from "@/components/Breadcrumb";

const Header = () => {
  return (
    <>
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
              <Button size="sm" variant="destructive">
                Request a Demo
              </Button>
            </RequestDemoDialog>
          </div>

          {/* Mobile Menu Toggle */}
          <MobileNav />
        </div>
      </header>

      {/* Breadcrumb Section */}
      <div className="bg-heimdall-bg-light/50 border-b border-heimdall-border/20 py-2">
        <div className="container mx-auto px-6">
          <Breadcrumb />
        </div>
      </div>
    </>
  );
};

export default Header;

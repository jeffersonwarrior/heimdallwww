import { Button } from "@/components/ui/button";
import { NetworkVisual } from "@/components/NetworkVisual";
import { ShieldCheck, Users, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="w-full bg-gradient-to-b from-heimdall-white to-heimdall-bg-light text-heimdall-text-body">
      <main className="container mx-auto px-6">
        <section className="relative flex min-h-screen flex-col items-center justify-center lg:flex-row lg:justify-between">
          {/* Left Content Area */}
          <div className="z-10 w-full max-w-2xl text-center lg:w-3/5 lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-heimdall-text-primary sm:text-5xl md:text-6xl">
              The Political ERP for Modern Campaigns
            </h1>
            <p className="mt-6 text-lg leading-8 sm:text-xl">
              Unify your campaign with an AI-powered platform for omnichannel
              communications, automated compliance, and authenticated messaging.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="w-full bg-heimdall-accent-red px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-heimdall-accent-red/90 focus-visible:ring-heimdall-accent-red sm:w-auto"
              >
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-heimdall-primary-navy px-8 py-4 text-base font-semibold text-heimdall-primary-navy shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-heimdall-primary-navy/5 focus-visible:ring-heimdall-primary-navy sm:w-auto"
              >
                Explore Features
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-heimdall-accent-teal" />
                <span className="text-sm font-medium text-heimdall-text-subtle">
                  Compliance Automation
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="h-5 w-5 text-heimdall-accent-teal" />
                <span className="text-sm font-medium text-heimdall-text-subtle">
                  Unified Voter Data
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TrendingUp className="h-5 w-5 text-heimdall-accent-teal" />
                <span className="text-sm font-medium text-heimdall-text-subtle">
                  AI-Powered Outreach
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="absolute right-0 top-0 h-full w-full lg:relative lg:w-2/5">
            <NetworkVisual className="h-full w-full" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
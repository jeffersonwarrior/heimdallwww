import { Button } from "@/components/ui/button";
import { NetworkVisual } from "@/components/NetworkVisual";
import GeometricPattern from "@/components/GeometricPattern";
import { ShieldCheck, Users, TrendingUp, Database, Scale, Megaphone } from "lucide-react";

const Index = () => {
  return (
    <div className="w-full bg-gradient-to-b from-heimdall-white to-heimdall-bg-light text-heimdall-text-body">
      <main className="container mx-auto px-6">
        {/* Hero Section */}
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

        {/* Problem Agitation Section */}
        <section className="relative py-32 bg-heimdall-primary-navy text-white overflow-hidden">
          <GeometricPattern />
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold italic mb-12 leading-tight">
              Stop the campaign adrenaline drain.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
              {/* Problem 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 flex flex-col items-center text-center shadow-lg">
                <Database className="h-12 w-12 text-heimdall-accent-red mb-4" />
                <h3 className="text-xl font-bold mb-2">Fragmented Data</h3>
                <p className="text-white/80 text-base leading-relaxed mb-4">
                  Voter data, communications, and volunteer efforts are scattered across disparate systems.
                </p>
                <p className="text-2xl font-bold text-heimdall-accent-teal">
                  37% <span className="text-base font-normal text-white/80">lack integration</span>
                </p>
              </div>

              {/* Problem 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 flex flex-col items-center text-center shadow-lg">
                <Scale className="h-12 w-12 text-heimdall-accent-red mb-4" />
                <h3 className="text-xl font-bold mb-2">Compliance Headaches</h3>
                <p className="text-white/80 text-base leading-relaxed mb-4">
                  Navigating complex election laws and reporting requirements is a constant struggle.
                </p>
                <p className="text-2xl font-bold text-heimdall-accent-teal">
                  25% <span className="text-base font-normal text-white/80">face audit risks</span>
                </p>
              </div>

              {/* Problem 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 flex flex-col items-center text-center shadow-lg">
                <Megaphone className="h-12 w-12 text-heimdall-accent-red mb-4" />
                <h3 className="text-xl font-bold mb-2">Ineffective Outreach</h3>
                <p className="text-white/80 text-base leading-relaxed mb-4">
                  Struggling to reach voters with personalized, impactful messages across channels.
                </p>
                <p className="text-2xl font-bold text-heimdall-accent-teal">
                  15% <span className="text-base font-normal text-white/80">lower engagement</span>
                </p>
              </div>
            </div>

            <p className="max-w-3xl mx-auto text-lg text-white/90 leading-relaxed">
              These challenges drain resources and momentum. It's time for a unified approach.
              Heimdall Strategy offers the only <strong className="text-white relative inline-block">Political ERP
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-heimdall-accent-teal scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </strong> designed to streamline operations, ensure compliance, and amplify your message.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
import { Button } from "@/components/ui/button";
import { NetworkVisual } from "@/components/NetworkVisual";
import GeometricPattern from "@/components/GeometricPattern";
import { ShieldCheck, Users, TrendingUp, Database, Scale, Megaphone, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  const testimonials = [
    {
      quote: "Heimdall Strategy transformed our campaign's outreach. The AI-powered personalization led to unprecedented engagement rates.",
      author: "Sarah Chen",
      title: "Campaign Manager, 'Vote for Change'",
      avatarSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SC"
    },
    {
      quote: "Compliance used to be a nightmare. With Heimdall, we're confident our reporting is always accurate and audit-ready.",
      author: "David Lee",
      title: "Treasurer, 'Progressive Alliance'",
      avatarSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DL"
    },
    {
      quote: "Having all our voter data in one place, intelligently organized, has made our targeting incredibly effective. A game-changer!",
      author: "Maria Rodriguez",
      title: "Field Director, 'Community First'",
      avatarSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MR"
    },
    {
      quote: "The unified platform saved us countless hours. We can now focus on strategy instead of administrative burdens.",
      author: "John Smith",
      title: "Political Consultant",
      avatarSrc: "https://api.dicebear.com/7.x/initials/svg?seed=JS"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-heimdall-white to-heimdall-bg-light text-heimdall-text-body">
      <Header />
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

        {/* Core Capabilities Showcase Section */}
        <section className="py-24 bg-heimdall-bg-light text-heimdall-text-body">
          <div className="max-w-6xl mx-auto px-6">
            {/* Capability 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="lg:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-1 bg-heimdall-accent-teal mr-3"></div>
                  <h3 className="text-3xl font-bold text-heimdall-text-primary">AI-Powered Communications</h3>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  Leverage advanced AI to craft personalized messages, optimize delivery channels, and engage voters more effectively than ever before.
                </p>
                <div className="bg-heimdall-accent-teal/5 border border-heimdall-accent-teal/20 rounded-lg p-4 mb-6">
                  <p className="text-4xl font-bold text-heimdall-accent-teal">
                    +40% <span className="text-base font-normal text-heimdall-text-body">Voter Engagement</span>
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-heimdall-text-body">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Automated message personalization</span>
                  </li>
                  <li className="flex items-center text-heimdall-text-body">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Omnichannel delivery (SMS, Email, Social)</span>
                  </li>
                  <li className="flex items-center text-heimdall-text-body">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Sentiment analysis for real-time feedback</span>
                  </li>
                </ul>
              </div>
              <div className="relative p-6 bg-white rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300 lg:order-2">
                <img src="/placeholder.svg" alt="AI Communications Dashboard" className="w-full h-auto rounded-md" />
                <div className="absolute inset-0 rounded-lg pointer-events-none" style={{ boxShadow: '0 20px 25px rgba(0,0,0,0.15)' }}></div>
              </div>
            </div>

            {/* Capability 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-1 bg-heimdall-accent-teal mr-3"></div>
                  <h3 className="text-3xl font-bold text-heimdall-text-primary">Automated Compliance & Reporting</h3>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  Stay ahead of complex election laws with built-in compliance checks, automated reporting, and audit-ready data.
                </p>
                <div className="bg-heimdall-accent-teal/5 border border-heimdall-accent-teal/20 rounded-lg p-4 mb-6">
                  <p className="text-4xl font-bold text-heimdall-accent-teal">
                    99% <span className="text-base font-normal text-heimdall-text-body">Reduction in Compliance Errors</span>
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-heimdall-text-body">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Real-time regulatory updates</span>
                  </li>
                  <li className="flex items-center text-heimdall-text-body">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Automated FEC and state-level reporting</span>
                  </li>
                  <li className="flex items-center text-heimdall-text-body">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Secure, auditable transaction logs</span>
                  </li>
                </ul>
              </div>
              <div className="relative p-6 bg-white rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300 lg:order-1">
                <img src="/placeholder.svg" alt="Compliance Dashboard" className="w-full h-auto rounded-md" />
                <div className="absolute inset-0 rounded-lg pointer-events-none" style={{ boxShadow: '0 20px 25px rgba(0,0,0,0.15)' }}></div>
              </div>
            </div>

            {/* Capability 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-1 bg-heimdall-accent-teal mr-3"></div>
                  <h3 className="text-3xl font-bold text-heimdall-text-primary">Unified Voter Data Platform</h3>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  Consolidate all voter information, volunteer data, and donor insights into a single, intelligent platform for a 360-degree view.
                </p>
                <div className="bg-heimdall-accent-teal/5 border border-heimdall-accent-teal/20 rounded-lg p-4 mb-6">
                  <p className="text-4xl font-bold text-heimdall-accent-teal">
                    2x <span className="text-base font-normal text-heimdall-text-body">Faster Data Analysis</span>
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-heimdall-text-body">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Centralized voter profiles</span>
                  </li>
                  <li className="flex items-center text-heimdall-text-body">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Integrated volunteer management</span>
                  </li>
                  <li className="flex items-center text-heimdall-text-body">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Advanced segmentation and targeting</span>
                  </li>
                </ul>
              </div>
              <div className="relative p-6 bg-white rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300 lg:order-2">
                <img src="/placeholder.svg" alt="Voter Data Platform" className="w-full h-auto rounded-md" />
                <div className="absolute inset-0 rounded-lg pointer-events-none" style={{ boxShadow: '0 20px 25px rgba(0,0,0,0.15)' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-heimdall-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-heimdall-text-primary mb-12 leading-tight">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  title={testimonial.title}
                  avatarSrc={testimonial.avatarSrc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Closing/CTA Section */}
        <section className="relative py-24 bg-heimdall-primary-navy text-white text-center overflow-hidden">
          <GeometricPattern /> {/* Reusing the geometric pattern for visual interest */}
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready to Transform Your Campaign?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-10 text-white/90">
              Heimdall Strategy empowers political campaigns with unparalleled efficiency, compliance, and outreach.
              Stop wasting time and start winning.
            </p>
            <Button
              size="lg"
              className="bg-heimdall-accent-red px-10 py-5 text-lg font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-heimdall-accent-red/90 focus-visible:ring-heimdall-accent-red"
            >
              Request Your Free Demo Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
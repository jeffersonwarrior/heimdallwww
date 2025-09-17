import { ShieldCheck, Users, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:min-h-screen lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-heimdall-text-primary dark:text-white sm:text-6xl">
            The Political ERP for Modern Campaigns
          </h1>
          <p className="mt-6 text-lg leading-8 text-heimdall-text-body dark:text-gray-300">
            Unify your campaign with an AI-powered platform for omnichannel communications, automated compliance, and authenticated messaging.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-heimdall-red px-8 py-3 text-lg font-semibold text-white shadow-sm transition-transform hover:bg-red-700 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heimdall-red"
            >
              Request a Demo
            </a>
            <a href="#" className="rounded-md border-2 border-heimdall-navy bg-white px-8 py-3 text-lg font-semibold text-heimdall-navy shadow-sm transition-transform hover:bg-gray-100 hover:-translate-y-0.5 dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-gray-700">
              Explore Features
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-6 text-base leading-7 text-heimdall-text-body sm:grid-cols-3 dark:text-gray-400">
            <div className="flex gap-x-2">
              <ShieldCheck className="h-6 w-6 flex-none text-heimdall-teal" />
              <span>Compliance Automated</span>
            </div>
            <div className="flex gap-x-2">
              <Zap className="h-6 w-6 flex-none text-heimdall-teal" />
              <span>AI-Powered Insights</span>
            </div>
            <div className="flex gap-x-2">
              <Users className="h-6 w-6 flex-none text-heimdall-teal" />
              <span>Unified Voter Data</span>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className="h-96 rounded-xl bg-heimdall-navy/10 ring-1 ring-inset ring-heimdall-navy/20 lg:h-[32rem] flex items-center justify-center dark:bg-heimdall-navy/20 dark:ring-heimdall-navy/30">
            <p className="text-heimdall-text-subtle">
              [Abstract network visualization]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
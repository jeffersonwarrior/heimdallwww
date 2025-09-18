import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Helmet } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import Analytics from "@/components/analytics/Analytics";
import { CookieConsentProvider } from "@/components/privacy/CookieConsent";
import Features from "@/pages/Features";
import Pricing from "@/pages/Pricing";
import Integrations from "@/pages/Integrations";
import Security from "@/pages/Security";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import Press from "@/pages/Press";
import Blog from "@/pages/Blog";
import CaseStudies from "@/pages/CaseStudies";
import Docs from "@/pages/Docs";
import APIStatus from "@/pages/APIStatus";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CookieConsentProvider>
        <SEOHead />
        <Helmet>
          <html lang="en" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/security" element={<Security />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/press" element={<Press />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/status" element={<APIStatus />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
        <Analytics />
      </CookieConsentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

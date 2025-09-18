import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Heimdall Strategy</title>
        <meta
          name="description"
          content="Privacy policy for Heimdall Strategy's political campaign ERP platform."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-8 text-heimdall-text-primary">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-heimdall-text-secondary mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an
                account, request information, or contact us. This may include your name, email
                address, phone number, and any other information you choose to provide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services.</li>
                <li>Process transactions and respond to requests or demos.</li>
                <li>
                  Sales and marketing communications via phone calls, emails, and SMS/text messages.
                  By submitting your information or contacting us, you agree that we (or our service
                  providers) may contact you at the email address or phone number you provide,
                  including by using an automated system as permitted by law. Message/data rates may
                  apply; frequency varies. You can opt-out at any time (reply STOP to texts, use
                  email unsubscribe, or contact us).
                </li>
                <li>Security, fraud prevention, legal compliance, and enforcing our terms.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or
                destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Sharing and Third-Party Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Vendors and service providers that host, analyze, communicate, or support our
                  operations under confidentiality obligations.
                </li>
                <li>Legal/safety where required or permitted by law.</li>
                <li>Business transfers (e.g., merger, acquisition), subject to applicable law.</li>
                <li>With your consent or direction.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information. You may
                also opt out of certain communications from us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p>
                Questions or requests? Email{" "}
                <a href="mailto:contact@heimdallstrategy.com" className="underline">
                  contact@heimdallstrategy.com
                </a>
                .
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;

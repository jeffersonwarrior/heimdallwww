import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Heimdall Strategy</title>
        <meta name="description" content="Terms and conditions for using Heimdall Strategy." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-8 text-heimdall-text-primary">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-heimdall-text-secondary mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Use of the Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You must be at least 18 years old or the age of majority in your jurisdiction.
                </li>
                <li>
                  You will use the Services in compliance with applicable laws and these Terms.
                </li>
                <li>
                  You will not interfere with or disrupt the Services or attempt unauthorized
                  access.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                2. Sales & Marketing Communications; Consent to Contact
              </h2>
              <p>
                By providing your contact information, you expressly consent to be contacted by
                Heimdall Strategy (and our service providers) for sales and marketing via phone,
                email, and SMS/text at the numbers and addresses you provide, including by automated
                means where permitted by law. Message/data rates may apply; frequency varies. You
                may opt out at any time by replying STOP to texts, using the unsubscribe link in
                emails, or contacting us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
              <p>
                The Services and all related content are owned by Heimdall Strategy or its licensors
                and protected by intellectual property laws. Except as permitted in writing, you may
                not copy, modify, distribute, or create derivative works.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
              <p>
                The Services may link to third-party websites or services. We are not responsible
                for third-party content or practices. Your use of third-party services is at your
                own risk and subject to their terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Disclaimers</h2>
              <p>
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT UNINTERRUPTED OR
                ERROR-FREE SERVICE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, HEIMDALL STRATEGY AND ITS AFFILIATES WILL
                NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Heimdall Strategy and its affiliates from
                any claims, liabilities, losses, and expenses (including attorneys’ fees) arising
                from your use of the Services or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Modifications</h2>
              <p>
                We may modify these Terms at any time. Changes are effective upon posting the
                updated date above. Your continued use constitutes acceptance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware, without regard to its
                conflict of laws principles. You agree to the exclusive jurisdiction of courts in
                Delaware.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p>
                Questions about these Terms? Email{" "}
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

export default Terms;

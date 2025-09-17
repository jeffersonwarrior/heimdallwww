"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is Heimdall Strategy?",
    answer: "Heimdall Strategy is a Political ERP (Enterprise Resource Planning) platform designed for modern political campaigns. It unifies communications, automates compliance, and provides authenticated messaging, all powered by AI.",
  },
  {
    question: "How does AI-powered communication work?",
    answer: "Our AI analyzes voter data and engagement patterns to help craft personalized messages, optimize delivery channels (SMS, email, social media), and predict the most effective outreach strategies for different voter segments.",
  },
  {
    question: "Is the platform compliant with election laws?",
    answer: "Yes, compliance is a core feature. Heimdall Strategy includes built-in compliance checks, automated reporting for FEC and state-level requirements, and secure, auditable transaction logs to help you stay ahead of complex election laws.",
  },
  {
    question: "Can I integrate my existing voter data?",
    answer: "Absolutely. Our platform is designed to consolidate all voter information, volunteer data, and donor insights into a single, intelligent platform, providing a 360-degree view of your campaign's ecosystem.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer comprehensive support including onboarding assistance, dedicated account managers, and a knowledge base with tutorials and best practices to ensure your campaign's success.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-heimdall-bg-light">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-heimdall-text-primary mb-12 leading-tight">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full text-left">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-heimdall-text-primary hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-heimdall-text-body text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
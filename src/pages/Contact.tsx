import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Contact — Heimdall Strategy</title>
        <meta
          name="description"
          content="Get in touch with our team for demos, support, and partnership inquiries."
        />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-lg text-muted-foreground">Coming soon.</p>
    </main>
  );
}

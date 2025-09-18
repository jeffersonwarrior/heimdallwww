import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>About Us — Heimdall Strategy</title>
        <meta
          name="description"
          content="Learn about our mission to modernize campaign operations with an AI-powered ERP."
        />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-muted-foreground">Coming soon.</p>
    </main>
  );
}

import { Helmet } from "react-helmet-async";

export default function Features() {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Features — Heimdall Strategy</title>
        <meta
          name="description"
          content="Explore Heimdall's AI communications, compliance automation, and unified data features."
        />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Features</h1>
      <p className="text-lg text-muted-foreground">Coming soon.</p>
    </main>
  );
}

import { Helmet } from "react-helmet-async";

export default function Integrations() {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Integrations — Heimdall Strategy</title>
        <meta
          name="description"
          content="Integrate Heimdall with your data, communications, and compliance stack."
        />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Integrations</h1>
      <p className="text-lg text-muted-foreground">Coming soon.</p>
    </main>
  );
}

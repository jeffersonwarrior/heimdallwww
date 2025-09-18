import { Helmet } from "react-helmet-async";

export default function Pricing() {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Pricing — Heimdall Strategy</title>
        <meta name="description" content="Simple pricing for campaigns of all sizes." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Pricing</h1>
      <p className="text-lg text-muted-foreground">Coming soon.</p>
    </main>
  );
}

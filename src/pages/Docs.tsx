import { Helmet } from "react-helmet-async";

export default function Docs() {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Documentation — Heimdall Strategy</title>
        <meta name="description" content="Guides and API references for Heimdall Strategy." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Documentation</h1>
      <p className="text-lg text-muted-foreground">Coming soon.</p>
    </main>
  );
}

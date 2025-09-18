import { Helmet } from "react-helmet-async";

export default function Security() {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Security — Heimdall Strategy</title>
        <meta
          name="description"
          content="Our approach to data privacy, security, and compliance for campaigns."
        />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Security</h1>
      <p className="text-lg text-muted-foreground">Coming soon.</p>
    </main>
  );
}

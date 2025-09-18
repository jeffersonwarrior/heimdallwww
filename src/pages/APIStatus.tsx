import { Helmet } from "react-helmet-async";

export default function APIStatus() {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>API Status — Heimdall Strategy</title>
        <meta
          name="description"
          content="Current system status and uptime for Heimdall services."
        />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">API Status</h1>
      <p className="text-lg text-muted-foreground">Coming soon.</p>
    </main>
  );
}

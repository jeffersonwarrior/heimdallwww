import { Helmet } from "react-helmet-async";

export default function Blog() {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Blog — Heimdall Strategy</title>
        <meta
          name="description"
          content="Insights on campaign operations, AI communications, and compliance."
        />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="text-lg text-muted-foreground">Coming soon.</p>
    </main>
  );
}

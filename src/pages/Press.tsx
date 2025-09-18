import { Helmet } from "react-helmet-async";

export default function Press() {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Press — Heimdall Strategy</title>
        <meta
          name="description"
          content="Press resources and media inquiries for Heimdall Strategy."
        />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Press</h1>
      <p className="text-lg text-muted-foreground">Coming soon.</p>
    </main>
  );
}

import { Helmet } from "react-helmet-async";

export default function DoNotSellShare() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Do Not Sell or Share My Personal Information — Heimdall Strategy</title>
        <meta
          name="description"
          content="Information about your privacy choices at Heimdall Strategy."
        />
      </Helmet>
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-6 text-heimdall-text-primary">
          Do Not Sell or Share My Personal Information
        </h1>
        <div className="prose prose-lg max-w-none">
          <p>
            Heimdall Strategy does not sell or share personal information as those terms are defined
            by applicable U.S. state laws (including California’s CPRA). We also honor applicable
            opt-out preference signals.
          </p>
          <p>
            If you have questions about this statement, or believe it should be updated, please
            email
            <a className="underline" href="mailto:hello@heimdallstrategy.com">
              {" "}
              hello@heimdallstrategy.com
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}

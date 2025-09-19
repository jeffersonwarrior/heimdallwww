import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const defaultTitle = "Heimdall Strategy — The Modern ERP for Political Campaigns";
const defaultDescription =
  "Unify your campaign with an AI platform for omnichannel communications, automated compliance, and authenticated messaging.";
const defaultKeywords =
  "AI political campaigns, artificial intelligence ERP, political campaign software, automated compliance, omnichannel communications, Claude integration, OpenAI campaigns, machine learning voter outreach, political AI platform, campaign automation, AI chatbots, intelligent voter engagement";
const baseUrl = "https://heimdallstrategy.com";
const defaultOgImage = "/og-image.svg";

export default function SEOHead({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  canonical,
  ogImage = defaultOgImage,
}: SEOHeadProps = {}) {
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  // Structured Data for Organization and Software Application
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Heimdall Strategy",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/heimdall-logo.svg`,
        },
        description:
          "AI-powered political campaign management platform providing omnichannel communications, automated compliance, and voter engagement tools.",
        foundingDate: "2024",
        areaServed: "US",
        knowsAbout: [
          "Political Campaigns",
          "AI Communications",
          "Campaign Compliance",
          "Voter Engagement",
          "Political Technology",
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${baseUrl}/#software`,
        name: "Heimdall Strategy Platform",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser",
        description:
          "AI-powered ERP platform for political campaigns featuring automated compliance, omnichannel communications, and intelligent voter data management.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free platform with usage-based pricing",
        },
        applicationSubCategory: "Political Campaign Management",
        keywords: keywords,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        featureList: [
          "AI-powered voter communications",
          "Automated compliance reporting",
          "Omnichannel message delivery",
          "Real-time sentiment analysis",
          "Unified voter data platform",
          "Machine learning personalization",
          "FEC and state-level compliance automation",
          "Multi-channel campaign coordination",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Heimdall Strategy",
        description: description,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
      <link rel="canonical" href={fullCanonical} />

      {/* AI Crawler specific meta tags */}
      <meta name="googlebot" content="index,follow,max-image-preview:large" />
      <meta name="bingbot" content="index,follow" />
      <meta name="slurp" content="index,follow" />
      <meta name="duckduckbot" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Heimdall Strategy" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter/X Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      <meta name="twitter:site" content="@heimdallstrategy" />
      <meta name="twitter:creator" content="@heimdallstrategy" />

      {/* Additional SEO meta tags */}
      <meta name="author" content="Heimdall Strategy" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      {/* Favicons and manifest */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
}

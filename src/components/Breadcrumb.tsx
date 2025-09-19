import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const location = useLocation();

  // Auto-generate breadcrumbs from current path if items not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split("/").filter((segment) => segment);
    const breadcrumbs: BreadcrumbItem[] = [];

    // Add home
    breadcrumbs.push({ label: "Home", path: "/" });

    // Create breadcrumbs from path segments
    let currentPath = "";
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;

      // Convert kebab-case to title case
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      // Handle special cases
      const specialLabels: Record<string, string> = {
        "ai-features": "AI Features",
        "case-studies": "Case Studies",
        "api-status": "API Status",
        "do-not-sell-or-share": "Do Not Sell or Share",
      };

      breadcrumbs.push({
        label: specialLabels[segment] || label,
        path: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = items || generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (location.pathname === "/") {
    return null;
  }

  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://heimdallstrategy.com${item.path}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <nav
        className={`flex items-center space-x-1 text-sm text-muted-foreground ${className}`}
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-1">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground/60" />}
              {index === 0 && <Home className="h-4 w-4 mr-2 text-muted-foreground/60" />}
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-foreground transition-colors">
                  {index === 0 ? "Home" : item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

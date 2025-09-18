import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Index from "@/pages/Index";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const helmetContext: Record<string, unknown> = {};

test("renders hero heading", () => {
  render(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    </HelmetProvider>,
  );
  const heading = screen.getByText(/The Modern ERP for Political Campaigns/i);
  expect(heading).toBeInTheDocument();
});

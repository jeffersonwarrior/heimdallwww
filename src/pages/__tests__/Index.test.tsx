import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "@/pages/Index";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

test("renders hero heading", () => {
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    </HelmetProvider>,
  );
  const heading = screen.getByText(/The Modern ERP for Political Campaigns/i);
  expect(heading).toBeInTheDocument();
});

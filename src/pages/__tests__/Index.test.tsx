import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "@/pages/Index";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

test("renders hero heading", () => {
  render(
    <HelmetProvider>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </HelmetProvider>,
  );
  const heading = screen.getByText(/The Modern ERP for Political Campaigns/i);
  expect(heading).toBeInTheDocument();
});

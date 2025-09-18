import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "@/pages/Index";
import { BrowserRouter } from "react-router-dom";

test("renders hero heading", () => {
  render(
    <BrowserRouter>
      <Index />
    </BrowserRouter>,
  );
  const heading = screen.getByText(/The Modern ERP for Political Campaigns/i);
  expect(heading).toBeInTheDocument();
});

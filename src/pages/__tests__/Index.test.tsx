import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Index from "../Index";

test("renders hero heading", () => {
  render(<Index />);
  const heading = screen.getByText(/The Modern ERP forPolitical Campaigns/i);
  expect(heading).toBeInTheDocument();
});

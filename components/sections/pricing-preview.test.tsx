import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PricingPreview } from "./pricing-preview";
import { pricingItems } from "@/lib/constants";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => (
      <div {...props}>{children}</div>
    ),
  },
  useInView: () => true,
}));

describe("PricingPreview Section", () => {
  it("renders all 5 pricing cards", () => {
    render(<PricingPreview />);

    pricingItems.forEach((item) => {
      expect(screen.getByText(item.service)).toBeInTheDocument();
    });
  });

  it("renders the section heading", () => {
    render(<PricingPreview />);

    expect(
      screen.getByRole("heading", { name: /Pricing/i })
    ).toBeInTheDocument();
  });

  it("renders each card with service name and price", () => {
    render(<PricingPreview />);

    pricingItems.forEach((item) => {
      expect(screen.getByText(item.service)).toBeInTheDocument();
      expect(screen.getByText(item.price)).toBeInTheDocument();
    });
  });
});

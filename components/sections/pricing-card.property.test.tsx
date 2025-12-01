import { describe, it, expect, vi, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import * as fc from "fast-check";
import { PricingCard } from "./pricing-card";
import type { PricingItem } from "@/lib/types";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

/**
 * **Feature: tekyra-landing, Property 3: Pricing Card Data Integrity**
 * 
 * *For any* pricing item with a service name and price,
 * the rendered pricing card should display both the service name and the price value.
 * 
 * **Validates: Requirements 5.3**
 */
describe("Property Test: Pricing Card Data Integrity", () => {
  afterEach(() => {
    cleanup();
  });

  // Arbitrary generator for valid pricing item data
  const pricingItemArbitrary = fc.record({
    id: fc.uuid(),
    // Service name: realistic service name (letters and spaces)
    service: fc.stringMatching(/^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/).filter(s => s.length >= 3 && s.length <= 30),
    // Price: realistic price format (e.g., "from $700", "$1500–$3000")
    price: fc.oneof(
      fc.stringMatching(/^from \$\d{3,5}$/),
      fc.stringMatching(/^\$\d{3,5}–\$\d{3,5}$/),
      fc.stringMatching(/^\$\d{3,5}$/)
    ),
    // Optional description
    description: fc.option(fc.stringMatching(/^[A-Za-z ]{10,50}$/), { nil: undefined }),
  });

  it("should render service name and price for any valid pricing item", () => {
    fc.assert(
      fc.property(pricingItemArbitrary, (item: PricingItem) => {
        cleanup(); // Ensure clean state before each render
        const { container } = render(<PricingCard item={item} />);

        // Check service name is rendered (in CardTitle)
        const serviceElement = container.querySelector(".text-white");
        expect(serviceElement).toBeInTheDocument();
        expect(serviceElement?.textContent).toBe(item.service);

        // Check price is rendered (in the cyan text element)
        const priceElement = container.querySelector(".text-tekyra-cyan");
        expect(priceElement).toBeInTheDocument();
        expect(priceElement?.textContent).toBe(item.price);
      }),
      { numRuns: 100 }
    );
  });
});

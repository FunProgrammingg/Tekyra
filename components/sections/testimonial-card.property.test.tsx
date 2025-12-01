import { describe, it, expect, vi, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import * as fc from "fast-check";
import { TestimonialCard } from "./testimonial-card";
import type { Testimonial } from "@/lib/types";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

// Mock next/image to render a simple img element
vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}));

/**
 * **Feature: tekyra-landing, Property 2: Testimonial Rendering Completeness**
 * 
 * *For any* testimonial data object with valid fields (name, occupation, avatar, rating, quote),
 * the rendered testimonial component should contain all five elements visible in the output.
 * 
 * **Validates: Requirements 4.2**
 */
describe("Property Test: Testimonial Rendering Completeness", () => {
  afterEach(() => {
    cleanup();
  });

  // Arbitrary generator for valid testimonial data with realistic constraints
  // Use trimmed strings to match realistic user input
  const testimonialArbitrary = fc.record({
    id: fc.uuid(),
    // Name: realistic name format (letters only, no trailing spaces)
    name: fc.stringMatching(/^[A-Z][a-z]{2,14}$/).map(s => s.trim()),
    // Occupation: realistic occupation (letters and spaces, trimmed)
    occupation: fc.stringMatching(/^[A-Z][a-z]+ [A-Z][a-z]+$/).map(s => s.trim()),
    avatar: fc.constant("/images/avatars/test.jpg"),
    rating: fc.integer({ min: 0, max: 5 }),
    // Quote: realistic quote (letters, spaces, punctuation)
    quote: fc.stringMatching(/^[A-Z][a-z ]{10,50}[.!]$/).map(s => s.trim()),
  });

  it("should render all required fields for any valid testimonial", () => {
    fc.assert(
      fc.property(testimonialArbitrary, (testimonial: Testimonial) => {
        cleanup(); // Ensure clean state before each render
        const { container } = render(<TestimonialCard testimonial={testimonial} />);

        // Check name is rendered (use h4 element specifically)
        const nameElement = container.querySelector("h4");
        expect(nameElement).toBeInTheDocument();
        expect(nameElement?.textContent).toBe(testimonial.name);

        // Check occupation is rendered (use p element with specific class)
        const occupationElement = container.querySelector("p.text-white\\/60");
        expect(occupationElement).toBeInTheDocument();
        expect(occupationElement?.textContent).toBe(testimonial.occupation);

        // Check avatar is rendered (via img element)
        const avatarImg = container.querySelector("img");
        expect(avatarImg).toBeInTheDocument();
        expect(avatarImg?.getAttribute("alt")).toBe(`${testimonial.name}'s avatar`);

        // Check rating is rendered (via aria-label on the rating container)
        const ratingElement = container.querySelector(`[aria-label="Rating: ${testimonial.rating} out of 5 stars"]`);
        expect(ratingElement).toBeInTheDocument();

        // Check quote is rendered (use blockquote element)
        const quoteElement = container.querySelector("blockquote");
        expect(quoteElement).toBeInTheDocument();
        expect(quoteElement?.textContent).toContain(testimonial.quote);
      }),
      { numRuns: 100 }
    );
  });
});

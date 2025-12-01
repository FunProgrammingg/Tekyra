import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Testimonials } from "./testimonials";
import { testimonials } from "@/lib/constants";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => (
      <div {...props}>{children}</div>
    ),
  },
  useInView: () => true,
  AnimatePresence: ({ children }: React.PropsWithChildren<object>) => <>{children}</>,
}));

// Mock next/image to render a simple img element
vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}));

describe("Testimonials Section", () => {
  it("renders the section heading", () => {
    render(<Testimonials />);

    expect(
      screen.getByRole("heading", { name: /What Our Clients Say/i })
    ).toBeInTheDocument();
  });

  it("renders all 4 testimonials (Linda, Kyle, Mickey, Joaquín)", () => {
    render(<Testimonials />);

    // Check all testimonial names are rendered (may appear multiple times due to responsive layout)
    expect(screen.getAllByText("Linda").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Kyle").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Mickey").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Joaquín").length).toBeGreaterThanOrEqual(1);
  });

  it("renders occupation for each testimonial", () => {
    render(<Testimonials />);

    testimonials.forEach((testimonial) => {
      expect(screen.getAllByText(testimonial.occupation).length).toBeGreaterThanOrEqual(1);
    });
  });

  it("renders quote for each testimonial", () => {
    const { container } = render(<Testimonials />);

    testimonials.forEach((testimonial) => {
      // Quotes are in blockquote elements
      const blockquotes = container.querySelectorAll("blockquote");
      const hasQuote = Array.from(blockquotes).some(
        (bq) => bq.textContent?.includes(testimonial.quote)
      );
      expect(hasQuote).toBe(true);
    });
  });

  it("renders avatar for each testimonial", () => {
    render(<Testimonials />);

    testimonials.forEach((testimonial) => {
      expect(
        screen.getAllByAltText(`${testimonial.name}'s avatar`).length
      ).toBeGreaterThanOrEqual(1);
    });
  });

  it("renders 5-star rating for each testimonial", () => {
    render(<Testimonials />);

    // Each testimonial should have a rating element (may appear multiple times)
    testimonials.forEach((testimonial) => {
      expect(
        screen.getAllByLabelText(`Rating: ${testimonial.rating} out of 5 stars`).length
      ).toBeGreaterThanOrEqual(1);
    });
  });
});

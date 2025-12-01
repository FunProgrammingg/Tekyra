import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CTA } from "./cta";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("CTA Section", () => {
  it("renders the headline correctly", () => {
    render(<CTA />);

    expect(
      screen.getByRole("heading", {
        name: /Let's build something powerful together\./i,
      })
    ).toBeInTheDocument();
  });

  it("renders the Book a Free Consultation button", () => {
    render(<CTA />);

    expect(
      screen.getByRole("button", { name: /Book a Free Consultation/i })
    ).toBeInTheDocument();
  });
});

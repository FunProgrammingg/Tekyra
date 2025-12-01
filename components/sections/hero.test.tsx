import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./hero";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => (
      <div {...props}>{children}</div>
    ),
  },
  useScroll: () => ({ scrollYProgress: { current: 0 } }),
  useTransform: () => "0%",
}));

describe("Hero Section", () => {
  it("renders the title correctly", () => {
    render(<Hero />);
    
    expect(
      screen.getByRole("heading", {
        name: /AI-Powered Digital Solutions For Modern Businesses\./i,
      })
    ).toBeInTheDocument();
  });

  it("renders the subtitle correctly", () => {
    render(<Hero />);
    
    expect(
      screen.getByText(/Websites • AI Chatbots • Automations/i)
    ).toBeInTheDocument();
  });

  it("renders the View Services button", () => {
    render(<Hero />);
    
    expect(
      screen.getByRole("button", { name: /View Services/i })
    ).toBeInTheDocument();
  });

  it("renders the Get a Free Quote button", () => {
    render(<Hero />);
    
    expect(
      screen.getByRole("button", { name: /Get a Free Quote/i })
    ).toBeInTheDocument();
  });
});

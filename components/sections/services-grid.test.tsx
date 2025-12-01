import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ServicesGrid } from "./services-grid";
import { services } from "@/lib/constants";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => (
      <div {...props}>{children}</div>
    ),
  },
  useInView: () => true,
}));

describe("ServicesGrid Section", () => {
  it("renders all 3 service cards", () => {
    render(<ServicesGrid />);

    expect(screen.getByText("AI Chatbots")).toBeInTheDocument();
    expect(screen.getByText("Business Automations")).toBeInTheDocument();
    expect(screen.getByText("Web Development")).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<ServicesGrid />);

    expect(
      screen.getByRole("heading", { name: /Our Services/i })
    ).toBeInTheDocument();
  });

  it("renders examples for AI Chatbots card", () => {
    render(<ServicesGrid />);

    const aiChatbotsExamples = services.find(s => s.id === "ai-chatbots")?.examples || [];
    aiChatbotsExamples.forEach((example) => {
      expect(screen.getByText(example)).toBeInTheDocument();
    });
  });

  it("renders examples for Business Automations card", () => {
    render(<ServicesGrid />);

    const automationsExamples = services.find(s => s.id === "business-automations")?.examples || [];
    automationsExamples.forEach((example) => {
      expect(screen.getByText(example)).toBeInTheDocument();
    });
  });

  it("renders examples for Web Development card", () => {
    render(<ServicesGrid />);

    const webDevExamples = services.find(s => s.id === "web-development")?.examples || [];
    webDevExamples.forEach((example) => {
      expect(screen.getByText(example)).toBeInTheDocument();
    });
  });
});

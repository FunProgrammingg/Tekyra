import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";
import { footerLinks, socialLinks } from "@/lib/constants";

describe("Footer Section", () => {
  it("renders the Tekyra logo", () => {
    render(<Footer />);

    expect(screen.getByText("Tekyra")).toBeInTheDocument();
  });

  it("renders the contact email", () => {
    render(<Footer />);

    const emailLink = screen.getByRole("link", { name: /contact@tekyra\.net/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:contact@tekyra.net");
  });

  it("renders all navigation links", () => {
    render(<Footer />);

    footerLinks.forEach((link) => {
      const linkElement = screen.getByRole("link", { name: link.label });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", link.href);
    });
  });

  it("renders all social media icons", () => {
    render(<Footer />);

    socialLinks.forEach((social) => {
      const socialLink = screen.getByRole("link", { name: social.platform });
      expect(socialLink).toBeInTheDocument();
      expect(socialLink).toHaveAttribute("href", social.href);
    });
  });
});

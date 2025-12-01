"use client";

import { Mail } from "lucide-react";
import { footerLinks, socialLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-tekyra-deep py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Email */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-2xl font-bold text-white">
              Tekyra
            </div>
            <a
              href="mailto:contact@tekyra.net"
              className="flex items-center gap-2 text-tekyra-cyan hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>contact@tekyra.net</span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-3">
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-tekyra-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="text-white font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="text-gray-300 hover:text-tekyra-cyan transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tekyra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

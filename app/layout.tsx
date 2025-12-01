import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tekyra | AI-Powered Digital Solutions For Modern Businesses",
  description:
    "Tekyra delivers premium AI-powered digital solutions including websites, AI chatbots, and business automations for modern businesses.",
  keywords: [
    "AI solutions",
    "digital agency",
    "web development",
    "AI chatbots",
    "business automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

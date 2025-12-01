import { Bot, Workflow, Laptop, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import type { Service, Testimonial, PricingItem, FooterLink, SocialLink } from "./types";

/**
 * Color tokens for the Tekyra design system
 */
export const colors = {
  primary: {
    deep: "#0A2A43",    // Azul profundo
    cyan: "#00C6E6",    // Cian
  },
  neutral: {
    white: "#FFFFFF",
    black: "#0B0B0B",   // Negro suave
  },
} as const;

/**
 * Services data for the Services Grid section
 */
export const services: Service[] = [
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    icon: Bot,
    description: "Intelligent conversational AI solutions",
    examples: [
      "Customer Support Chatbot",
      "Lead Qualification Bot",
      "Website Embedded Troubleshooter",
      "FAQ Automation Bot",
    ],
  },
  {
    id: "business-automations",
    title: "Business Automations",
    icon: Workflow,
    description: "Streamline your business processes",
    examples: [
      "CRM automation",
      "Email sequences",
      "Booking + payments automation",
      "Data scraping + reporting",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: Laptop,
    description: "Modern web solutions",
    examples: [
      "Landing pages",
      "E-commerce",
      "Business websites",
      "SaaS dashboards",
    ],
  },
];


/**
 * Placeholder avatar path for testimonials
 */
const PLACEHOLDER_AVATAR = "/images/avatars/placeholder.svg";

/**
 * Testimonials data for the Testimonials Carousel section
 */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Linda",
    occupation: "Yoga Studio Owner",
    avatar: PLACEHOLDER_AVATAR,
    rating: 5,
    quote:
      "Tekyra transformed my studio's online presence. Everything feels so professional and smooth.",
  },
  {
    id: "2",
    name: "Kyle",
    occupation: "Sales Consultant",
    avatar: PLACEHOLDER_AVATAR,
    rating: 5,
    quote:
      "The automation Tekyra built saves me hours every week. Absolute game changer.",
  },
  {
    id: "3",
    name: "Mickey",
    occupation: "Martial Arts School",
    avatar: PLACEHOLDER_AVATAR,
    rating: 5,
    quote: "The new website is clean, fast, and brings new clients every week.",
  },
  {
    id: "4",
    name: "Joaquín",
    occupation: "Organic Farm Owner",
    avatar: PLACEHOLDER_AVATAR,
    rating: 5,
    quote:
      "My farm finally has a proper online identity. Tekyra is worth every dollar.",
  },
];

/**
 * Pricing items data for the Pricing Preview section
 */
export const pricingItems: PricingItem[] = [
  { id: "1", service: "Landing Pages", price: "from $700" },
  { id: "2", service: "Websites", price: "from $1500" },
  { id: "3", service: "AI Chatbots", price: "from $1200" },
  { id: "4", service: "Automation Systems", price: "$1500–$3000" },
  { id: "5", service: "Monthly Maintenance", price: "$200–$350" },
];


/**
 * Footer navigation links
 */
export const footerLinks: FooterLink[] = [
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

/**
 * Social media links for the Footer
 */
export const socialLinks: SocialLink[] = [
  { platform: "Twitter", icon: Twitter, href: "https://twitter.com/tekyra" },
  { platform: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/tekyra" },
  { platform: "Instagram", icon: Instagram, href: "https://instagram.com/tekyra" },
];

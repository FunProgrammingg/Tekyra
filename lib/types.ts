import type { LucideIcon } from "lucide-react";

/**
 * Service interface for the Services Grid section
 */
export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  examples: string[];
}

/**
 * Testimonial interface for the Testimonials Carousel section
 */
export interface Testimonial {
  id: string;
  name: string;
  occupation: string;
  avatar: string;
  rating: number;
  quote: string;
}

/**
 * Pricing item interface for the Pricing Preview section
 */
export interface PricingItem {
  id: string;
  service: string;
  price: string;
  description?: string;
}

/**
 * Footer link interface for navigation links
 */
export interface FooterLink {
  label: string;
  href: string;
}

/**
 * Social link interface for social media icons
 */
export interface SocialLink {
  platform: string;
  icon: LucideIcon;
  href: string;
}

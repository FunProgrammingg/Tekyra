"use client";

import { testimonials } from "@/lib/constants";
import { TestimonialsCarousel } from "./testimonials-carousel";

export function Testimonials() {
  return <TestimonialsCarousel testimonials={testimonials} />;
}

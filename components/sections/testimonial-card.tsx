"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import type { Testimonial } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { useReducedMotion } from "@/lib/hooks";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const PLACEHOLDER_AVATAR = "/images/avatars/placeholder.svg";

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const Wrapper = prefersReducedMotion ? "div" : motion.div;
  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { y: -4 },
        transition: { duration: 0.3, ease: "easeOut" as const },
      };

  return (
    <Wrapper {...motionProps}>
      <Card className="h-full bg-tekyra-deep/50 border-tekyra-cyan/20 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,198,230,0.2)] hover:border-tekyra-cyan/40">
        <CardContent className="p-6">
          {/* Avatar and Info */}
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden bg-tekyra-cyan/20 flex-shrink-0">
              <Image
                src={imageError ? PLACEHOLDER_AVATAR : testimonial.avatar}
                alt={`${testimonial.name}'s avatar`}
                fill
                sizes="56px"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiI+PHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSIjMEEyQTQzIi8+PC9zdmc+"
                onError={() => setImageError(true)}
              />
              {/* Fallback initials shown when image fails */}
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center text-tekyra-cyan font-semibold text-lg bg-tekyra-deep">
                  {testimonial.name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <h4 className="text-white font-semibold">{testimonial.name}</h4>
              <p className="text-white/60 text-sm">{testimonial.occupation}</p>
            </div>
          </div>

          {/* 5-Star Rating */}
          <div className="flex gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < testimonial.rating
                    ? "fill-tekyra-cyan text-tekyra-cyan"
                    : "text-white/30"
                }`}
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-white/80 text-sm leading-relaxed italic">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
        </CardContent>
      </Card>
    </Wrapper>
  );
}

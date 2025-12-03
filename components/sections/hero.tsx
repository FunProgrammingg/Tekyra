"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeUp } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/lib/hooks";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con parallax */}
      {prefersReducedMotion ? (
        <div className="absolute inset-0 bg-gradient-to-br from-tekyra-deep to-tekyra-cyan" />
      ) : (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-tekyra-deep to-tekyra-cyan"
          style={{ y: backgroundY }}
        />
      )}

      {/* Logo gigante de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/tekyra-logo.svg"
          alt="Tekyra Logo"
          className="w-[650px] h-[650px] opacity-[0.06] object-contain"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <FadeUp delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Modern Digital Solutions
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Websites • AI Chatbots • Automations
          </p>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-tekyra-cyan text-tekyra-deep hover:bg-tekyra-cyan/90 font-semibold px-8"
            >
              View Services
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white border border-white/30 hover:bg-white/10 font-semibold px-8"
            >
              Get a Free Quote
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

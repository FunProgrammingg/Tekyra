"use client";

import { motion } from "framer-motion";
import type { Service } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useReducedMotion } from "@/lib/hooks";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  const prefersReducedMotion = useReducedMotion();

  const Wrapper = prefersReducedMotion ? "div" : motion.div;
  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { y: -8 },
        transition: { duration: 0.3, ease: "easeOut" as const },
      };

  return (
    <Wrapper {...motionProps}>
      <Card className="h-full bg-tekyra-deep/50 border-tekyra-cyan/20 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,198,230,0.3)] hover:border-tekyra-cyan/60">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-tekyra-cyan/10 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-tekyra-cyan" />
          </div>
          <CardTitle className="text-xl text-white">{service.title}</CardTitle>
          <CardDescription className="text-white/70">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {service.examples.map((example, index) => (
              <li
                key={index}
                className="text-sm text-white/60 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-tekyra-cyan" />
                {example}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Wrapper>
  );
}

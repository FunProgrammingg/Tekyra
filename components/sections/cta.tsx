"use client";

import { FadeUp } from "@/components/animations";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="bg-[#0B0B0B] py-24 px-4">
      <div className="container mx-auto text-center">
        <FadeUp delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto">
            Let&apos;s build something powerful together.
          </h2>
        </FadeUp>

        <FadeUp delay={0.3}>
          <Button
            size="lg"
            className="bg-tekyra-cyan text-tekyra-deep hover:bg-tekyra-cyan/90 font-semibold px-10 py-6 text-lg"
          >
            Book a Free Consultation
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { pricingItems } from "@/lib/constants";
import { PricingCard } from "./pricing-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export function PricingPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-tekyra-deep">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pricing
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Transparent pricing for quality digital solutions
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {pricingItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <PricingCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

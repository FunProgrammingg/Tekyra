"use client";

import { motion } from "framer-motion";
import type { PricingItem } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface PricingCardProps {
  item: PricingItem;
}

export function PricingCard({ item }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="h-full bg-tekyra-deep/50 border-tekyra-cyan/20 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,198,230,0.2)] hover:border-tekyra-cyan/40">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-lg text-white">{item.service}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-2xl font-bold text-tekyra-cyan">{item.price}</p>
          {item.description && (
            <p className="text-sm text-white/60 mt-2">{item.description}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

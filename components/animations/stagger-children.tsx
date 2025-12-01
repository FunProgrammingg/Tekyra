"use client";

import { motion } from "framer-motion";
import { ReactNode, Children, isValidElement } from "react";
import { useReducedMotion } from "@/lib/hooks";

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  duration?: number;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (staggerDelay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (duration: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: "easeOut" as const,
    },
  }),
};

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  duration = 0.5,
  className,
}: StaggerChildrenProps) {
  const prefersReducedMotion = useReducedMotion();

  // Skip animations if user prefers reduced motion
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={staggerDelay}
      className={className}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return (
            <motion.div variants={itemVariants} custom={duration}>
              {child}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
}

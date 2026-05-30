"use client";

import { Children, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 32,
  duration = 0.75,
}: FadeInProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface FadeInStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function FadeInStagger({
  children,
  className,
  staggerDelay = 0.07,
}: FadeInStaggerProps) {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      {Children.toArray(children).map((child, i) => (
        <motion.div
          key={i}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.65,
            delay: i * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

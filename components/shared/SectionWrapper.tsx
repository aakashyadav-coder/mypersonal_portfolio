"use client";

import { motion, useInView, type Variants, type Transition } from "framer-motion";
import { useRef } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    } as Transition,
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } as Transition,
  },
};

export default function SectionWrapper({
  children,
  id,
  className = "",
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  center = false,
}: {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUpVariants}
      className={`mb-14 md:mb-20 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <span
          className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold
            tracking-widest uppercase border border-brand-red/30 text-brand-red bg-brand-red/5"
        >
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-brand-text text-base md:text-lg leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

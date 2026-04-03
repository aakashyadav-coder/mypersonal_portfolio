"use client";

import { motion, useInView, type Variants, type Transition } from "framer-motion";
import { useRef, CSSProperties } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 } as Transition,
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

export default function SectionWrapper({ children, id, className = "", style, delay = 0 }: SectionWrapperProps) {
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
      style={{ transitionDelay: `${delay}ms`, ...style }}
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
      style={{
        marginBottom: "2.5rem",
        textAlign: center ? "center" : "left",
      }}
    >
      {badge && (
        <span
          style={{
            display: "inline-block",
            marginBottom: "0.875rem",
            padding: "0.3rem 0.875rem",
            borderRadius: "9999px",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            border: "1px solid rgba(225,29,72,0.35)",
            color: "#E11D48",
            background: "rgba(225,29,72,0.06)",
          }}
        >
          {badge}
        </span>
      )}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: "1rem",
            color: "#A1A1AA",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "560px",
            ...(center ? { marginLeft: "auto", marginRight: "auto" } : {}),
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

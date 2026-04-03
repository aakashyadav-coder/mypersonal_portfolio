"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 768) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='pointer']");
      setIsHovering(!!isInteractive);
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, [isVisible]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="custom-cursor-dot fixed top-0 left-0 rounded-full border border-brand-red z-[9999] hidden md:block"
        style={{ x: position.x - 20, y: position.y - 20 }}
        animate={{
          width: isHovering ? 48 : 40,
          height: isHovering ? 48 : 40,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovering ? "#E11D48" : "rgba(225,29,72,0.5)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.3 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-brand-red z-[9999] hidden md:block"
        style={{ x: position.x - 4, y: position.y - 4 }}
        animate={{
          width: isHovering ? 6 : 8,
          height: isHovering ? 6 : 8,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30, mass: 0.1 }}
      />
    </>
  );
}

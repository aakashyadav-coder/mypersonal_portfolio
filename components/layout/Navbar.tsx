"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services",   href: "#services" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s",
          ...(scrolled
            ? {
                backgroundColor: "rgba(10,10,11,0.85)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
              }
            : {
                backgroundColor: "transparent",
                paddingTop: "1.25rem",
                paddingBottom: "1.25rem",
              }),
        }}
      >
        <div
          className="section-container"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            whileHover={{ scale: 1.05 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "0.5rem",
                backgroundColor: "#E11D48",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Code2 style={{ width: "1rem", height: "1rem", color: "#fff" }} />
            </div>
            <span style={{ color: "#fff" }}>Aakash</span>
            <span style={{ color: "#E11D48" }}>Yadav</span>
          </motion.a>

          {/* Desktop nav */}
          <nav style={{ display: "none", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    position: "relative",
                    padding: "0.5rem 0.875rem",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    borderRadius: "0.5rem",
                    color: isActive ? "#E11D48" : "#A1A1AA",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "0.5rem",
                        backgroundColor: "rgba(225,29,72,0.08)",
                        border: "1px solid rgba(225,29,72,0.2)",
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Theme toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="glass"
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "0.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#A1A1AA",
                cursor: "pointer",
                background: "transparent",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark"
                ? <Sun  style={{ width: "1rem", height: "1rem" }} />
                : <Moon style={{ width: "1rem", height: "1rem" }} />}
            </motion.button>

            {/* Hire me */}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hire-btn"
              style={{
                padding: "0.5rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                borderRadius: "0.5rem",
                backgroundColor: "#E11D48",
                color: "#fff",
                textDecoration: "none",
                cursor: "pointer",
                boxShadow: "0 0 10px rgba(225,29,72,0.3)",
              }}
            >
              Hire Me
            </motion.a>

            {/* Mobile toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-btn"
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "0.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#A1A1AA",
                cursor: "pointer",
                background: "rgba(255,255,255,0.03)",
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <X    style={{ width: "1.1rem", height: "1.1rem" }} />
                : <Menu style={{ width: "1.1rem", height: "1.1rem" }} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              right: 0,
              zIndex: 40,
              width: "18rem",
              backgroundColor: "rgba(10,10,11,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderLeft: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              flexDirection: "column",
              paddingTop: "6rem",
              paddingBottom: "2rem",
              paddingLeft: "1.75rem",
              paddingRight: "1.75rem",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    padding: "0.875rem 1rem",
                    borderRadius: "0.75rem",
                    color: "#A1A1AA",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    transition: "all 0.2s",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div style={{ marginTop: "auto" }}>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  padding: "0.875rem",
                  borderRadius: "0.75rem",
                  backgroundColor: "#E11D48",
                  color: "#fff",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 30,
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(4px)",
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .hire-btn    { display: inline-flex !important; }
          .mobile-btn  { display: none !important; }
        }
        @media (max-width: 767px) {
          .hire-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}

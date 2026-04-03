"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp, Code2, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: FaGithub,   href: "https://github.com/aakashyadav",       label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/aakashyadav",  label: "LinkedIn" },
  { icon: Mail,       href: "mailto:aakash@aakashyadav.dev",        label: "Email" },
];

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services",   href: "#services" },
  { label: "Contact",    href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        backgroundColor: "#0A0A0B",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 0%, rgba(225,29,72,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ position: "relative" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "1rem",
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
            </div>
            <p
              style={{
                color: "#A1A1AA",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                maxWidth: "22rem",
              }}
            >
              Software &amp; Web Developer crafting scalable digital experiences with modern
              technologies. Based in Nepal, open to remote work globally.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.95rem",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.375rem",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(link.href.replace("#", ""))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    color: "#A1A1AA",
                    fontSize: "0.9rem",
                    padding: "0.375rem 0",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E11D48")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#A1A1AA")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.95rem",
                marginBottom: "1.25rem",
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "0.625rem",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#A1A1AA",
                    textDecoration: "none",
                    fontSize: "1rem",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onHoverStart={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#E11D48";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(225,29,72,0.3)";
                  }}
                  onHoverEnd={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#A1A1AA";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
            <p style={{ color: "#A1A1AA", fontSize: "0.825rem" }}>
              Open to work — Let&apos;s connect!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.75rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p
            style={{
              color: "#A1A1AA",
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
            }}
          >
            Built with{" "}
            <Heart style={{ width: "0.75rem", height: "0.75rem", color: "#E11D48", fill: "#E11D48" }} />{" "}
            by{" "}
            <span style={{ color: "#fff" }}>Aakash Yadav</span> &middot; {new Date().getFullYear()}
          </p>

          <p style={{ color: "#A1A1AA", fontSize: "0.8rem" }}>
            Next.js · Tailwind CSS · Framer Motion
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
              transition: "color 0.2s, border-color 0.2s",
            }}
            aria-label="Back to top"
          >
            <ArrowUp style={{ width: "1rem", height: "1rem" }} />
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

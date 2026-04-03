"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("@/components/effects/ParticleBackground"),
  { ssr: false }
);

const roles = [
  "Software Developer",
  "Full-Stack Engineer",
  "Web Developer",
  "API Architect",
  "UI/UX Enthusiast",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timeout: NodeJS.Timeout;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(
        () =>
          setText((prev) =>
            deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
          ),
        deleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, texts]);

  return (
    <span style={{ color: "#E11D48" }}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        style={{
          display: "inline-block",
          width: "2px",
          height: "2rem",
          backgroundColor: "#E11D48",
          marginLeft: "4px",
          verticalAlign: "middle",
        }}
      />
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#0A0A0B",
      }}
    >
      <ParticleBackground />

      {/* Glow blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          className="animate-float"
          style={{
            position: "absolute",
            top: "25%",
            left: "25%",
            width: "24rem",
            height: "24rem",
            borderRadius: "50%",
            background: "rgba(225,29,72,0.05)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="animate-float"
          style={{
            position: "absolute",
            bottom: "25%",
            right: "25%",
            width: "20rem",
            height: "20rem",
            borderRadius: "50%",
            background: "rgba(225,29,72,0.07)",
            filter: "blur(80px)",
            animationDelay: "3s",
          }}
        />
      </div>

      {/* Grid */}
      <div className="hero-grid" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

      {/* Content */}
      <div
        className="section-container"
        style={{ position: "relative", zIndex: 10, textAlign: "center" }}
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Available badge */}
          <motion.div variants={itemVariants} style={{ marginBottom: "2rem" }}>
            <span
              className="glass"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                border: "1px solid rgba(225,29,72,0.2)",
                fontSize: "0.875rem",
                color: "#A1A1AA",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#4ade80",
                  animation: "pulse 2s infinite",
                }}
              />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            <span style={{ color: "#FFFFFF", display: "block" }}>Hi, I&apos;m</span>
            <span className="gradient-text-white" style={{ display: "block", marginTop: "0.5rem" }}>
              Aakash Yadav
            </span>
          </motion.h1>

          {/* Role typewriter */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: "1.25rem",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.35rem, 3.5vw, 2.25rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            <TypewriterText texts={roles} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            style={{
              marginTop: "1.5rem",
              color: "#A1A1AA",
              fontSize: "1.05rem",
              maxWidth: "580px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.75,
              fontFamily: "var(--font-sans)",
            }}
          >
            Crafting{" "}
            <span style={{ color: "#FAFAFA", fontWeight: 600 }}>scalable web experiences</span>{" "}
            with modern technologies — from pixel-perfect UIs to rock-solid APIs.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: "3rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "3rem",
            }}
          >
            {[
              { value: "2+", label: "Years Experience" },
              { value: "15+", label: "Projects Delivered" },
              { value: "5+", label: "Technologies" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  className="gradient-text"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 900,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#A1A1AA",
                    marginTop: "0.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: "3rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(225,29,72,0.5)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                borderRadius: "0.75rem",
                backgroundColor: "#E11D48",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              View Projects
              <ArrowDown style={{ width: "1rem", height: "1rem", transform: "rotate(-90deg)" }} />
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Contact Me
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 1.5rem",
                borderRadius: "0.75rem",
                color: "#A1A1AA",
                fontWeight: 500,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              <Download style={{ width: "1rem", height: "1rem" }} />
              Resume
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={itemVariants}
            style={{
              marginTop: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {[
              { icon: FaGithub, href: "https://github.com/aakashyadav", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/aakashyadav", label: "LinkedIn" },
              { icon: Mail, href: "mailto:aakash@aakashyadav.dev", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="glass"
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#A1A1AA",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontSize: "1.1rem",
                }}
                aria-label={label}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "#A1A1AA",
          background: "none",
          border: "none",
          cursor: "pointer",
          transition: "color 0.2s",
        }}
        aria-label="Scroll down"
      >
        <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown style={{ width: "1.25rem", height: "1.25rem" }} />
        </motion.div>
      </motion.button>
    </section>
  );
}

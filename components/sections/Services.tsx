"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading, fadeUpVariants } from "@/components/shared/SectionWrapper";
import { Globe, Server, Palette, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    id: "web-dev",
    icon: Globe,
    title: "Web Development",
    description: "End-to-end web application development using modern frameworks like Next.js and React — fast, accessible, and SEO-optimized.",
    features: ["Next.js / React applications", "Responsive & mobile-first design", "Performance optimization", "SEO best practices"],
    accentColor: "#E11D48",
    gradient: "linear-gradient(135deg,rgba(225,29,72,0.12),rgba(251,113,133,0.05))",
    iconBg: "rgba(225,29,72,0.15)",
    hoverBorder: "rgba(225,29,72,0.35)",
  },
  {
    id: "backend-api",
    icon: Server,
    title: "Backend & API Development",
    description: "Scalable REST & GraphQL APIs, database design, authentication systems, and cloud deployments that power your product.",
    features: ["REST / GraphQL API design", "Authentication & authorization", "Database modeling", "Cloud deployment & CI/CD"],
    accentColor: "#60a5fa",
    gradient: "linear-gradient(135deg,rgba(59,130,246,0.12),rgba(99,102,241,0.05))",
    iconBg: "rgba(59,130,246,0.15)",
    hoverBorder: "rgba(59,130,246,0.35)",
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive, visually stunning interfaces that users love. Turning wireframes into polished, interactive experiences.",
    features: ["Figma wireframes & prototypes", "Component system design", "Micro-interaction design", "Accessibility (WCAG)"],
    accentColor: "#c084fc",
    gradient: "linear-gradient(135deg,rgba(168,85,247,0.12),rgba(236,72,153,0.05))",
    iconBg: "rgba(168,85,247,0.15)",
    hoverBorder: "rgba(168,85,247,0.35)",
  },
  {
    id: "system-design",
    icon: Layers,
    title: "System Design",
    description: "Architecting scalable, maintainable systems from the ground up — microservices, event-driven designs, and cloud-native solutions.",
    features: ["Architecture planning", "Scalability consulting", "Tech stack selection", "Code reviews & audits"],
    accentColor: "#4ade80",
    gradient: "linear-gradient(135deg,rgba(34,197,94,0.12),rgba(20,184,166,0.05))",
    iconBg: "rgba(34,197,94,0.15)",
    hoverBorder: "rgba(34,197,94,0.35)",
  },
];

export default function Services() {
  return (
    <SectionWrapper
      id="services"
      className="section-padding"
      style={{ backgroundColor: "#111113", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 50%, rgba(225,29,72,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <SectionHeading
          badge="Services"
          title={<>What I Can <span className="gradient-text">Do For You</span></>}
          subtitle="From idea to deployment — I deliver complete solutions tailored to your needs."
          center
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={fadeUpVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card"
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                cursor: "default",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              onHoverStart={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = service.hoverBorder;
              }}
              onHoverEnd={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              {/* Top strip */}
              <div style={{ background: service.gradient, padding: "1.75rem 1.75rem 1.25rem" }}>
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "0.875rem",
                    backgroundColor: service.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <service.icon style={{ width: "1.6rem", height: "1.6rem", color: service.accentColor }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div style={{ padding: "1.25rem 1.75rem 1.75rem" }}>
                <p style={{ color: "#A1A1AA", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  {service.description}
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {service.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      <ArrowRight style={{ width: "0.875rem", height: "0.875rem", flexShrink: 0, color: service.accentColor }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={fadeUpVariants} style={{ marginTop: "4rem", textAlign: "center" }}>
          <p style={{ color: "#A1A1AA", marginBottom: "1.5rem", fontSize: "1rem" }}>
            Need something custom?{" "}
            <span style={{ color: "#fff" }}>Let&apos;s talk.</span>
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(225,29,72,0.4)" }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2.25rem",
              borderRadius: "0.75rem",
              backgroundColor: "#E11D48",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Start a Project
            <ArrowRight style={{ width: "1rem", height: "1rem" }} />
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

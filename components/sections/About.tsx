"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading, fadeUpVariants } from "@/components/shared/SectionWrapper";
import { GraduationCap, Briefcase, Code2, Rocket, Award, MapPin } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "2+", label: "Years Experience" },
  { icon: Code2,     value: "15+", label: "Projects Built" },
  { icon: Award,     value: "1",   label: "Degree (BScIT)" },
  { icon: Rocket,    value: "5+",  label: "Happy Clients" },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Bachelor of Science in IT",
    detail: "Software & Web Development",
    sub: "Graduated with Distinction",
    iconColor: "#E11D48",
  },
  {
    icon: Briefcase,
    title: "2+ Years Real-World Experience",
    detail: "Full-Stack Development",
    sub: "From startups to enterprise",
    iconColor: "#60a5fa",
  },
  {
    icon: MapPin,
    title: "Currently Based In",
    detail: "Nepal",
    sub: "Open to remote work globally",
    iconColor: "#4ade80",
  },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      className="section-padding"
      style={{ backgroundColor: "#111113", position: "relative", overflow: "hidden" }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "24rem",
          height: "24rem",
          borderRadius: "50%",
          background: "rgba(225,29,72,0.05)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left — Avatar */}
          <motion.div className="about-portrait-col" variants={fadeUpVariants} style={{ position: "relative" }}>
            <div
              className="about-avatar-shell"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "21rem",
                margin: "0 auto",
                aspectRatio: "1",
              }}
            >
              {/* Rings */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "1rem",
                  border: "2px solid rgba(225,29,72,0.2)",
                  transform: "rotate(3deg) scale(1.05)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "1rem",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transform: "rotate(-2deg) scale(1.02)",
                }}
              />

              {/* Avatar box */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #18181B, #0A0A0B)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "10rem",
                      height: "10rem",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,rgba(225,29,72,0.3),rgba(159,18,57,0.5))",
                      margin: "0 auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "4rem",
                      fontWeight: 900,
                      color: "#fff",
                      border: "4px solid rgba(225,29,72,0.3)",
                      boxShadow: "0 0 40px rgba(225,29,72,0.2)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    A
                  </div>
                  <p
                    style={{
                      marginTop: "1rem",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#fff",
                    }}
                  >
                    Aakash Yadav
                  </p>
                  <p style={{ color: "#E11D48", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                    Software &amp; Web Developer
                  </p>
                </div>
                <div className="shimmer-bg" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
              </div>

              {/* Floating badges */}
              <motion.div
                className="about-floating-badge glass-card"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  position: "absolute",
                  bottom: "-1rem",
                  right: "-1rem",
                  borderRadius: "0.75rem",
                  padding: "0.75rem 1rem",
                  border: "1px solid rgba(225,29,72,0.2)",
                }}
              >
                <p style={{ fontSize: "0.7rem", color: "#A1A1AA" }}>Currently</p>
                <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.875rem" }}>Open to work</p>
              </motion.div>

              <motion.div
                className="about-floating-badge glass-card"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                style={{
                  position: "absolute",
                  top: "-1rem",
                  left: "-1rem",
                  borderRadius: "0.75rem",
                  padding: "0.75rem 1rem",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <p style={{ fontSize: "0.7rem", color: "#A1A1AA" }}>Experience</p>
                <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.875rem" }}>2+ Years</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="about-content" style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <SectionHeading
              badge="About Me"
              title={<>Building Digital <span className="gradient-text">Experiences</span></>}
            />

            <motion.div
              variants={fadeUpVariants}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "#A1A1AA",
                lineHeight: 1.8,
                fontSize: "1rem",
              }}
            >
              <p>
                I&apos;m a passionate{" "}
                <span style={{ color: "#FAFAFA", fontWeight: 600 }}>Software &amp; Web Developer</span>{" "}
                with over 2 years of real-world experience building production-grade web applications
                that scale. My journey started with a{" "}
                <span style={{ color: "#E11D48", fontWeight: 600 }}>BScIT in Software &amp; Web Development</span>,
                and I&apos;ve been shipping impactful products ever since.
              </p>
              <p>
                I specialize in full-stack development using modern tools like{" "}
                <span style={{ color: "#FAFAFA" }}>React, Next.js, and Node.js</span> - always with an
                eye for clean code, performance, and developer experience.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new technologies, contributing to
                open-source, or mentoring other developers in the community.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={fadeUpVariants}
              style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
            >
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="glass-card"
                  style={{
                    borderRadius: "0.75rem",
                    padding: "1rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    style={{
                      padding: "0.5rem",
                      borderRadius: "0.5rem",
                      background: "rgba(255,255,255,0.05)",
                      color: h.iconColor,
                      flexShrink: 0,
                    }}
                  >
                    <h.icon style={{ width: "1.25rem", height: "1.25rem" }} />
                  </div>
                  <div>
                    <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>{h.title}</p>
                    <p style={{ color: "#E11D48", fontSize: "0.8rem" }}>{h.detail}</p>
                    <p style={{ color: "#A1A1AA", fontSize: "0.75rem", marginTop: "0.125rem" }}>{h.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Stats grid */}
            <motion.div
              variants={fadeUpVariants}
              className="about-stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card"
                  style={{
                    borderRadius: "0.75rem",
                    padding: "1.25rem",
                    textAlign: "center",
                    border: "1px solid rgba(255,255,255,0.06)",
                    cursor: "default",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                >
                  <stat.icon style={{ width: "1.25rem", height: "1.25rem", color: "#E11D48", margin: "0 auto 0.5rem" }} />
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 900,
                      color: "#fff",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: "#A1A1AA", fontSize: "0.75rem", marginTop: "0.25rem" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Responsive grid CSS */}
      <style>{`
        .about-portrait-col {
          align-self: start;
        }

        .about-avatar-shell {
          width: min(100%, 21rem);
        }

        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
            gap: 4rem !important;
            align-items: start !important;
          }

          .about-portrait-col {
            transform: translateY(-1.75rem);
          }

          .about-avatar-shell {
            margin-left: 0 !important;
          }
        }

        @media (max-width: 640px) {
          .about-grid {
            gap: 3rem !important;
          }

          .about-avatar-shell {
            max-width: 18rem !important;
          }

          .about-floating-badge {
            padding: 0.65rem 0.8rem !important;
          }
        }

        @media (max-width: 420px) {
          .about-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </SectionWrapper>
  );
}

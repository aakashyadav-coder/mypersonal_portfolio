"use client";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading, fadeUpVariants } from "@/components/shared/SectionWrapper";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  current?: boolean;
  description: string;
  achievements: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Full-Stack Web Developer",
    company: "Tech Solutions Ltd.",
    location: "Remote",
    duration: "Jan 2024 – Present",
    type: "Full-time",
    current: true,
    description:
      "Leading full-stack development of enterprise web applications, architecting scalable APIs, and mentoring junior developers while maintaining CI/CD pipelines.",
    achievements: [
      "Reduced API response time by 40% through query optimization and caching",
      "Built a multi-tenant SaaS platform serving 500+ concurrent users",
      "End-to-end test coverage from 0% to 75% with Jest & Playwright",
      "Led migration of legacy PHP app to Next.js — 60% performance improvement",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Prisma"],
  },
  {
    id: 2,
    role: "Junior Web Developer",
    company: "Digital Agency Co.",
    location: "Hybrid",
    duration: "Jun 2023 – Dec 2023",
    type: "Contract",
    description:
      "Developed custom WordPress themes and React-based SPAs for agency clients, collaborating with designers and delivering projects on tight deadlines.",
    achievements: [
      "Delivered 8 client websites on time with 100% client satisfaction",
      "Built a reusable React component library reducing dev time by 30%",
      "Integrated Stripe payment gateway for 3 e-commerce projects",
    ],
    tech: ["React", "WordPress", "Tailwind CSS", "Stripe"],
  },
  {
    id: 3,
    role: "Freelance Developer",
    company: "Self-Employed",
    location: "Remote",
    duration: "2022 – 2023",
    type: "Freelance",
    description:
      "Built and maintained web applications for small businesses and startups across various industries, delivering end-to-end solutions independently.",
    achievements: [
      "Completed 10+ projects for international clients",
      "Developed a QR-based restaurant ordering system used by 3 restaurants",
      "Maintained 5-star rating on freelancing platforms",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
  },
];

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      className="section-padding"
      style={{ backgroundColor: "#0A0A0B", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "25%",
          width: "20rem",
          height: "20rem",
          borderRadius: "50%",
          background: "rgba(225,29,72,0.05)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <SectionHeading
          badge="Experience"
          title={<>Work <span className="gradient-text">History</span></>}
          subtitle="My professional journey building real-world solutions that matter."
        />

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "1.75rem",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, #E11D48, transparent)",
              opacity: 0.3,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={fadeUpVariants}
                custom={i}
                style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}
              >
                {/* Dot */}
                <div style={{ flexShrink: 0 }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, type: "spring" }}
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 10,
                      position: "relative",
                      border: exp.current ? "2px solid #E11D48" : "2px solid #27272A",
                      backgroundColor: exp.current ? "#E11D48" : "#18181B",
                      boxShadow: exp.current ? "0 0 16px rgba(225,29,72,0.4)" : "none",
                    }}
                  >
                    <Briefcase
                      style={{
                        width: "1.1rem",
                        height: "1.1rem",
                        color: exp.current ? "#fff" : "#A1A1AA",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Card */}
                <div
                  className="glass-card"
                  style={{
                    flex: 1,
                    borderRadius: "1rem",
                    padding: "1.75rem",
                    border: "1px solid rgba(255,255,255,0.06)",
                    marginBottom: "0.5rem",
                    transition: "border-color 0.2s",
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "#fff",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p style={{ color: "#E11D48", fontWeight: 600, marginTop: "0.2rem" }}>{exp.company}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.3rem" }}>
                      {exp.current && (
                        <span
                          style={{
                            padding: "0.2rem 0.6rem",
                            borderRadius: "9999px",
                            background: "rgba(74,222,128,0.1)",
                            border: "1px solid rgba(74,222,128,0.3)",
                            color: "#4ade80",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                          }}
                        >
                          Current
                        </span>
                      )}
                      <span
                        style={{
                          padding: "0.2rem 0.6rem",
                          borderRadius: "9999px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#A1A1AA",
                          fontSize: "0.7rem",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginBottom: "1rem" }}>
                    <span
                      style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem", color: "#A1A1AA" }}
                    >
                      <Calendar style={{ width: "0.8rem", height: "0.8rem" }} /> {exp.duration}
                    </span>
                    <span
                      style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem", color: "#A1A1AA" }}
                    >
                      <MapPin style={{ width: "0.8rem", height: "0.8rem" }} /> {exp.location}
                    </span>
                  </div>

                  <p style={{ color: "#A1A1AA", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                    {exp.achievements.map((ach) => (
                      <li
                        key={ach}
                        style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#A1A1AA" }}
                      >
                        <CheckCircle style={{ width: "1rem", height: "1rem", color: "#E11D48", flexShrink: 0, marginTop: "2px" }} />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "0.2rem 0.65rem",
                          borderRadius: "0.4rem",
                          background: "rgba(225,29,72,0.08)",
                          border: "1px solid rgba(225,29,72,0.2)",
                          color: "#E11D48",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

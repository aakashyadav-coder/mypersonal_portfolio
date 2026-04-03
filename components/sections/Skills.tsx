"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading, fadeUpVariants } from "@/components/shared/SectionWrapper";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript,
  SiNodedotjs, SiExpress, SiPrisma, SiPostgresql, SiSupabase,
  SiDocker, SiGit, SiGithub, SiCloudflare, SiFigma, SiRedux,
  SiMongodb, SiHtml5, SiCss,
} from "react-icons/si";

const categories = ["All", "Frontend", "Backend", "Database", "Tools"] as const;
type Category = (typeof categories)[number];

interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  level: number;
  category: Exclude<Category, "All">;
  color: string;
}

const skills: Skill[] = [
  { name: "React", icon: SiReact, level: 92, category: "Frontend", color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, level: 90, category: "Frontend", color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, level: 85, category: "Frontend", color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, level: 93, category: "Frontend", color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, level: 95, category: "Frontend", color: "#06B6D4" },
  { name: "Redux", icon: SiRedux, level: 78, category: "Frontend", color: "#764ABC" },
  { name: "HTML5", icon: SiHtml5, level: 98, category: "Frontend", color: "#E34F26" },
  { name: "CSS3", icon: SiCss, level: 92, category: "Frontend", color: "#1572B6" },
  { name: "Node.js", icon: SiNodedotjs, level: 88, category: "Backend", color: "#339933" },
  { name: "Express", icon: SiExpress, level: 85, category: "Backend", color: "#FFFFFF" },
  { name: "Prisma", icon: SiPrisma, level: 82, category: "Backend", color: "#2D3748" },
  { name: "PostgreSQL", icon: SiPostgresql, level: 80, category: "Database", color: "#4169E1" },
  { name: "Supabase", icon: SiSupabase, level: 78, category: "Database", color: "#3ECF8E" },
  { name: "MongoDB", icon: SiMongodb, level: 75, category: "Database", color: "#47A248" },
  { name: "Git", icon: SiGit, level: 90, category: "Tools", color: "#F05032" },
  { name: "GitHub", icon: SiGithub, level: 90, category: "Tools", color: "#FFFFFF" },
  { name: "Docker", icon: SiDocker, level: 72, category: "Tools", color: "#2496ED" },
  { name: "Cloudflare", icon: SiCloudflare, level: 70, category: "Tools", color: "#F6821F" },
  { name: "Figma", icon: SiFigma, level: 75, category: "Tools", color: "#F24E1E" },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      variants={fadeUpVariants}
      custom={index}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4, scale: 1.03 }}
      className="glass-card"
      style={{
        borderRadius: "0.875rem",
        padding: "1.25rem 1rem",
        border: hovered ? "1px solid rgba(225,29,72,0.3)" : "1px solid rgba(255,255,255,0.06)",
        cursor: "default",
        transition: "border-color 0.2s",
      }}
    >
      {/* Icon + Name */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
        <div
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: hovered ? `${skill.color}20` : "rgba(255,255,255,0.04)",
            boxShadow: hovered ? `0 0 15px ${skill.color}30` : "none",
            transition: "all 0.3s",
            flexShrink: 0,
          }}
        >
          <Icon size={18} color={hovered ? skill.color : "#A1A1AA"} />
        </div>
        <div>
          <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.875rem" }}>{skill.name}</p>
          <p style={{ color: "#A1A1AA", fontSize: "0.75rem" }}>{skill.level}%</p>
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: "4px",
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2, delay: index * 0.04, ease: "easeOut" }}
          style={{
            height: "100%",
            borderRadius: "9999px",
            background: `linear-gradient(90deg, #E11D48, ${skill.color})`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <SectionWrapper
      id="skills"
      className="section-padding"
      style={{ backgroundColor: "#0A0A0B", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, rgba(225,29,72,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="section-container">
        <SectionHeading
          badge="Technical Skills"
          title={<>My <span className="gradient-text">Tech Stack</span></>}
          subtitle="Technologies and tools I use to build modern, scalable web applications."
          center
        />

        {/* Category Tabs */}
        <motion.div
          variants={fadeUpVariants}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.625rem",
            marginBottom: "3rem",
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              id={`skill-tab-${cat.toLowerCase()}`}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.5rem 1.5rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: 600,
                border: active === cat ? "1px solid #E11D48" : "1px solid rgba(255,255,255,0.1)",
                backgroundColor: active === cat ? "#E11D48" : "rgba(255,255,255,0.03)",
                color: active === cat ? "#fff" : "#A1A1AA",
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: active === cat ? "0 0 10px rgba(225,29,72,0.3)" : "none",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={active}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "1rem",
          }}
        >
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

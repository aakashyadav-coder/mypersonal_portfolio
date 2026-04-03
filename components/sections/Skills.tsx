"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper, {
  SectionHeading,
  fadeUpVariants,
} from "@/components/shared/SectionWrapper";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiGit,
  SiGithub,
  SiCloudflare,
  SiFigma,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiCss,
} from "react-icons/si";

const categories = ["All", "Frontend", "Backend", "Database", "Tools"] as const;
type Category = (typeof categories)[number];

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; color?: string }>;
  level: number;
  category: Exclude<Category, "All">;
  color: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React", icon: SiReact, level: 92, category: "Frontend", color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, level: 90, category: "Frontend", color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, level: 85, category: "Frontend", color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, level: 93, category: "Frontend", color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 95, category: "Frontend", color: "#06B6D4" },
  { name: "Redux", icon: SiRedux, level: 78, category: "Frontend", color: "#764ABC" },
  { name: "HTML5", icon: SiHtml5, level: 98, category: "Frontend", color: "#E34F26" },
  { name: "CSS3", icon: SiCss, level: 92, category: "Frontend", color: "#1572B6" },
  // Backend
  { name: "Node.js", icon: SiNodedotjs, level: 88, category: "Backend", color: "#339933" },
  { name: "Express", icon: SiExpress, level: 85, category: "Backend", color: "#FFFFFF" },
  { name: "Prisma", icon: SiPrisma, level: 82, category: "Backend", color: "#2D3748" },
  // Database
  { name: "PostgreSQL", icon: SiPostgresql, level: 80, category: "Database", color: "#4169E1" },
  { name: "Supabase", icon: SiSupabase, level: 78, category: "Database", color: "#3ECF8E" },
  { name: "MongoDB", icon: SiMongodb, level: 75, category: "Database", color: "#47A248" },
  // Tools
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
      whileHover={{ y: -4, scale: 1.02 }}
      className="glass-card rounded-xl p-5 border border-white/5 hover:border-brand-red/20 transition-all cursor-default group"
    >
      {/* Icon + Name */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: hovered ? `${skill.color}20` : "rgba(255,255,255,0.04)",
            boxShadow: hovered ? `0 0 15px ${skill.color}30` : "none",
          }}
        >
          <Icon
            className="w-5 h-5 transition-colors duration-300"
            color={hovered ? skill.color : "#A1A1AA"}
          />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{skill.name}</p>
          <p className="text-brand-text text-xs">{skill.level}%</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2, delay: index * 0.04, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, #E11D48, ${skill.color})`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <SectionWrapper
      id="skills"
      className="section-padding bg-brand-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-red-glow pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge="Technical Skills"
          title={
            <>
              My <span className="gradient-text">Tech Stack</span>
            </>
          }
          subtitle="Technologies and tools I use to build modern, scalable web applications."
          center
        />

        {/* Category Tabs */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              id={`skill-tab-${cat.toLowerCase()}`}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                active === cat
                  ? "bg-brand-red border-brand-red text-white glow-red-sm"
                  : "glass border-white/10 text-brand-text hover:text-white hover:border-white/20"
              }`}
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

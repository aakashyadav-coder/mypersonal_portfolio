"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { SectionHeading, fadeUpVariants } from "@/components/shared/SectionWrapper";
import { ExternalLink, Star, Filter } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  featured?: boolean;
  liveUrl: string;
  githubUrl: string;
  gradient: string;
  emoji: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "QR-Based Restaurant Ordering System",
    description: "A full-stack QR code ordering platform featuring real-time order management, multi-role dashboards (customer, waiter, kitchen, admin), Stripe payments, and live order tracking via WebSockets.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Stripe", "WebSocket"],
    category: "Full Stack",
    featured: true,
    liveUrl: "https://smartorder.demo.io",
    githubUrl: "https://github.com/aakashyadav/smart-order",
    gradient: "linear-gradient(135deg,rgba(225,29,72,0.2),rgba(249,115,22,0.1))",
    emoji: "🍽️",
  },
  {
    id: 2,
    title: "Developer Portfolio v2",
    description: "This portfolio website — built with Next.js, Tailwind CSS, Framer Motion, and TypeScript. Features dark/light mode, smooth animations, and fully responsive design.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    category: "Frontend",
    featured: true,
    liveUrl: "https://aakashyadav.dev",
    githubUrl: "https://github.com/aakashyadav/portfolio",
    gradient: "linear-gradient(135deg,rgba(59,130,246,0.2),rgba(168,85,247,0.1))",
    emoji: "🚀",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with product catalog, cart management, authentication, order tracking, and an admin dashboard for inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Express"],
    category: "Full Stack",
    liveUrl: "https://ecom.demo.io",
    githubUrl: "https://github.com/aakashyadav/ecommerce",
    gradient: "linear-gradient(135deg,rgba(34,197,94,0.2),rgba(20,184,166,0.1))",
    emoji: "🛒",
  },
  {
    id: 4,
    title: "Real-Time Chat Application",
    description: "Socket.io powered chat app with room support, private messaging, message history, online presence indicators, and file sharing capabilities.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "Full Stack",
    liveUrl: "https://chat.demo.io",
    githubUrl: "https://github.com/aakashyadav/realtime-chat",
    gradient: "linear-gradient(135deg,rgba(168,85,247,0.2),rgba(236,72,153,0.1))",
    emoji: "💬",
  },
  {
    id: 5,
    title: "Task Management SaaS",
    description: "Kanban-style project management tool with drag-and-drop, team collaboration, deadline tracking, notifications, and multi-workspace support.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Neon", "NextAuth"],
    category: "Full Stack",
    liveUrl: "https://tasks.demo.io",
    githubUrl: "https://github.com/aakashyadav/taskmanager",
    gradient: "linear-gradient(135deg,rgba(234,179,8,0.2),rgba(249,115,22,0.1))",
    emoji: "📋",
  },
  {
    id: 6,
    title: "REST API Boilerplate",
    description: "Production-ready Express.js + TypeScript REST API template with JWT auth, rate limiting, input validation, error handling, and full Swagger docs.",
    tags: ["Node.js", "Express", "TypeScript", "PostgreSQL", "JWT"],
    category: "Backend",
    liveUrl: "https://github.com/aakashyadav/api-boilerplate",
    githubUrl: "https://github.com/aakashyadav/api-boilerplate",
    gradient: "linear-gradient(135deg,rgba(239,68,68,0.2),rgba(225,29,72,0.1))",
    emoji: "⚡",
  },
];

const filterTags = ["All", "Full Stack", "Frontend", "Backend"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="glass-card"
      style={{
        borderRadius: "1rem",
        overflow: "hidden",
        border: project.featured
          ? hovered ? "1px solid rgba(225,29,72,0.5)" : "1px solid rgba(225,29,72,0.2)"
          : hovered ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.25s",
        boxShadow: hovered && project.featured ? "0 8px 40px rgba(225,29,72,0.1)" : "none",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: project.gradient,
          padding: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: "3rem" }}>{project.emoji}</span>
        {project.featured && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              background: "rgba(225,29,72,0.2)",
              border: "1px solid rgba(225,29,72,0.4)",
              color: "#E11D48",
              fontSize: "0.7rem",
              fontWeight: 600,
            }}
          >
            <Star style={{ width: "0.75rem", height: "0.75rem", fill: "#E11D48" }} />
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "0.75rem",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.4,
          }}
        >
          {project.title}
        </h3>
        <p style={{ color: "#A1A1AA", fontSize: "0.875rem", lineHeight: 1.7, flex: 1 }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "0.2rem 0.6rem",
                borderRadius: "0.375rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#A1A1AA",
                fontSize: "0.7rem",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              padding: "0.6rem",
              borderRadius: "0.625rem",
              backgroundColor: "#E11D48",
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: 600,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <ExternalLink style={{ width: "0.875rem", height: "0.875rem" }} />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="glass"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.6rem 1rem",
              borderRadius: "0.625rem",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              fontSize: "1rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper
      id="projects"
      className="section-padding"
      style={{ backgroundColor: "#111113", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          width: "24rem",
          height: "24rem",
          borderRadius: "50%",
          background: "rgba(225,29,72,0.04)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div className="section-container">
        <SectionHeading
          badge="Portfolio"
          title={<>Featured <span className="gradient-text">Projects</span></>}
          subtitle="A selection of real-world projects I've built — from concept to production."
        />

        {/* Filter */}
        <motion.div
          variants={fadeUpVariants}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.625rem",
            marginBottom: "2.5rem",
          }}
        >
          <Filter style={{ width: "1rem", height: "1rem", color: "#A1A1AA" }} />
          {filterTags.map((tag) => (
            <motion.button
              key={tag}
              id={`project-filter-${tag.toLowerCase().replace(" ", "-")}`}
              onClick={() => setActiveFilter(tag)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.4rem 1.25rem",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 500,
                border: activeFilter === tag ? "1px solid #E11D48" : "1px solid rgba(255,255,255,0.1)",
                backgroundColor: activeFilter === tag ? "#E11D48" : "rgba(255,255,255,0.03)",
                color: activeFilter === tag ? "#fff" : "#A1A1AA",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}

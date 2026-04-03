"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, {
  SectionHeading,
  fadeUpVariants,
} from "@/components/shared/SectionWrapper";
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
    description:
      "A full-stack QR code ordering platform for restaurants featuring real-time order management, multi-role dashboards (customer, waiter, kitchen, admin), Stripe payments, and live order tracking via WebSockets.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Stripe", "WebSocket"],
    category: "Full Stack",
    featured: true,
    liveUrl: "https://smartorder.demo.io",
    githubUrl: "https://github.com/aakashyadav/smart-order",
    gradient: "from-brand-red/20 to-orange-500/10",
    emoji: "🍽️",
  },
  {
    id: 2,
    title: "Developer Portfolio v2",
    description:
      "This portfolio website — built with Next.js 14, Tailwind CSS, Framer Motion, and shadcn/ui. Features dark/light mode, smooth animations, and a fully responsive design.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    category: "Frontend",
    featured: true,
    liveUrl: "https://aakashyadav.dev",
    githubUrl: "https://github.com/aakashyadav/portfolio",
    gradient: "from-blue-500/20 to-purple-500/10",
    emoji: "🚀",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce solution with product catalog, cart management, user authentication, order tracking, and an admin dashboard for inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Express"],
    category: "Full Stack",
    liveUrl: "https://ecom.demo.io",
    githubUrl: "https://github.com/aakashyadav/ecommerce",
    gradient: "from-green-500/20 to-teal-500/10",
    emoji: "🛒",
  },
  {
    id: 4,
    title: "Real-Time Chat Application",
    description:
      "Socket.io powered chat app with room support, private messaging, message history, online presence indicators, and file sharing capabilities.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "Full Stack",
    liveUrl: "https://chat.demo.io",
    githubUrl: "https://github.com/aakashyadav/realtime-chat",
    gradient: "from-purple-500/20 to-pink-500/10",
    emoji: "💬",
  },
  {
    id: 5,
    title: "Task Management SaaS",
    description:
      "Kanban-style project management tool with drag-and-drop, team collaboration, deadline tracking, notifications, and multi-workspace support.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Neon", "NextAuth"],
    category: "Full Stack",
    liveUrl: "https://tasks.demo.io",
    githubUrl: "https://github.com/aakashyadav/taskmanager",
    gradient: "from-yellow-500/20 to-orange-500/10",
    emoji: "📋",
  },
  {
    id: 6,
    title: "REST API Boilerplate",
    description:
      "Production-ready Express.js + TypeScript REST API template with JWT auth, rate limiting, input validation, error handling, and full Swagger docs.",
    tags: ["Node.js", "Express", "TypeScript", "PostgreSQL", "JWT"],
    category: "Backend",
    liveUrl: "https://github.com/aakashyadav/api-boilerplate",
    githubUrl: "https://github.com/aakashyadav/api-boilerplate",
    gradient: "from-red-500/20 to-brand-red/10",
    emoji: "⚡",
  },
];

const filterTags = ["All", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper
      id="projects"
      className="section-padding bg-brand-surface relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge="Portfolio"
          title={
            <>
              Featured <span className="gradient-text">Projects</span>
            </>
          }
          subtitle="A selection of real-world projects I've built — from concept to production."
        />

        {/* Filter buttons */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap gap-2 mb-10"
        >
          <Filter className="w-4 h-4 text-brand-text self-center mr-1" />
          {filterTags.map((tag) => (
            <motion.button
              key={tag}
              id={`project-filter-${tag.toLowerCase().replace(" ", "-")}`}
              onClick={() => setActiveFilter(tag)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                activeFilter === tag
                  ? "bg-brand-red border-brand-red text-white"
                  : "glass border-white/10 text-brand-text hover:text-white"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
      className={`relative glass-card rounded-2xl overflow-hidden border transition-all duration-300 ${
        project.featured
          ? "border-brand-red/20 hover:border-brand-red/40"
          : "border-white/5 hover:border-white/10"
      } flex flex-col`}
    >
      {/* Header gradient */}
      <div className={`bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-between`}>
        <span className="text-5xl">{project.emoji}</span>
        {project.featured && (
          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-semibold">
            <Star className="w-3 h-3 fill-brand-red" />
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-white leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-brand-text text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-brand-text text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-5">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 hover:border-white/20 text-white text-sm font-semibold transition-colors"
          >
            <FaGithub className="w-4 h-4" />
          </motion.a>
        </div>
      </div>

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: hovered && project.featured
            ? "inset 0 0 30px rgba(225,29,72,0.08)"
            : "none",
        }}
      />
    </motion.div>
  );
}

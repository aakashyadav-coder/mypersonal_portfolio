"use client";

import { motion } from "framer-motion";
import SectionWrapper, {
  SectionHeading,
  fadeUpVariants,
} from "@/components/shared/SectionWrapper";
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
      "Implemented end-to-end test coverage from 0% to 75% with Jest & Playwright",
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
      "Completed 10+ projects for international clients via Upwork",
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
      className="section-padding bg-brand-dark relative overflow-hidden"
    >
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge="Experience"
          title={
            <>
              Work <span className="gradient-text">History</span>
            </>
          }
          subtitle="My professional journey building real-world solutions that matter."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px timeline-line opacity-40" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={fadeUpVariants}
                custom={i}
                className="relative flex gap-6 md:gap-10"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, type: "spring" }}
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 z-10 ${
                      exp.current
                        ? "bg-brand-red border-brand-red glow-red-sm animate-pulse-glow"
                        : "glass-card border-brand-border"
                    }`}
                  >
                    <Briefcase
                      className={`w-5 h-5 md:w-6 md:h-6 ${
                        exp.current ? "text-white" : "text-brand-text"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Card */}
                <div className="flex-1 glass-card rounded-2xl p-6 border border-white/5 hover:border-brand-red/20 transition-colors mb-2">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-brand-red font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold">
                          Current
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full glass border border-white/10 text-brand-text text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-xs text-brand-text mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-brand-text text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2 text-sm text-brand-text">
                        <CheckCircle className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-lg bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-medium"
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

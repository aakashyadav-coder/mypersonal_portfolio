"use client";

import { motion } from "framer-motion";
import SectionWrapper, {
  SectionHeading,
  fadeUpVariants,
} from "@/components/shared/SectionWrapper";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Rocket,
  Award,
  MapPin,
} from "lucide-react";

const stats = [
  { icon: Briefcase, value: "2+", label: "Years Experience" },
  { icon: Code2, value: "15+", label: "Projects Built" },
  { icon: Award, value: "1", label: "Degree (BScIT)" },
  { icon: Rocket, value: "5+", label: "Happy Clients" },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Bachelor of Science in IT",
    detail: "Software & Web Development",
    sub: "Graduated with Distinction",
    color: "text-brand-red",
  },
  {
    icon: Briefcase,
    title: "2+ Years Real-World Experience",
    detail: "Full-Stack Development",
    sub: "From startups to enterprise",
    color: "text-blue-400",
  },
  {
    icon: MapPin,
    title: "Currently Based In",
    detail: "Nepal",
    sub: "Open to remote work globally",
    color: "text-green-400",
  },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      className="section-padding bg-brand-surface relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — Visual */}
          <motion.div variants={fadeUpVariants} className="relative">
            {/* Avatar container */}
            <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80 lg:w-full lg:h-96">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-brand-red/20 rotate-3 scale-105" />
              <div className="absolute inset-0 rounded-2xl border border-white/5 -rotate-2 scale-[1.02]" />

              {/* Avatar box */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-brand-card to-brand-dark flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-brand-red/30 to-brand-red-dark/50 mx-auto flex items-center justify-center text-7xl font-black text-white border-4 border-brand-red/30 shadow-2xl">
                    <span className="font-display">A</span>
                  </div>
                  <p className="mt-4 font-display font-bold text-xl text-white">Aakash Yadav</p>
                  <p className="text-brand-red text-sm mt-1">Software & Web Developer</p>
                </div>
                {/* Shimmer sweep */}
                <div className="absolute inset-0 shimmer-bg opacity-20" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-3 border border-brand-red/20"
              >
                <span className="text-xs text-brand-text">Currently</span>
                <p className="text-white font-semibold text-sm">Open to work ✨</p>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -left-4 glass-card rounded-xl px-4 py-3 border border-white/5"
              >
                <span className="text-xs text-brand-text">Experience</span>
                <p className="text-white font-semibold text-sm">2+ Years 🚀</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="space-y-8">
            <SectionHeading
              badge="About Me"
              title={
                <>
                  Building Digital{" "}
                  <span className="gradient-text">Experiences</span>
                </>
          }
            />

            <motion.div variants={fadeUpVariants} className="space-y-4 text-brand-text leading-relaxed">
              <p>
                I&apos;m a passionate{" "}
                <span className="text-white font-semibold">Software &amp; Web Developer</span>{" "}
                with over 2 years of real-world experience building production-grade web applications
                that scale. My journey started with a{" "}
                <span className="text-brand-red font-semibold">BScIT in Software & Web Development</span>,
                and I&apos;ve been shipping impactful products ever since.
              </p>
              <p>
                I specialize in full-stack development using modern tools like{" "}
                <span className="text-white">React, Next.js, and Node.js</span> — always with an
                eye for clean code, performance, and developer experience. I love turning complex
                problems into elegant, user-centric solutions.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new technologies, contributing to
                open-source, or mentoring other developers in the community.
              </p>
            </motion.div>

            {/* Highlight cards */}
            <motion.div variants={fadeUpVariants} className="grid gap-3">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 border border-white/5 hover:border-brand-red/20 transition-colors"
                >
                  <div className={`p-2 rounded-lg bg-white/5 ${h.color}`}>
                    <h.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{h.title}</p>
                    <p className="text-brand-red text-xs">{h.detail}</p>
                    <p className="text-brand-text text-xs mt-0.5">{h.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUpVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center border border-white/5 hover:border-brand-red/20 transition-all hover:scale-105"
                >
                  <stat.icon className="w-5 h-5 text-brand-red mx-auto mb-2" />
                  <div className="font-display text-2xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-brand-text text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

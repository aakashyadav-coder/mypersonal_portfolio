"use client";

import { motion } from "framer-motion";
import SectionWrapper, {
  SectionHeading,
  fadeUpVariants,
} from "@/components/shared/SectionWrapper";
import {
  Globe,
  Server,
  Palette,
  Layers,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "web-dev",
    icon: Globe,
    title: "Web Development",
    description:
      "End-to-end web application development using modern frameworks like Next.js and React — fast, accessible, and SEO-optimized.",
    features: [
      "Next.js / React applications",
      "Responsive & mobile-first design",
      "Performance optimization",
      "SEO best practices",
    ],
    gradient: "from-brand-red/20 to-rose-500/10",
    iconBg: "bg-brand-red/20",
    iconColor: "text-brand-red",
    border: "hover:border-brand-red/30",
  },
  {
    id: "backend-api",
    icon: Server,
    title: "Backend & API Development",
    description:
      "Scalable REST & GraphQL APIs, database design, authentication systems, and cloud deployments that power your product.",
    features: [
      "REST / GraphQL API design",
      "Authentication & authorization",
      "Database modeling",
      "Cloud deployment & CI/CD",
    ],
    gradient: "from-blue-500/15 to-indigo-500/10",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    border: "hover:border-blue-500/30",
  },
  {
    id: "ui-ux",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing intuitive, visually stunning interfaces that users love. Turning wireframes into polished, interactive experiences.",
    features: [
      "Figma wireframes & prototypes",
      "Component system design",
      "Micro-interaction design",
      "Accessibility (WCAG)",
    ],
    gradient: "from-purple-500/15 to-pink-500/10",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    border: "hover:border-purple-500/30",
  },
  {
    id: "system-design",
    icon: Layers,
    title: "System Design",
    description:
      "Architecting scalable, maintainable systems from the ground up — microservices, event-driven designs, and cloud-native solutions.",
    features: [
      "Architecture planning",
      "Scalability consulting",
      "Tech stack selection",
      "Code reviews & audits",
    ],
    gradient: "from-green-500/15 to-teal-500/10",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
    border: "hover:border-green-500/30",
  },
];

export default function Services() {
  return (
    <SectionWrapper
      id="services"
      className="section-padding bg-brand-surface relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-red-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge="Services"
          title={
            <>
              What I Can <span className="gradient-text">Do For You</span>
            </>
          }
          subtitle="From idea to deployment — I deliver complete solutions tailored to your needs."
          center
        />

        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              variants={fadeUpVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`glass-card rounded-2xl overflow-hidden border border-white/5 ${service.border} transition-all duration-300 cursor-default group`}
            >
              {/* Top gradient strip */}
              <div className={`bg-gradient-to-br ${service.gradient} p-6`}>
                <div
                  className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <p className="text-brand-text text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <ArrowRight className={`w-3.5 h-3.5 flex-shrink-0 ${service.iconColor}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-14 text-center"
        >
          <p className="text-brand-text mb-5">
            Need something custom?{" "}
            <span className="text-white">Let&apos;s talk.</span>
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(225,29,72,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-red text-white font-bold hover:bg-brand-red-dark transition-colors"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

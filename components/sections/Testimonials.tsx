"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { SectionHeading, fadeUpVariants } from "@/components/shared/SectionWrapper";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1, name: "Sarah Mitchell", role: "CEO, FoodieHub",
    avatar: "S", avatarColor: "linear-gradient(135deg,#8b5cf6,#6366f1)", rating: 5,
    text: "Aakash built our QR-based restaurant ordering system from scratch. The result was beyond expectations — clean UI, reliable backend, and deployed on time. Absolutely brilliant work!",
  },
  {
    id: 2, name: "James Rodriguez", role: "CTO, DigitalEdge Co.",
    avatar: "J", avatarColor: "linear-gradient(135deg,#3b82f6,#06b6d4)", rating: 5,
    text: "One of the most talented developers I've worked with. Aakash's attention to code quality, system design, and delivery speed is impressive. Highly recommend for any complex project.",
  },
  {
    id: 3, name: "Amara Osei", role: "Founder, StartupFlow",
    avatar: "A", avatarColor: "linear-gradient(135deg,#22c55e,#14b8a6)", rating: 5,
    text: "Aakash transformed our outdated website into a modern, high-performing web app. Communication was excellent throughout. Will definitely work together again.",
  },
  {
    id: 4, name: "Thomas Müller", role: "Product Manager, TechCorp",
    avatar: "T", avatarColor: "linear-gradient(135deg,#f97316,#ef4444)", rating: 5,
    text: "Professional, reliable, and technically exceptional. Aakash delivered a robust API integration project well ahead of schedule and with zero bugs. A true 10x developer.",
  },
];

const achievements = [
  { emoji: "🎓", title: "BScIT Graduate",  detail: "Software & Web Development" },
  { emoji: "🏆", title: "Top Rated Dev",   detail: "Upwork — 5★ Rating" },
  { emoji: "🚀", title: "15+ Projects",    detail: "Delivered to production" },
  { emoji: "⚡", title: "Fast Delivery",   detail: "100% on-time record" },
  { emoji: "🌍", title: "Global Clients",  detail: "5+ countries served" },
  { emoji: "📈", title: "40% Avg Boost",   detail: "Performance improvements" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % testimonials.length), 4000);
    return () => clearInterval(interval);
  }, [auto]);

  const prev = () => { setAuto(false); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setAuto(false); setCurrent((c) => (c + 1) % testimonials.length); };
  const t = testimonials[current];

  return (
    <SectionWrapper
      id="testimonials"
      className="section-padding"
      style={{ backgroundColor: "#0A0A0B", position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", right: 0, top: 0, width: "24rem", height: "24rem", borderRadius: "50%", background: "rgba(225,29,72,0.04)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div className="section-container">
        <SectionHeading
          badge="Social Proof"
          title={<>Testimonials & <span className="gradient-text">Achievements</span></>}
          subtitle="Kind words from clients and milestones I'm proud of."
          center
        />

        {/* Carousel */}
        <motion.div variants={fadeUpVariants} style={{ maxWidth: "760px", margin: "0 auto 4rem" }}>
          <div
            className="glass-card"
            style={{
              borderRadius: "1.25rem",
              padding: "2.5rem",
              border: "1px solid rgba(255,255,255,0.07)",
              position: "relative",
            }}
          >
            <Quote style={{ width: "2.5rem", height: "2.5rem", color: "rgba(225,29,72,0.15)", position: "absolute", top: "1.5rem", right: "1.5rem" }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.25rem" }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} style={{ width: "1.25rem", height: "1.25rem", fill: "#facc15", color: "#facc15" }} />
                  ))}
                </div>

                <blockquote style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem", fontStyle: "italic" }}>
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      background: t.avatarColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p style={{ color: "#fff", fontWeight: 600 }}>{t.name}</p>
                    <p style={{ color: "#A1A1AA", fontSize: "0.875rem" }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setAuto(false); setCurrent(i); }}
                    style={{
                      height: "6px",
                      width: i === current ? "1.5rem" : "6px",
                      borderRadius: "9999px",
                      background: i === current ? "#E11D48" : "rgba(255,255,255,0.15)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.3s",
                    }}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {[{ fn: prev, Icon: ChevronLeft, label: "Previous" }, { fn: next, Icon: ChevronRight, label: "Next" }].map(({ fn, Icon, label }) => (
                  <motion.button
                    key={label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={fn}
                    className="glass"
                    style={{
                      width: "2.25rem",
                      height: "2.25rem",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#A1A1AA",
                      cursor: "pointer",
                      background: "transparent",
                    }}
                    aria-label={label}
                  >
                    <Icon style={{ width: "1rem", height: "1rem" }} />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "1rem",
          }}
        >
          {achievements.map((ach) => (
            <motion.div
              key={ach.title}
              variants={fadeUpVariants}
              whileHover={{ y: -4, scale: 1.04 }}
              className="glass-card"
              style={{
                borderRadius: "0.875rem",
                padding: "1.25rem 1rem",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.06)",
                cursor: "default",
                transition: "border-color 0.2s",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{ach.emoji}</div>
              <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.3 }}>{ach.title}</p>
              <p style={{ color: "#A1A1AA", fontSize: "0.75rem", marginTop: "0.3rem" }}>{ach.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

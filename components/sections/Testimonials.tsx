"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, {
  SectionHeading,
  fadeUpVariants,
} from "@/components/shared/SectionWrapper";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, FoodieHub",
    avatar: "S",
    avatarColor: "from-purple-500 to-indigo-500",
    rating: 5,
    text: "Aakash built our QR-based restaurant ordering system from scratch. The result was beyond expectations — clean UI, reliable backend, and deployed on time. Absolutely brilliant work!",
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "CTO, DigitalEdge Co.",
    avatar: "J",
    avatarColor: "from-blue-500 to-cyan-500",
    rating: 5,
    text: "One of the most talented developers I've worked with. Aakash's attention to code quality, system design, and delivery speed is impressive. Highly recommend for any complex project.",
  },
  {
    id: 3,
    name: "Amara Osei",
    role: "Founder, StartupFlow",
    avatar: "A",
    avatarColor: "from-green-500 to-teal-500",
    rating: 5,
    text: "Alex transformed our outdated website into a modern, high-performing web app. Communication was excellent throughout the project. Will definitely work together again.",
  },
  {
    id: 4,
    name: "Thomas Müller",
    role: "Product Manager, TechCorp",
    avatar: "T",
    avatarColor: "from-orange-500 to-red-500",
    rating: 5,
    text: "Professional, reliable, and technically exceptional. Aakash delivered a robust API integration project well ahead of schedule and with zero bugs. A true 10x developer.",
  },
];

const achievements = [
  { emoji: "🎓", title: "BScIT Graduate", detail: "Software & Web Development" },
  { emoji: "🏆", title: "Top Rated Dev", detail: "Upwork — 5★ Rating" },
  { emoji: "🚀", title: "15+ Projects", detail: "Delivered to production" },
  { emoji: "⚡", title: "Fast Delivery", detail: "100% on-time record" },
  { emoji: "🌍", title: "Global Clients", detail: "5+ countries served" },
  { emoji: "📈", title: "40% Avg Boost", detail: "Performance improvements" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [auto]);

  const prev = () => {
    setAuto(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setAuto(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <SectionWrapper
      id="testimonials"
      className="section-padding bg-brand-dark relative overflow-hidden"
    >
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-brand-red/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge="Social Proof"
          title={
            <>
              Testimonials &{" "}
              <span className="gradient-text">Achievements</span>
            </>
          }
          subtitle="Kind words from clients and milestones I'm proud of."
          center
        />

        {/* Testimonial carousel */}
        <motion.div variants={fadeUpVariants} className="max-w-3xl mx-auto mb-16">
          <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/5 relative">
            {/* Quote icon */}
            <Quote className="w-10 h-10 text-brand-red/20 absolute top-6 right-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-white/90 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-brand-text text-sm">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setAuto(false); setCurrent(i); }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-brand-red w-5" : "bg-white/20"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prev}
                  className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-brand-text hover:text-white transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={next}
                  className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-brand-text hover:text-white transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement cards */}
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {achievements.map((ach) => (
            <motion.div
              key={ach.title}
              variants={fadeUpVariants}
              whileHover={{ y: -4, scale: 1.04 }}
              className="glass-card rounded-xl p-4 text-center border border-white/5 hover:border-brand-red/20 transition-all cursor-default"
            >
              <div className="text-3xl mb-2">{ach.emoji}</div>
              <p className="text-white font-semibold text-sm leading-tight">{ach.title}</p>
              <p className="text-brand-text text-xs mt-1">{ach.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

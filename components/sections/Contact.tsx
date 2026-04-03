"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper, {
  SectionHeading,
  fadeUpVariants,
} from "@/components/shared/SectionWrapper";
import { Send, Mail, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aakash@aakashyadav.dev",
    href: "mailto:aakash@aakashyadav.dev",
    color: "text-brand-red",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@aakashyadav",
    href: "https://github.com/aakashyadav",
    color: "text-white",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Aakash Yadav",
    href: "https://linkedin.com/in/aakashyadav",
    color: "text-blue-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nepal",
    href: null,
    color: "text-green-400",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open for new projects",
    href: null,
    color: "text-yellow-400",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate submission — replace with your preferred method (EmailJS / API route)
    await new Promise((r) => setTimeout(r, 1500));
    // Open mailto as fallback
    const mailtoLink = `mailto:aakash@aakashyadav.dev?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailtoLink, "_blank");
    setFormState("success");
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-brand-text focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/30 transition-all text-sm";

  return (
    <SectionWrapper
      id="contact"
      className="section-padding bg-brand-surface relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-red-glow opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          badge="Get In Touch"
          title={
            <>
              Let&apos;s Work <span className="gradient-text">Together</span>
            </>
          }
          subtitle="Have a project in mind? I'd love to hear about it. Let's build something amazing."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left — Contact info */}
          <motion.div variants={fadeUpVariants} className="lg:col-span-2 space-y-4">
            {/* Hire me banner */}
            <div className="glass-card rounded-2xl p-6 border border-brand-red/20 bg-gradient-to-br from-brand-red/10 to-transparent">
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Available for Hire 🚀
              </h3>
              <p className="text-brand-text text-sm leading-relaxed">
                I&apos;m currently open to freelance and full-time opportunities. If you have an
                exciting project, let&apos;s connect!
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">
                  Available for new projects
                </span>
              </div>
            </div>

            {/* Contact details */}
            <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-white/5 ${info.color}`}>
                    <info.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-brand-text text-xs">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white text-sm font-medium hover:text-brand-red transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div variants={fadeUpVariants} className="lg:col-span-3">
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-10 border border-green-500/20 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Message Sent! 🎉
                </h3>
                <p className="text-brand-text">
                  Thanks for reaching out! Your email client should have opened. I&apos;ll get
                  back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setFormState("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 px-6 py-3 rounded-xl bg-brand-red text-white font-semibold hover:bg-brand-red-dark transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8 border border-white/5 space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs text-brand-text mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs text-brand-text mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs text-brand-text mb-1.5 font-medium">
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" className="bg-brand-card">Select a topic...</option>
                    <option value="Hiring - Full Time" className="bg-brand-card">Hiring — Full Time</option>
                    <option value="Freelance Project" className="bg-brand-card">Freelance Project</option>
                    <option value="Collaboration" className="bg-brand-card">Collaboration</option>
                    <option value="Consulting" className="bg-brand-card">Consulting</option>
                    <option value="Other" className="bg-brand-card">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs text-brand-text mb-1.5 font-medium">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === "loading"}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(225,29,72,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-bold text-base transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

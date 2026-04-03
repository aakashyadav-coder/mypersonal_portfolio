"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading, fadeUpVariants } from "@/components/shared/SectionWrapper";
import { Send, Mail, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  { icon: Mail,       label: "Email",       value: "aakash@aakashyadav.dev", href: "mailto:aakash@aakashyadav.dev", color: "#E11D48" },
  { icon: FaGithub,   label: "GitHub",      value: "@aakashyadav",           href: "https://github.com/aakashyadav",         color: "#fff" },
  { icon: FaLinkedin, label: "LinkedIn",    value: "Aakash Yadav",          href: "https://linkedin.com/in/aakashyadav",     color: "#60a5fa" },
  { icon: MapPin,     label: "Location",    value: "Nepal",                  href: null,                                       color: "#4ade80" },
  { icon: Clock,      label: "Availability",value: "Open for new projects",  href: null,                                       color: "#fbbf24" },
];

type FormState = "idle" | "loading" | "success" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "0.75rem",
  padding: "0.875rem 1rem",
  color: "#fff",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  color: "#A1A1AA",
  fontWeight: 500,
  marginBottom: "0.4rem",
};

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    const mailtoLink = `mailto:aakash@aakashyadav.dev?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailtoLink, "_blank");
    setFormState("success");
  };

  return (
    <SectionWrapper
      id="contact"
      className="section-padding"
      style={{ backgroundColor: "#111113", position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(225,29,72,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="section-container">
        <SectionHeading
          badge="Get In Touch"
          title={<>Let&apos;s Work <span className="gradient-text">Together</span></>}
          subtitle="Have a project in mind? I'd love to hear about it. Let's build something amazing."
          center
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }} className="contact-grid">
          {/* Left — Info */}
          <motion.div variants={fadeUpVariants} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Banner */}
            <div
              className="glass-card"
              style={{
                borderRadius: "1rem",
                padding: "1.75rem",
                border: "1px solid rgba(225,29,72,0.2)",
                background: "linear-gradient(135deg,rgba(225,29,72,0.08),transparent)",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
                Available for Hire 🚀
              </h3>
              <p style={{ color: "#A1A1AA", fontSize: "0.9rem", lineHeight: 1.7 }}>
                I&apos;m currently open to freelance and full-time opportunities. If you have an exciting project, let&apos;s connect!
              </p>
              <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#4ade80", animation: "pulse 2s infinite" }} />
                <span style={{ color: "#4ade80", fontSize: "0.875rem", fontWeight: 500 }}>Available for new projects</span>
              </div>
            </div>

            {/* Info list */}
            <div className="glass-card" style={{ borderRadius: "1rem", padding: "1.75rem", border: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {contactInfo.map((info) => (
                <div key={info.label} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <div style={{ padding: "0.5rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.05)", color: info.color, flexShrink: 0, fontSize: "1rem", display: "flex" }}>
                    <info.icon style={{ width: "1rem", height: "1rem" }} />
                  </div>
                  <div>
                    <p style={{ color: "#A1A1AA", fontSize: "0.75rem" }}>{info.label}</p>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noreferrer" style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 500, textDecoration: "none" }}>
                        {info.value}
                      </a>
                    ) : (
                      <p style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 500 }}>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div variants={fadeUpVariants}>
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card"
                style={{ borderRadius: "1rem", padding: "3rem 2rem", border: "1px solid rgba(74,222,128,0.2)", textAlign: "center" }}
              >
                <CheckCircle style={{ width: "4rem", height: "4rem", color: "#4ade80", margin: "0 auto 1rem" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
                  Message Sent! 🎉
                </h3>
                <p style={{ color: "#A1A1AA", lineHeight: 1.7 }}>
                  Thanks for reaching out! Your email client should have opened. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setFormState("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  style={{
                    marginTop: "1.5rem",
                    padding: "0.875rem 2rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "#E11D48",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card"
                style={{
                  borderRadius: "1rem",
                  padding: "2.25rem",
                  border: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
                noValidate
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-row">
                  <div>
                    <label htmlFor="contact-name" style={labelStyle}>Your Name *</label>
                    <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Aakash Yadav" style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>Email Address *</label>
                    <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" style={labelStyle}>Subject</label>
                  <select id="contact-subject" name="subject" value={form.subject} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="" style={{ backgroundColor: "#18181B" }}>Select a topic...</option>
                    <option value="Hiring - Full Time" style={{ backgroundColor: "#18181B" }}>Hiring — Full Time</option>
                    <option value="Freelance Project" style={{ backgroundColor: "#18181B" }}>Freelance Project</option>
                    <option value="Collaboration" style={{ backgroundColor: "#18181B" }}>Collaboration</option>
                    <option value="Consulting" style={{ backgroundColor: "#18181B" }}>Consulting</option>
                    <option value="Other" style={{ backgroundColor: "#18181B" }}>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" style={labelStyle}>Message *</label>
                  <textarea id="contact-message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project, timeline, and budget..." style={{ ...inputStyle, resize: "none" }} />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === "loading"}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(225,29,72,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "1rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "#E11D48",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1rem",
                    border: "none",
                    cursor: formState === "loading" ? "not-allowed" : "pointer",
                    opacity: formState === "loading" ? 0.7 : 1,
                  }}
                >
                  {formState === "loading" ? (
                    <><Loader2 style={{ width: "1.1rem", height: "1.1rem", animation: "spin 1s linear infinite" }} /> Sending...</>
                  ) : (
                    <><Send style={{ width: "1.1rem", height: "1.1rem" }} /> Send Message</>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 2fr 3fr !important; }
        }
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}

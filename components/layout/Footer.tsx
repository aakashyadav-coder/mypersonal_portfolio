"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp, Code2, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com/aakashyadav", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/aakashyadav", label: "LinkedIn" },
  { icon: Mail, href: "mailto:aakash@aakashyadav.dev", label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-12 pb-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-red-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold mb-3">
              <div className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-white">Aakash</span>
              <span className="text-brand-red">Yadav</span>
            </div>
            <p className="text-brand-text text-sm leading-relaxed max-w-xs">
              Software &amp; Web Developer crafting scalable digital experiences
              with modern technologies. Based in Nepal, open to remote work globally.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(link.href.replace("#", ""))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-brand-text hover:text-brand-red text-sm py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Connect</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-brand-text hover:text-brand-red hover:border-brand-red/30 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="text-brand-text text-xs mt-4">
              Open to work — Let&apos;s connect!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-text text-xs flex items-center gap-1">
            Built with{" "}
            <Heart className="w-3 h-3 text-brand-red fill-brand-red" /> by{" "}
            <span className="text-white">Aakash Yadav</span> · {new Date().getFullYear()}
          </p>
          <p className="text-brand-text text-xs">
            Next.js · Tailwind CSS · Framer Motion
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-brand-text hover:text-brand-red hover:border-brand-red/30 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

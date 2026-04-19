"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowDown, Mail, Sparkles, Code2, Cpu, Braces } from "lucide-react";
import { personalInfo } from "@/lib/data";

/* ── Inline SVG icons ── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  { Icon: GithubIcon,   href: personalInfo.github,             label: "GitHub",   id: "hero-github" },
  { Icon: LinkedinIcon, href: personalInfo.linkedin,           label: "LinkedIn", id: "hero-linkedin" },
  { Icon: Mail,         href: `mailto:${personalInfo.email}`,  label: "Email",    id: "hero-email" },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden group pt-20 pb-10 sm:pt-0"
    >
      {/* Interactive Mouse Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* LEFT COLUMN: TXT */}
        <div className="w-full lg:w-3/5 text-left flex flex-col items-start pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs sm:text-sm font-semibold tracking-wide hover:bg-indigo-500/20 transition-colors shadow-lg shadow-indigo-500/10"
          >
            <Sparkles size={14} className="text-indigo-400" />
            🚧 Currently Building AI Agents
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-1" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black tracking-tight text-white mb-6 leading-[1.05]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Building <span className="gradient-text">systems</span>,<br/>not just websites.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl font-medium text-slate-300 mb-6"
          >
            I design and develop AI-powered platforms and real-world applications.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed mb-10"
          >
            Focusing on scalable backend structures, autonomous agents, and fluid component-driven UI. Real world impact over generic templates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4 mb-10 w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("projects")}
              className="px-8 py-3.5 sm:py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl transition-all duration-200 shadow-xl shadow-indigo-500/20 text-sm sm:text-base border border-indigo-400"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="px-8 py-3.5 sm:py-4 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-200 bg-white/5 backdrop-blur-sm text-sm sm:text-base"
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-5 border-t border-white/10 pt-8 w-full max-w-sm"
          >
            {socialLinks.map(({ Icon, href, label, id }) => (
              <motion.a
                key={id}
                id={id}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2, color: "#818CF8" }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-indigo-400 transition-colors duration-200"
              >
                <Icon />
              </motion.a>
            ))}
            <span className="text-slate-600 text-sm font-medium ml-auto">
              Samarth Sugandhi
            </span>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: ANIMATED VISUAL */}
        <div className="w-full lg:w-2/5 relative h-[400px] lg:h-[600px] flex items-center justify-center">
          {/* Abstract background blur orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-indigo-600/30 rounded-full blur-[80px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute right-0 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] bg-sky-500/20 rounded-full blur-[80px]"
          />

          {/* Floating Glass Components */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full h-full"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] left-[10%] w-[200px] lg:w-[240px] p-5 glass-card border border-indigo-500/30 rounded-2xl shadow-2xl backdrop-blur-xl z-20"
            >
              <div className="flex items-center gap-3 mb-3">
                <Code2 size={24} className="text-indigo-400" />
                <div className="w-16 h-2 bg-slate-700 rounded-full" />
              </div>
              <div className="space-y-2">
                <div className="w-full h-2 bg-slate-700/50 rounded-full" />
                <div className="w-4/5 h-2 bg-slate-700/50 rounded-full" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] right-[10%] w-[220px] lg:w-[260px] p-5 glass-card border border-sky-500/20 rounded-2xl shadow-2xl backdrop-blur-xl z-30"
            >
              <div className="flex items-center gap-3 mb-3">
                <Cpu size={24} className="text-sky-400" />
                <div className="w-20 h-2 bg-slate-700 rounded-full" />
              </div>
              <div className="space-y-3">
                <div className="w-full h-8 bg-sky-500/10 border border-sky-500/20 rounded-lg" />
                <div className="w-2/3 h-2 bg-slate-700/50 rounded-full" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[160px] lg:w-[200px] h-[160px] lg:h-[200px] rounded-full border border-white/5 bg-gradient-to-br from-slate-800/80 to-slate-900/80 shadow-[0_0_50px_rgba(99,102,241,0.2)] backdrop-blur-md flex items-center justify-center z-10"
            >
              <div className="w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] rounded-full flex items-center justify-center bg-indigo-500/10 animate-pulse border border-indigo-500/20">
                <Braces size={48} className="text-indigo-400 opacity-60" />
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

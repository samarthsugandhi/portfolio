"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Sparkles, Zap, Code2, Trophy } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full Stack", value: "4+ Projects Shipped" },
  { icon: Trophy, label: "Hackathon Wins", value: "2 First Places" },
  { icon: Zap, label: "Currently", value: "Building AI Agents" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Subtle left glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-indigo-500/30" />
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              About Me
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Crafting products, not just code.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m <span className="text-white font-bold tracking-wide">Samarth Sugandhi</span>,
              a full-stack developer currently in my{" "}
              <span className="gradient-text font-bold">
                6th semester at BEC (Information Science)
              </span>
              . I build <strong className="text-white tracking-wide font-semibold">real-world, production-grade systems</strong> — not side projects that never ship.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              From hackathons to classrooms, I&apos;ve built and deployed{" "}
              <span className="text-slate-200">academic management systems, finance apps, and event platforms.</span>{" "}
              I love working across the entire stack — architecting databases, designing APIs, and crafting pixel-perfect UIs.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              Right now, I&apos;m deeply exploring{" "}
              <span className="gradient-text-green font-bold tracking-wide">AI agents</span>{" "}
              and intelligent automation — finding ways to integrate LLMs into real products that people actually use.
            </p>

            {/* Education badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700/60 bg-white/5 text-slate-300 text-sm">
              🎓 {personalInfo.education}
            </div>
          </motion.div>

          {/* Right — Stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            {highlights.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 6, borderColor: "rgba(99,102,241,0.4)" }}
                className="glass-card flex items-center gap-4 p-5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <p className="text-white font-semibold">{value}</p>
                </div>
              </motion.div>
            ))}

            {/* Currently building banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="glass-card p-5 border border-green-500/20 bg-green-500/5"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-green-400" />
                <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">
                  Currently Exploring
                </span>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
              <p className="text-slate-200 font-bold tracking-wide">AI Agents & Intelligent Automation</p>
              <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">
                Integrating LLMs into real product workflows for tangible impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

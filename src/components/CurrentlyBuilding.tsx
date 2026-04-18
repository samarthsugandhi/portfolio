"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Terminal, Blocks, Zap } from "lucide-react";

export default function CurrentlyBuilding() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const areas = [
    {
      icon: Terminal,
      title: "AI Agents",
      desc: "Integrating LLMs into autonomous agents that navigate web interfaces and execute complex logic workflows.",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: Zap,
      title: "Automation Systems",
      desc: "Building highly efficient automated systems to parse data and reduce manual overhead intelligently.",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20"
    },
    {
      icon: Blocks,
      title: "Scalable Web Apps",
      desc: "Architecting high-performance backends and real-time frontend applications for production.",
      color: "text-sky-400",
      bgColor: "bg-sky-500/10",
      borderColor: "border-sky-500/20"
    }
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card overflow-hidden relative p-8 md:p-12 border-t-2 border-indigo-500/20"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
            {/* Left side text */}
            <div className="md:w-1/3 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700/60 bg-slate-800/40 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles size={14} className="text-indigo-400" />
                Currently Building
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight font-display">
                Deep diving into <span className="gradient-text">intelligent software</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Constantly exploring new boundaries in AI tooling and scalable architecture.
              </p>
            </div>

            {/* Right side items */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {areas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className={`p-5 rounded-2xl border ${area.borderColor} ${area.bgColor} transition-transform hover:-translate-y-1`}
                >
                  <area.icon size={22} className={`${area.color} mb-3`} />
                  <h4 className="text-white font-semibold text-sm mb-2">{area.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

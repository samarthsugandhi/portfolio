"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="section-padding relative overflow-hidden bg-slate-900/40 border-y border-white/5">
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Tech Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight font-display mb-4">
            Tools I build with.
          </h2>
          <p className="max-w-lg mx-auto text-slate-400">
            A carefully curated stack focused on performance, scalability, and developer experience.
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {skills.map((group, gIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 md:p-10 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-slate-300">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, sIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.1 * sIdx, duration: 0.4 }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.05, 
                      backgroundColor: "rgba(99,102,241,0.15)",
                      borderColor: "rgba(99,102,241,0.4)" 
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-600/50 text-slate-200 text-sm font-medium shadow-md transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

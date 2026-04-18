"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12 bg-indigo-500/30" />
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Tech Stack
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Tools I work with.
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, gIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gIdx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              id={`skill-group-${group.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="glass-card p-6 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-lg">
                  {group.icon}
                </div>
                <h3 className="font-semibold text-white text-sm">
                  {group.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: gIdx * 0.1 + sIdx * 0.06 + 0.2,
                    }}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "rgba(99,102,241,0.2)",
                      borderColor: "rgba(99,102,241,0.5)",
                      color: "#818CF8",
                    }}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50 cursor-default transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            Always learning — currently deep in{" "}
            <span className="text-green-400 font-medium">AI/LLM tooling</span>{" "}
            and{" "}
            <span className="text-sky-400 font-medium">
              distributed systems
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

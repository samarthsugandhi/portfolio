"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/lib/data";

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-px opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent, #6366F1, transparent)",
        }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-amber-500/30" />
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
              Recognition
            </span>
            <div className="h-px w-12 bg-amber-500/30" />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Wins that matter.
          </h2>
          <p className="text-slate-500 mt-3 max-w-md mx-auto text-sm">
            Results from competing and building under pressure.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              id={`achievement-${achievement.id}`}
              className={`glass-card relative overflow-hidden p-8 hover:border-amber-500/20 transition-all duration-300 hover:shadow-2xl`}
              style={{
                boxShadow: `0 0 0 0 ${achievement.color}00`,
              }}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-60 pointer-events-none`}
              />

              {/* Glow orb */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${achievement.color} 0%, transparent 70%)`,
                }}
              />

              <div className="relative">
                {/* Icon + Year */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border"
                    style={{
                      backgroundColor: `${achievement.color}15`,
                      borderColor: `${achievement.color}30`,
                    }}
                  >
                    {achievement.icon}
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full border"
                    style={{
                      color: achievement.color,
                      borderColor: `${achievement.color}40`,
                      backgroundColor: `${achievement.color}12`,
                    }}
                  >
                    {achievement.year}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {achievement.title}
                </h3>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: achievement.color }}
                >
                  {achievement.subtitle}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {[
            { value: "2+", label: "Hackathons Won" },
            { value: "24h", label: "Longest Sprint" },
            { value: "4+", label: "Real Projects" },
            { value: "1st", label: "Both Times" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span
                className="text-3xl font-extrabold gradient-text"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {value}
              </span>
              <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

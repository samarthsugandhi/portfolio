"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/3 w-80 h-80 opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
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
              Featured Work
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Projects I&apos;ve built.
            </h2>
            <p className="text-slate-500 text-sm max-w-xs">
              Real products, shipped to production.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      id={`project-${project.id}`}
      className="group relative glass-card overflow-hidden flex flex-col transition-all duration-300 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10"
    >
      {/* Top gradient strip */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${project.gradient
          .replace("/20", "")
          .replace("from-", "from-opacity-100 from-")}`}
        style={{
          background: `linear-gradient(90deg, ${project.accentColor}99, ${project.accentColor}33)`,
        }}
      />

      {/* Card gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      <div className="relative p-6 flex flex-col h-full gap-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                style={{
                  color: project.accentColor,
                  borderColor: `${project.accentColor}40`,
                  backgroundColor: `${project.accentColor}12`,
                }}
              >
                {project.category}
              </span>
            </div>
            <h3
              className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {project.name}
            </h3>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} GitHub`}
              id={`project-${project.id}-github`}
              whileHover={{ scale: 1.1, color: "#6366F1" }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg border border-slate-700/60 bg-white/5 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
            >
              <GithubIcon size={16} />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} Live Demo`}
              id={`project-${project.id}-demo`}
              whileHover={{ scale: 1.1, color: "#22C55E" }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg border border-slate-700/60 bg-white/5 text-slate-400 hover:text-green-400 hover:border-green-500/30 transition-all duration-200"
            >
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50 transition-colors group-hover:border-slate-600/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-700/40">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-400 transition-colors font-medium"
          >
            <GithubIcon size={12} />
            View Source
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
            style={{ color: project.accentColor }}
          >
            Live Demo
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

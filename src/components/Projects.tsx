"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, X, LayoutTemplate, Briefcase, Code, Terminal, Boxes, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Map categories to distinct icons for the stylized previews
const categoryIcons: Record<string, React.ElementType> = {
  "Full Stack": BlocksIcon,
  "Finance": Briefcase,
  "EdTech": LayoutTemplate,
  "Events": Boxes,
};

function BlocksIcon({ size }: { size: number }) {
  return <Code size={size} />;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects" ref={ref} className="section-padding relative overflow-hidden bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-indigo-500/50" />
            <span className="text-indigo-400 text-sm font-bold uppercase tracking-widest">
              Selected Work
            </span>
            <div className="h-px w-8 bg-indigo-500/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight font-display mb-4">
            Projects I&apos;ve built.
          </h2>
          <p className="text-slate-400 text-base max-w-lg">
            Real systems addressing significant problems, fully deployed to production.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isFeatured={project.featured}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      {/* modal overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl shadow-2xl border border-slate-700/50 flex flex-col"
            >
              {/* modal header/cover */}
              <div 
                className={`w-full h-32 md:h-48 bg-gradient-to-br ${selectedProject.gradient} relative flex items-center justify-center`}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/40 text-white hover:bg-slate-900/60 transition-colors backdrop-blur-md"
                >
                  <X size={20} />
                </button>
                <div className="absolute inset-0 bg-black/20" />
                <h3 className="relative z-10 text-3xl md:text-5xl font-black text-white font-display text-center drop-shadow-md">
                  {selectedProject.name}
                </h3>
              </div>

              {/* modal content */}
              <div className="p-6 md:p-10 text-slate-300">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex-1 space-y-8">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <Terminal size={18} className="text-indigo-400" /> 
                        The Problem
                      </h4>
                      <p className="leading-relaxed text-slate-400">{selectedProject.modalDetails?.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <Sparkles size={18} className="text-green-400" />
                        The Solution
                      </h4>
                      <p className="leading-relaxed text-slate-400">{selectedProject.modalDetails?.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.modalDetails?.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-indigo-400 mt-1">▹</span>
                            <span className="text-slate-400">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                      <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-widest mb-2">Impact</h4>
                      <p className="text-indigo-100/80 leading-relaxed font-medium">
                        {selectedProject.modalDetails?.impact}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-64 space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) => (
                          <span key={tech} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Links</h4>
                      <div className="flex flex-col gap-3">
                        <a 
                          href={selectedProject.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-slate-700 hover:bg-white/10 hover:border-indigo-500/40 transition-all font-semibold text-sm"
                        >
                          <GithubIcon size={16} /> View Source
                        </a>
                        <a 
                          href={selectedProject.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all font-semibold text-white shadow-lg shadow-indigo-600/20 text-sm"
                        >
                          View Live Demo <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, isFeatured, onClick }: { project: (typeof projects)[0], isFeatured: boolean, onClick: () => void }) {
  const Icon = categoryIcons[project.category] || BlocksIcon;

  return (
    <motion.article
      variants={cardVariants}
      onClick={onClick}
      className={`group cursor-pointer relative glass-card overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 ${isFeatured ? "md:col-span-2 md:flex-row" : ""}`}
    >
      {/* Visual Preview Section */}
      <div className={`relative bg-gradient-to-br ${project.gradient} border-b border-white/5 overflow-hidden flex items-center justify-center ${isFeatured ? "md:w-2/5 md:border-b-0 md:border-r" : "h-48"}`}>
        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
        <motion.div 
          className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl transition-transform duration-500 group-hover:scale-110"
        >
          <Icon size={48} className="text-white drop-shadow-lg" />
        </motion.div>
      </div>

      <div className={`relative p-8 flex flex-col flex-1 gap-5 ${isFeatured ? "md:w-3/5" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                style={{
                  color: project.accentColor,
                  borderColor: `${project.accentColor}30`,
                  backgroundColor: `${project.accentColor}10`,
                }}
              >
                {project.category}
              </span>
              {isFeatured && (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Featured
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                    🏆 Hackathon Winning Project
                  </span>
                </div>
              )}
            </div>
            <h3 className="text-2xl font-black text-white group-hover:text-indigo-300 transition-colors font-display">
              {project.name}
            </h3>
          </div>
        </div>

        <p className="text-slate-400 text-sm md:text-base leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, isFeatured ? 5 : 3).map((tech) => (
            <span
              key={tech}
              className="text-xs font-semibold px-2.5 py-1 rounded bg-black/40 border border-white/5 text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > (isFeatured ? 5 : 3) && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-transparent border border-dashed border-slate-600 text-slate-500">
              +{project.tech.length - (isFeatured ? 5 : 3)} more
            </span>
          )}
        </div>

        <div className="pt-5 border-t border-slate-800/80 mt-auto">
          <span className="text-indigo-400 text-sm font-semibold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
            Read Case Study <ExternalLink size={14} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

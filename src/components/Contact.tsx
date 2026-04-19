"use client";

import { useRef, useState } from "react";
import type React from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

/* ── Inline SVG social icons ── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => <Mail size={20} />;

type SocialLink = {
  id: string;
  Icon: () => React.ReactElement;
  label: string;
  href: string;
  hoverColor: string;
  description: string;
};

const socialLinks: SocialLink[] = [
  {
    id: "contact-github",
    Icon: GithubIcon,
    label: "GitHub",
    href: personalInfo.github,
    hoverColor: "#6366F1",
    description: "See my code & projects",
  },
  {
    id: "contact-linkedin",
    Icon: LinkedinIcon,
    label: "LinkedIn",
    href: personalInfo.linkedin,
    hoverColor: "#38BDF8",
    description: "Connect professionally",
  },
  {
    id: "contact-email-link",
    Icon: MailIcon,
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    hoverColor: "#22C55E",
    description: personalInfo.email,
  },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    const mailto = `mailto:${personalInfo.email}?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message)}%0A%0AFrom%3A%20${encodeURIComponent(
      form.email
    )}`;
    window.location.href = mailto;
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden bg-[#0A0E17]">
      {/* Top separator */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-px opacity-20"
        style={{ background: "linear-gradient(90deg, transparent, #6366F1, transparent)" }}
      />
      <div
        className="absolute left-1/4 bottom-0 w-80 h-80 opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }}
      />
      <div
        className="absolute right-1/4 top-0 w-64 h-64 opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #22C55E 0%, transparent 70%)" }}
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
            <div className="h-px w-12 bg-indigo-500/30" />
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Get In Touch
            </span>
            <div className="h-px w-12 bg-indigo-500/30" />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let&apos;s build something.
          </h2>
          <p className="text-slate-400 mt-3 max-w-md mx-auto text-sm">
            Open to internships, freelance work, or just a good conversation about tech.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4 lg:pt-4"
          >
            <h3 className="text-lg font-semibold text-white mb-6">Find me on</h3>

            {socialLinks.map(({ id, Icon, label, href, description, hoverColor }, i) => (
              <motion.a
                key={id}
                id={id}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="group flex items-center gap-4 p-4 glass-card hover:border-indigo-500/30 transition-all duration-300"
                style={{ "--hc": hoverColor } as React.CSSProperties}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-700/50 bg-slate-800/50 flex-shrink-0 transition-colors duration-300 group-hover:border-slate-600">
                  <span
                    className="text-slate-400 transition-colors duration-300"
                    style={{ color: undefined }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = hoverColor)
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "")
                    }
                  >
                    <Icon />
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5 break-all">{description}</p>
                </div>
              </motion.a>
            ))}

            {/* Availability note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-2 p-4 rounded-xl border border-green-500/20 bg-green-500/5"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">
                  Available for work — response within 24h
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-7 space-y-5 hover:border-indigo-500/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white">Send a message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  label="Name"
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <FormField
                  label="Email"
                  id="contact-email-field"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="relative flex flex-col pt-3">
                <label
                  htmlFor="contact-message"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none uppercase tracking-wider font-semibold ${
                    form.message.length > 0 ? "-top-1 text-[10px] text-indigo-400" : "top-6 text-sm text-slate-500"
                  }`}
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 pt-5 pb-2 rounded-xl bg-slate-800/40 border border-slate-700/60 text-white text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-slate-800/80 transition-all duration-300 shadow-inner shadow-black/20 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                id="contact-submit"
                disabled={status === "sending" || status === "success"}
                whileHover={status === "idle" ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/30 ${
                  status === "success"
                    ? "bg-green-500/20 border border-green-500/40 text-green-400 shadow-none"
                    : status === "error"
                    ? "bg-red-500/20 border border-red-500/40 text-red-400 shadow-none"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white"
                }`}
              >
                {status === "sending" && (
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {status === "success" && <CheckCircle2 size={16} />}
                {status === "error" && <AlertCircle size={16} />}
                {status === "idle" && <Send size={16} />}
                {status === "sending" ? "Opening mail client..." : status === "success" ? "Message ready!" : status === "error" ? "Something went wrong" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label, id, name, type, placeholder, value, onChange, required,
}: {
  label: string; id: string; name: string; type: string;
  placeholder: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const active = isFocused || value.length > 0;

  return (
    <div className="relative flex flex-col pt-3">
      <label 
        htmlFor={id} 
        className={`absolute left-4 transition-all duration-300 pointer-events-none uppercase tracking-wider font-semibold ${active ? "-top-1 text-[10px] text-indigo-400" : "top-6 text-sm text-slate-500"}`}
      >
        {label} {required && "*"}
      </label>
      <input
        id={id} name={name} type={type} 
        placeholder={isFocused ? placeholder : ""}
        value={value} onChange={onChange} required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 pt-5 pb-2 rounded-xl bg-slate-800/40 border border-slate-700/60 text-white text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-slate-800/80 transition-all duration-300 shadow-inner shadow-black/20"
      />
    </div>
  );
}

"use client";

import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

const fields = [
  { id: "name",    label: "Name",    type: "text"  },
  { id: "email",   label: "Email",   type: "email" },
] as const;

export default function Contact() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form,   setForm]   = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    window.location.href = `mailto:${personalInfo.email}?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" ref={ref} className="overflow-hidden">

      {/* ── Dark CTA block ────────────────────────────────── */}
      <div className="bg-[#0A0A0A] border-t border-white/[0.07]">
        <div className="flex items-center justify-between px-[6vw] py-5 border-b border-white/[0.07]">
          <span className="text-white/25 text-[10px] uppercase tracking-[0.18em] font-semibold">Contact</span>
          <span className="text-white/20 text-[10px] font-mono">06</span>
        </div>

        <div className="px-[6vw] py-20 md:py-28 grid md:grid-cols-2 gap-14 md:gap-20 items-end">

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
              className="font-display text-white uppercase leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
            >
              Ready to build something that actually works?
            </motion.h2>
          </div>

          {/* CTA side */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.38, duration: 0.65 }}
            className="space-y-8"
          >
            <p className="text-white/42 text-lg leading-relaxed">
              Clear engineering, focused strategy — working together as one system.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-3 px-8 py-5 rounded-full bg-white text-[#0A0A0A] font-bold text-[11px] uppercase tracking-widest hover:bg-[#7fb069] transition-colors duration-300"
            >
              Let&apos;s talk
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>

            <div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-white/25 hover:text-white transition-colors text-sm"
              >
                {personalInfo.email}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Light form block ──────────────────────────────── */}
      <div className="bg-[#F0EDE6] px-[6vw] py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.32, duration: 0.65 }}
          className="max-w-2xl"
        >
          <div className="overflow-hidden mb-12">
            <motion.h3
              initial={{ y: "105%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.75, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
              className="font-display text-[#111111] uppercase leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Or send a message.
            </motion.h3>
          </div>

          <form onSubmit={onSubmit} className="space-y-10">
            {fields.map((f) => (
              <div key={f.id}>
                <label
                  htmlFor={f.id}
                  className="block text-[10px] font-bold text-[#111111]/35 uppercase tracking-[0.18em] mb-3"
                >
                  {f.label} *
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  value={form[f.id]}
                  onChange={onChange}
                  required
                  className="w-full border-b border-black/12 bg-transparent py-3 focus:outline-none focus:border-[#7fb069] text-[#111111] text-lg transition-colors duration-200 placeholder:text-[#111111]/20"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block text-[10px] font-bold text-[#111111]/35 uppercase tracking-[0.18em] mb-3"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                required
                className="w-full border-b border-black/12 bg-transparent py-3 focus:outline-none focus:border-[#7fb069] text-[#111111] text-lg transition-colors duration-200 resize-none placeholder:text-[#111111]/20"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className={[
                "flex items-center gap-3 px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all duration-300 disabled:opacity-60",
                status === "success"
                  ? "bg-[#7fb069] text-white"
                  : "bg-[#111111] text-white hover:bg-[#7fb069]",
              ].join(" ")}
            >
              {status === "success" ? (
                <CheckCircle2 size={15} />
              ) : (
                <Send size={15} />
              )}
              {status === "sending"
                ? "Opening client…"
                : status === "success"
                ? "Message ready"
                : "Send message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

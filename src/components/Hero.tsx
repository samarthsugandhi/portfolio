"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "Hackathon Winner 🏆",
    "Building AI Agents 🤖",
    "Full Stack Developer 💻",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0B0F19] overflow-hidden px-6">

      {/* Mouse Glow */}
      <div className="pointer-events-none absolute w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Background blobs */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Building systems,
            <span className="block bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
              not just websites.
            </span>
          </motion.h1>

          {/* Animated Role */}
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-indigo-400 font-medium"
          >
            {roles[index]}
          </motion.p>

          <motion.p className="mt-6 text-gray-400 max-w-xl">
            I design and develop AI-powered platforms and scalable web applications with real-world impact.
          </motion.p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-600 hover:border-indigo-400 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Badge */}
          <p className="mt-6 text-sm text-gray-500">
            🚧 Exploring AI Agents & Automation Systems
          </p>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center items-center"
        >
          <div className="w-[300px] h-[300px] bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-full blur-3xl opacity-40 animate-pulse" />

          <div className="absolute backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition">
            <p className="text-gray-300 text-sm">Full Stack Developer</p>
            <h2 className="text-white text-xl font-semibold mt-2">
              Samarth Sugandhi
            </h2>
            <p className="text-gray-400 text-xs mt-2">
              Hackathon Winner 🏆
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

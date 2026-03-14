"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const roles = ["Developer", "Learner", "E-commerce Expert", "AI Enthusiast"];

const badges = [
  { label: "IT Certified", color: "from-purple-500 to-purple-700" },
  { label: "Amazon FBA", color: "from-cyan-500 to-cyan-700" },
  { label: "Affiliate Marketing", color: "from-pink-500 to-pink-700" },
  { label: "Generative AI", color: "from-amber-500 to-orange-600" },
];

export default function Intro() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 90);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-24 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16"
      >
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            Available for Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-3"
          >
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Sadiq Khan
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6 h-8"
          >
            A Passionate{" "}
            <span className="text-cyan-400">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-8"
          >
            Certified in IT, Amazon FBA, and Affiliate Marketing. Currently exploring
            Generative AI. Building real-world projects with Next.js and React.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2 justify-center md:justify-start mb-10"
          >
            {badges.map((b) => (
              <span
                key={b.label}
                className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${b.color} shadow-lg`}
              >
                {b.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 border border-purple-500/50 text-purple-300 font-semibold rounded-full hover:bg-purple-500/10 transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div className="relative">
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1 animate-spin" style={{ animationDuration: "8s" }}>
              <div className="w-full h-full rounded-full bg-[#03030a]" />
            </div>
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl scale-110" />
            {/* Image */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-purple-500/40 ring-offset-4 ring-offset-[#03030a]">
              <Image
                src="/images/profile.jpg"
                alt="Sadiq Khan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs"
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-purple-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

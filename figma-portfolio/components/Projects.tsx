"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "GIAIC Student Card",
    desc: "A web-based student card application for viewing and managing student profiles with a clean UI.",
    tech: ["React", "TailwindCSS", "Next.js"],
    icon: "🪪",
    color: "from-purple-600 to-violet-700",
    glow: "shadow-purple-500/20",
    live: "https://giaic-student-card.vercel.app",
  },
  {
    title: "Countdown Timer",
    desc: "A functional countdown timer built with React & Next.js — perfect for events and deadlines.",
    tech: ["Next.js", "React", "TypeScript"],
    icon: "⏱️",
    color: "from-cyan-600 to-blue-700",
    glow: "shadow-cyan-500/20",
    live: "https://countdown-timer.vercel.app",
  },
  {
    title: "Weather Widget",
    desc: "Real-time weather data using an external API — displays temperature, humidity, and conditions.",
    tech: ["Next.js", "API", "Tailwind"],
    icon: "🌤️",
    color: "from-pink-600 to-rose-700",
    glow: "shadow-pink-500/20",
    live: "https://weather-widget.vercel.app",
  },
  {
    title: "Birthday Wish App",
    desc: "A fun, customizable birthday message creator with animated designs to spread joy.",
    tech: ["React", "Framer Motion", "CSS"],
    icon: "🎂",
    color: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/20",
    live: "https://birthday-wish-app.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-8 bg-[#080818] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-pink-400 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            What I&apos;ve Built
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            My Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 origin-left"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`group relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all shadow-xl ${project.glow}`}
            >
              {/* Top accent line */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 border border-white/15 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-semibold shadow-lg transition-shadow hover:shadow-xl`}
                >
                  <span>Live Demo</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

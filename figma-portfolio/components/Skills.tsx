"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "Amazon FBA Mastery",
    icon: "📦",
    level: 88,
    color: "from-cyan-500 to-blue-600",
    desc: "Product research, listing optimization, inventory management, and leveraging Amazon platform for e-commerce.",
    tags: ["Product Research", "Inventory", "Listing Optimization"],
  },
  {
    name: "IT & Office Applications",
    icon: "💻",
    level: 82,
    color: "from-purple-500 to-violet-700",
    desc: "Microsoft Office Suite, Google Workspace — professional documents, spreadsheets, and presentations.",
    tags: ["MS Office", "Google Workspace", "Productivity"],
  },
  {
    name: "Affiliate Marketing",
    icon: "📈",
    level: 75,
    color: "from-pink-500 to-rose-600",
    desc: "Content creation, SEO, and social media marketing across multiple affiliate platforms to maximize earnings.",
    tags: ["SEO", "Content Creation", "Social Media"],
  },
  {
    name: "Generative AI",
    icon: "🤖",
    level: 45,
    color: "from-amber-500 to-orange-600",
    desc: "Currently exploring prompt engineering, AI tools, and practical applications of Generative AI.",
    tags: ["Prompt Engineering", "AI Tools", "Learning"],
  },
  {
    name: "React & Next.js",
    icon: "⚛️",
    level: 60,
    color: "from-teal-500 to-cyan-600",
    desc: "Building modern web apps with React hooks, Next.js App Router, and TypeScript.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    level: 70,
    color: "from-indigo-500 to-purple-600",
    desc: "Crafting responsive, modern interfaces with utility-first CSS and custom design systems.",
    tags: ["Responsive Design", "UI/UX", "CSS"],
  },
];

function SkillBar({ level, color, inView }: { level: number; color: string; inView: boolean }) {
  return (
    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
      />
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-8 bg-[#03030a] overflow-hidden"
    >
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            What I Know
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            My Skills
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-purple-500 origin-left"
          />
        </div>

        {/* Skills Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-purple-500/40 transition-all group"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-xl shadow-lg`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">{skill.desc}</p>

              {/* Progress */}
              <div className="mb-2 flex justify-between text-xs text-gray-500">
                <span>Proficiency</span>
                <span className="text-gray-300 font-semibold">{skill.level}%</span>
              </div>
              <SkillBar level={skill.level} color={skill.color} inView={inView} />

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {skill.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full text-xs bg-white/5 border border-white/10 text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const educationData = [
  {
    degree: "Intermediate in Pre-Engineering",
    school: "Govt Degree Science College for Boys",
    year: "2019 – 2021",
    desc: "Focused on mathematics and physics, with active participation in science fairs and academic competitions.",
    icon: "🎓",
    color: "from-purple-600 to-indigo-600",
    border: "border-purple-500/30",
  },
  {
    degree: "Matric in Science Group",
    school: "Safia Memorial Children's Academy Secondary",
    year: "2015 – 2017",
    desc: "Achieved high marks in mathematics and computer science. Member of the coding club and participated in regional hackathons.",
    icon: "📚",
    color: "from-cyan-600 to-blue-600",
    border: "border-cyan-500/30",
  },
];

const certs = [
  { name: "IT for Office Applications", icon: "💻", color: "text-purple-400" },
  { name: "Amazon FBA Master", icon: "📦", color: "text-cyan-400" },
  { name: "Affiliate Marketing", icon: "📈", color: "text-pink-400" },
  { name: "Generative AI (Enrolled)", icon: "🤖", color: "text-amber-400" },
];

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3"
      >
        My Background
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold text-white"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 origin-left"
      />
    </div>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="relative py-24 px-4 sm:px-8 bg-[#080818] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle title="Education" />

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent origin-top"
          />

          {educationData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.25 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} ring-4 ring-[#080818] z-10`}
              />

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[45%] glass rounded-2xl p-6 border ${item.border} hover:border-purple-400/50 transition-colors group`}
              >
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-semibold mb-3`}
                >
                  <span>{item.icon}</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {item.degree}
                </h3>
                <p className="text-purple-400 text-sm font-medium mb-2">{item.school}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 glass rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            🏅 Certifications & Courses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certs.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-colors"
              >
                <span className="text-2xl">{c.icon}</span>
                <span className={`font-semibold text-sm ${c.color}`}>{c.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

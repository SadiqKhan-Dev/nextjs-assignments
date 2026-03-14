"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Entry Operator",
    company: "Edge Car Accessories",
    duration: "1 Year",
    desc: "Performed accurate data entry for inventory and sales records, ensuring data integrity and contributing to overall operational efficiency.",
    icon: "💼",
    color: "from-purple-600 to-violet-600",
    badge: "Full-time",
  },
  {
    role: "Security Guard",
    company: "BRT Green Line",
    duration: "3 Months",
    desc: "Monitored premises to ensure safety and security, assisted passengers, and collaborated with team members to maintain a secure environment.",
    icon: "🛡️",
    color: "from-cyan-600 to-blue-600",
    badge: "Contract",
  },
  {
    role: "Dropshipping Intern",
    company: "SYNERGY TIME",
    duration: "3 Months",
    desc: "Gained practical experience managing product listings, processing orders, and coordinating with suppliers to ensure timely delivery and customer satisfaction.",
    icon: "📦",
    color: "from-pink-600 to-rose-600",
    badge: "Internship",
  },
  {
    role: "Salesman",
    company: "AA Wholesale Stationery Store",
    duration: "2 Years",
    desc: "Delivered excellent customer service and sales at a busy wholesale stationery store. Developed skills in customer relations, inventory management, and upselling.",
    icon: "🏪",
    color: "from-amber-500 to-orange-600",
    badge: "Full-time",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-8 bg-[#03030a] overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            My Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            Work Experience
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 origin-left"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-purple-500/40 transition-all group"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-xl shadow-lg`}
                >
                  {exp.icon}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span
                    className={`px-3 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${exp.color}`}
                  >
                    {exp.badge}
                  </span>
                  <span className="text-gray-500 text-xs">{exp.duration}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                {exp.role}
              </h3>
              <p className="text-purple-400 text-sm font-medium mb-3">{exp.company}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>

              {/* Bottom line */}
              <div
                className={`mt-4 h-0.5 rounded-full bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: "📧", label: "Email", value: "sadiqkhan@example.com", color: "text-purple-400" },
  { icon: "📍", label: "Location", value: "Karachi, Pakistan", color: "text-cyan-400" },
  { icon: "🎓", label: "Status", value: "Open to Opportunities", color: "text-pink-400" },
];

export default function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-8 bg-[#080818] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />
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
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            Contact Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 origin-left"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">Let&apos;s talk!</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Have a project in mind, want to collaborate, or just want to say hi?
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl border border-white/10"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-gray-500 text-xs font-medium">{item.label}</p>
                    <p className={`font-semibold text-sm ${item.color}`}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              {[
                { icon: "🐙", label: "GitHub", href: "#" },
                { icon: "💼", label: "LinkedIn", href: "#" },
                { icon: "🐦", label: "Twitter", href: "#" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full glass border border-white/15 flex items-center justify-center text-lg hover:border-purple-500/50 transition-colors"
                  title={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Sadiq Khan"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:border-purple-500/60 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:border-purple-500/60 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message here..."
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:border-purple-500/60 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  sent
                    ? "bg-green-500/20 border border-green-500/40 text-green-400"
                    : "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                }`}
              >
                {sent ? "✅ Message Sent!" : "Send Message →"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

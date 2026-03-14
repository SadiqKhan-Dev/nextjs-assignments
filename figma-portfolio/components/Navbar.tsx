"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/75 backdrop-blur-2xl border-b border-purple-500/20 shadow-xl shadow-purple-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-purple-500/60 ring-offset-1 ring-offset-black">
              <Image src="/images/logo.png" alt="SK" fill className="object-cover" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Sadiq Khan
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                onClick={() => setActive(link.name)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors group ${
                  active === link.name
                    ? "text-purple-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${
                    active === link.name ? "w-4/5" : "w-0 group-hover:w-4/5"
                  }`}
                />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-shadow"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-t border-purple-500/20"
          >
            <div className="py-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => {
                    setActive(link.name);
                    setMenuOpen(false);
                  }}
                  className="block px-6 py-3 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-colors text-sm font-medium"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="px-6 pt-2 pb-4">
                <a
                  href="#contact"
                  className="block text-center px-5 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-semibold rounded-full"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import assets from "./assets";
import shethilresume from "./assets/Shethil Resume.pdf";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-slate-900/70 backdrop-blur-xl border-b border-white/10 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
           <img
            src={assets.profile}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
          />

            <div className="leading-none">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
                <span className="text-blue-500">Shethil</span>
                <span className="text-white">.</span>
              </h1>

              <p className="text-[11px] uppercase tracking-[4px] text-gray-400 mt-1">
                Android • React Developer
              </p>
            </div>
          </motion.a>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          {navLinks.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={item.href}
                className="hover:text-blue-400 transition-all duration-300"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Button */}
        <a
          href="assets/Shethil_Sarker_Pantha_CV.pdf"
          download
          className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
        >
          <FaDownload />
          Download CV
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-slate-900 border-t border-slate-700"
        >
          <ul className="flex flex-col items-center py-6 space-y-6">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-blue-400 text-lg transition"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <a
              href={shethilresume}
              download
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold transition"
            >
              <FaDownload />
              Download CV
            </a>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
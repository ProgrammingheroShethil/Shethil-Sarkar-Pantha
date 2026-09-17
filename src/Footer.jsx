import React from "react";
import { motion } from "framer-motion";
import assets from "./assets";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-5 items-center"
          >

            <img
              src={assets.profile}
              alt="Shethil"
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            />

            <div>

              <h2 className="text-3xl font-bold text-blue-400">
                Shethil Sarker Pantha
              </h2>

              <p className="text-gray-400 mt-3 leading-7">
                Android Developer & React Developer passionate about
                building modern, responsive and user-friendly
                applications.
              </p>

              <div className="flex gap-4 mt-5">

                <a
                  href="https://github.com/ProgrammingheroShethil"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl hover:text-blue-400 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/shethil-sarker-pantha-738539243/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl hover:text-blue-400 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.facebook.com/shethil.sarker.pantha"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl hover:text-blue-400 transition"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/shethilsarker/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="mailto:shethilsarkarpantha@gmail.com"
                  className="text-2xl hover:text-red-400 transition"
                >
                  <FaEnvelope />
                </a>

              </div>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:text-right"
          >

            <h3 className="text-2xl font-bold text-blue-400 mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-lg">

              <a
                href="#home"
                className="hover:text-blue-400 transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-blue-400 transition"
              >
                About
              </a>

              <a
                href="#skills"
                className="hover:text-blue-400 transition"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="hover:text-blue-400 transition"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="hover:text-blue-400 transition"
              >
                Contact
              </a>

            </div>

          </motion.div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

         <p className="text-gray-400 text-sm text-center">
  Made with ❤️ by <span className="text-blue-400 font-semibold">Shethil Sarker Pantha</span> © {new Date().getFullYear()}
</p>

          <a
            href="#home"
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg transition"
          >
            Back To Top ↑
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
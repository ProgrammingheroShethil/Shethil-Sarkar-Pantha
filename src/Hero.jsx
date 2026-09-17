import React from 'react'
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import assets from "./assets";
import shethilresume from "./assets/Shethil Resume.pdf";


function Hero() {
  return (
    <section
    id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Profile */}
        <motion.img
          src={assets.profile}
          alt="Profile"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mt-30 w-64 h-64 object-cover rounded-full border-4 border-blue-500 mx-auto shadow-2xl shadow-blue-500/50"
        />

 {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-bold mt-10"
        >
          Shethil Sarker Pantha
        </motion.h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "Android Developer",
            2000,
            "React Developer",
            2000,
            "Frontend Developer",
            2000,
            "Java Developer",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-3xl text-blue-400 font-semibold mt-5 block"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="max-w-2xl mx-auto mt-8 text-gray-300 text-lg leading-8"
        >
          Passionate Android Developer (Java Native) and React Developer,
          creating modern, responsive, and user-friendly applications with
          React.js, Tailwind CSS, JavaScript, and Android.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
          }}
          className="flex flex-wrap justify-center gap-5 mt-10"
        >
          <motion.a
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 30px #3b82f6",
            }}
            href={shethilresume}
            download
            className="bg-blue-600 px-8 py-4 rounded-xl font-semibold"
          >
            Download CV
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.08,
            }}
            href="#contact"
            className="border border-blue-500 px-8 py-4 rounded-xl font-semibold"
          >
            Hire Me
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-blue-400 text-3xl"
        >
          ↓
        </motion.a>
          </div>
    
    </section>
  )
}

export default Hero


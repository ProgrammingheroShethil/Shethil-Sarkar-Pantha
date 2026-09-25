import React from 'react'
import { motion } from "framer-motion";
import profile from "./assets/profile.png";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            Get To Know
          </p>

          <h2 className="text-5xl font-bold mt-3">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={profile}
              alt="Profile"
              className="w-80 rounded-3xl border-4 border-blue-500"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              I'm Shethil Sarker Pantha 👋
            </h3>

            <p className="text-gray-300 leading-8 text-lg text-justify">
              I am a passionate <span className="text-blue-400">Software Developer</span> and <span className="text-blue-400">Android App Developer</span>
              and <span className="text-blue-400">Frontend Web Developer </span>
                from Bangladesh. I specialize in building modern Android
              applications using Java Native and creating responsive,
              user-friendly web applications with React.js, Tailwind CSS,
              JavaScript, HTML, and CSS.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-6 text-justify">
              I enjoy solving real-world problems through technology and always
              strive to write clean, efficient, and maintainable code. I am
              continuously learning new technologies to improve my skills and
              become a professional Software Engineer.
            </p>

            {/* Information */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-slate-800 rounded-xl p-5">
                <h4 className="text-blue-400 font-semibold">Name</h4>
                <p>Shethil Sarker Pantha</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5">
                <h4 className="text-blue-400 font-semibold">Location</h4>
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5">
                <h4 className="text-blue-400 font-semibold">Education</h4>
                <p>Diploma in Computer Science & Technology</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-5">
                <h4 className="text-blue-400 font-semibold">Experience</h4>
                <p>Android & React Development</p>
              </div>

            </div>

            <a
              href="/cv.pdf"
              download
              className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-xl font-semibold"
            >
              Download CV
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
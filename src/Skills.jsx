import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaAndroid,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

const skills = [
  {
    icon: <FaReact />,
    name: "React.js",
    level: 90,
    color: "bg-cyan-500",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    level: 88,
    color: "bg-yellow-400",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    level: 92,
    color: "bg-sky-500",
  },
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    level: 95,
    color: "bg-orange-500",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    level: 92,
    color: "bg-blue-500",
  },
  {
    icon: <FaJava />,
    name: "Java",
    level: 90,
    color: "bg-red-500",
  },
  {
    icon: <FaAndroid />,
    name: "Android",
    level: 88,
    color: "bg-green-500",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    level: 80,
    color: "bg-amber-500",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    level: 85,
    color: "bg-orange-600",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    level: 90,
    color: "bg-gray-500",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            My Expertise
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Skills
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies I use to build modern applications.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-5">

                <div className="flex items-center gap-4">

                  <div className="text-4xl text-blue-400">
                    {skill.icon}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {skill.name}
                  </h3>

                </div>

                <span className="font-bold text-blue-400">
                  {skill.level}%
                </span>

              </div>

              {/* Progress */}

              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                  className={`${skill.color} h-3 rounded-full`}
                />

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
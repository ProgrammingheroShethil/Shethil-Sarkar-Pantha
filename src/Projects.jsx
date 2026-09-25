import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { projects } from "./data/projects";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* =========================
            Section Header
        ========================== */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest">
            My Work
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects built with modern
            technologies and development practices.
          </p>
        </div>

        {/* =========================
            Projects Grid
        ========================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
                rounded-2xl
                overflow-hidden
                bg-slate-800
                border
                border-slate-700
                hover:border-blue-500
                shadow-xl
                transition-all
                duration-300
              "
            >

              {/* =========================
                  Project Image
              ========================== */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-56
                    object-cover
                    hover:scale-110
                    transition
                    duration-500
                  "
                />
              </div>

              {/* =========================
                  Project Content
              ========================== */}
              <div className="p-6">

                {/* Project Title */}
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 mt-3 leading-7">
                  {project.description}
                </p>

                {/* =========================
                    Technologies
                ========================== */}
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((item, techIndex) => (
                      <span
                        key={`${item}-${techIndex}`}
                        className="
                          bg-blue-600
                          px-3
                          py-1
                          rounded-full
                          text-sm
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {/* =========================
                    Buttons
                ========================== */}
                <div className="flex flex-wrap gap-3 mt-6">

                  {/* GitHub Button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        bg-slate-700
                        px-4
                        py-2
                        rounded-lg
                        hover:bg-blue-600
                        transition
                      "
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {/* Live Demo Button */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        bg-blue-600
                        px-4
                        py-2
                        rounded-lg
                        hover:bg-blue-700
                        transition
                      "
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  )}

                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* =========================
            Load More / Show Less
        ========================== */}
        {projects.length > 6 && (
          <div className="flex justify-center mt-14">

            {/* Load More */}
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="
                  flex
                  items-center
                  gap-3
                  bg-blue-600
                  hover:bg-blue-700
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                  hover:scale-105
                "
              >
                Load More Projects
                <FaChevronDown />
              </button>
            ) : (

              /* Show Less */
              <button
                onClick={() => setShowAll(false)}
                className="
                  flex
                  items-center
                  gap-3
                  bg-red-600
                  hover:bg-red-700
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                  hover:scale-105
                "
              >
                Show Less
                <FaChevronUp />
              </button>
            )}

          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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

        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest">
            My Work
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {visibleProjects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500 shadow-xl"
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="flex justify-center mt-14">

          {!showAll ? (

            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition hover:scale-105"
            >
              Load More Projects
            </button>

          ) : (

            <button
              onClick={() => setShowAll(false)}
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition hover:scale-105"
            >
              Show Less
            </button>

          )}

        </div>

      </div>
    </section>
  );
}

export default Projects;
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import under_construction from "../public/under_construction.png";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="top-10 md:top-10 w-full h-full flex flex-row overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div className="w-full h-11/12 flex-shrink-0 snap-center flex flex-col md:flex-col space-y-5 items-center justify-center md:p-44">
            <a
              href={project.linkToBuild}
              className="relative top-20 sm:top-0 w-3/4 md:w-1/2 md:h-screen object-cover"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project.image).url()}
                alt="project under construction"
              />
            </a>
            <div className="relative top-28 md:top-0 space-y-5 px-0 md:px-10 max-w-6xl md:max-h-screen w-full h-1/2">
              <h4 className="text-xl md:text-2xl font-semibold text-center">
                <a href={project.linkToBuild}>
                  <span className="underline decoration-[#F7AB0A]">
                    Project {i + 1} of {projects.length}:
                  </span>{" "}
                  {project?.title}
                </a>
              </h4>
              <div className="h-1/2 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 md:overflow-y-hidden md:h-full">
                <p className="md:text-lg text-center md:text-left">
                  {project?.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;

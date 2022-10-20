import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};
function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer md:p-2">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        alt="skills"
        className="border border-gray-500 custom-img object-cover filter group-hover:grayscale md:w-24 md:h-24
        transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white group-hover:w-16 group-hover:h-16  sm:group-hover:w-16 sm:group-hover:h-16 md:w-24 md:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl sm:text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

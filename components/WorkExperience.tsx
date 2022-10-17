import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience as ExperienceType } from "../typings";

type Props = {
  experiences: ExperienceType[];
};

function WorkExperience({ experiences }: Props) {
  const sortedArr = experiences.sort((a, b) => a.orderNo - b.orderNo);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-16 uppercase tracking-[12px] md:tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-4/5 md:w-full h-4/5 flex space-x-5 p-10 snap-x snap-mandatory overflow-x-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {sortedArr?.map((experience) => (
          <ExperienceCard key={experience.orderNo} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;

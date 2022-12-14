import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen w-full flex relative flex-col text-center md:text-left xl:flex-row
     max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 md:top-24 md:text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-20 pt-5 sm:top-24 uppercase tracking-[3px] text-gray-500 md:top-32 text-xs sm:text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="custom-group gap-2">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;

import React, { Component } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

type State = {};

export default class Experience extends Component<Props, State> {
  state = {};

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>

        <div className="w-full h-4/5 flex space-x-5 p-10 snap-x snap-mandatory overflow-x-auto">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          {/* ExperienceCard */}
          {/* ExperienceCard */}
          {/* ExperienceCard */}
        </div>
      </motion.div>
    );
  }
}
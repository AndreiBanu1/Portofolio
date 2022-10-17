/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
     snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-16 h-16 flex-none md:w-32 md:h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="companyImage"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-sm text-center md:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="text-sm text-center font-bold md:text-2xl md:mt-1">
          {experience.company}
        </p>
        <div className="grid grid-cols-3 place-items-center md:flex md:space-x-2 md:my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-5 w-5 md:h-10 md:w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt="technology"
            />
          ))}
        </div>
        <p className="uppercase text-sm md:py-5 md:text-base text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="text-sm list-disc space-y-4 ml-5 md:text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

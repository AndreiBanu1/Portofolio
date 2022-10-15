import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

type State = {};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md-text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 text-center items-center justify-center uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt="my picture"
        className="h-24 w-24 mt-12 sm:h-48 sm:w-48 md:h-64 md:w-64 -mb-20 md:mb-0 flex-shrink-0 object-cover xl:w-[400px] xl:h-[400px] rounded-full"
      />

      <div className="space-y-4 py-4 px-0 md:px-10">
        <h4 className="mb-6 text-m md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-left overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 h-[150px] sm:text-center text-base justify-self-left tracking-wide whitespace-pre-line leading-6">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

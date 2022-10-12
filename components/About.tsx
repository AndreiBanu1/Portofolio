import React, { Component } from "react";
import { motion } from "framer-motion";
import pic from "../public/pic.png";

type Props = {};

type State = {};

export default class About extends Component<Props, State> {
  state = {};

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md-text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>

        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          src={pic.src}
          alt="my picture"
          className="h-48 w-48 -mb-20 md:mb-0 flex-shrink-0 object-cover md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]">little</span>{" "}
            background
          </h4>
          <p className="text-base justify-self-auto tracking-wide whitespace-pre-line leading-6">
            Hi, I am Andrei ! Nice to meet you! I am an engineer following my
            passion for building cool things, especially in tech industry. My
            job as a QA Software Engineer is to plan and design test cases, find
            bugs, brainstorm ideas and come up with fixing for the issues. I am
            interesed in technology, especially software development,
            innovations, self improving and sports. Something I love about
            software development and testing is the challenging puzzles that I
            have to solve everyday. Also, while doing that, I have the
            opportunity to work with people from a wide range of disciplines and
            it is a great feeling to come together with other professionals who
            are striving towards the same goal. In my spare time, besides
            coding, I like to read and listen to audiobooks and podcasts about
            technology, self development and personal finances. You can usually
            find me up until late at night, reading about every detail in a
            system on how it was done.
          </p>
        </div>
      </motion.div>
    );
  }
}

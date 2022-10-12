/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import kyndryl from "../public/kyndryl.jpeg";
import selenium from "../public/selenium.png";
import azure from "../public/azure.png";
import db2 from "../public/db2.png";
import javascript from "../public/javascript.png";
import postman from "../public/postman.jpeg";
import sql from "../public/sql.png";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
     snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-y-auto"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex-none w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={kyndryl.src}
        alt="kyndryl"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">QA Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">kyndryl</p>
        <div className="flex space-x-2 my-2">
          {/* Tech Used */}
          <img
            className="h-10 w-10 rounded-full"
            src={azure.src}
            alt="Microsoft Azure"
          />
          <img className="h-10 w-10 rounded-full" src={db2.src} alt="IBM DB2" />
          <img
            className="h-10 w-10 rounded-full"
            src={javascript.src}
            alt="JavaScript"
          />
          <img
            className="h-10 w-10 rounded-full"
            src={postman.src}
            alt="Postman"
          />
          <img
            className="h-10 w-10 rounded-full"
            src={selenium.src}
            alt="Selenium"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended ...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>

          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>

          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

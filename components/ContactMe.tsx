import React from "react";
import { motion } from "framer-motion";
import {
  DevicePhoneMobileIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { getPageStaticInfo } from "next/dist/build/analysis/get-page-static-info";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto: andreibanu97@yahoo.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Let`s work{" "}
          <span className="underline decoration-[#F7AB0A]">together</span>{" "}
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 ">
            <DevicePhoneMobileIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">WhatsApp: +40720421884</p>
          </div>

          <div className="flex items-center space-x-5 ">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">andreibanu97@yahoo.com</p>
          </div>

          <div className="flex items-center space-x-5 ">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Bucharest, Romania</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                className="contactInput"
                placeholder="Name"
                type="text"
              />
              <input
                {...register("email")}
                className="contactInput"
                placeholder="Email"
                type="email"
              />
            </div>

            <input
              {...register("subject")}
              className="contactInput"
              placeholder="Subject"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe;

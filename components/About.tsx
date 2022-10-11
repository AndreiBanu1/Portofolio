import React, { Component } from "react";
import { motion } from "framer-motion";

type Props = {};

type State = {};

export default class About extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="flex flex-col relative h-screen text-center amd-text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
        </h3>

        <motion.img src="" />
      </div>
    );
  }
}

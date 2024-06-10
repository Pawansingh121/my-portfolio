import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className=" w-full py-20 rounded-tr-3xl rounded-tl-3xl rounded- bg-[#074840] text-white"
    >
      <div className="text border-t-2  border-b-2 border-zinc-300 flex whitespace-nowrap  overflow-hidden ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[12vw] leading-none font-bold uppercase pt-10 pr-20"
        >
          Innovative Web Solutions
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[12vw] leading-none font-bold uppercase pt-10 pr-20"
        >
          Innovative Web Solutions
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;

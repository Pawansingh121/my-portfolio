import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-400">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Pawan Singh
        </h1>
        <h2 className="text-4xl pt-2 md:pt-5 md:animate-bounce sm:text-7xl font-bold text-[#8892b0] ">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[600px] ">
          I'm a FRONTEND DEVELOPER living in INDIA. I love to make web
          applications.Enjoying the path of learning.......
        </p>

        <div className="mt-10 flex justify-start gap-3">
          <a
            href="https://www.linkedin.com/in/pawan-airy-b73228213/"
            target="_blank"
          >
            <FaLinkedin className="w-8 h-8 rounded-xl bg-gray-300 hover:bg-yellow-400" />
          </a>
          <a href="https://twitter.com/PawanAiry11" target="_blank">
            {" "}
            <FaTwitterSquare className="bg-gray-300 rounded-xl w-8 h-8 hover:bg-yellow-400" />
          </a>
          <a href="https://github.com/Pawansingh121" target="_blank">
            <FaGithub className="w-8 h-8 rounded-xl bg-gray-300 hover:bg-yellow-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

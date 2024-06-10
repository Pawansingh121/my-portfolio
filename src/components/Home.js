import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import me from "../assets/me.png";
const Home = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      name="home"
      className="w-full h-screen bg-[#f1f1f1] "
    >
      <div className="px-8   flex flex-col md:flex-row md:justify-evenly items-center  h-full">
        <div className="pt-24">
          <p className="text-blue-600 font-medium">Hi, my name is </p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#212121] ">
            Pawan Singh
          </h1>
          <h2 className="text-4xl pt-2 md:pt-5 md:animate-bounce sm:text-7xl font-bold text-[#212121] ">
            I'm a Frontend Developer.
          </h2>
          <p className=" py-4 max-w-[600px] text-[#777777] font-medium ">
            Innovative frontend solutions for modern web experiences.
          </p>

          <div className="mt-10 flex justify-start gap-3">
            <a href="https://twitter.com/PawanAiry11" target="_blank">
              {" "}
              <AiFillTwitterCircle
                size={40}
                className="hover:bg-gray-300 p-1 transition-all"
              />
            </a>
            <a href="https://github.com/Pawansingh121" target="_blank">
              <AiFillGithub
                size={40}
                className="p-1 transition-all hover:bg-gray-300"
              />
            </a>
          </div>
        </div>
        <div className=" mt-6 w-[300px] h-[350px] md:w-[320px] md:h-[400px] lg:w-[350px] lg:h-[450px] bg-[#2c2b29] rounded-xl ">
          <img
            className="w-[300px] h-[320px] md:w-auto md:h-auto object-cover"
            src={me}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

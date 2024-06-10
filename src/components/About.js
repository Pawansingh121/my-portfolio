import React, { useEffect } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import tc from "../assets/tailwind.png";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="3000"
      name="about"
      className="w-full h-screen rounded-tr-3xl rounded-tl-3xl bg-[#f1f1f1] "
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[#1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi, I'm Pawan, nice to meet you. Please Take a look around.</p>
          </div>
          <div>
            <p className="font-medium">
              {" "}
              I am innovative and hardworking front-end developer. Proficient in
              HTML, CSS , JAVASCRIPT and REACT JS. I am passionate about
              building execellent websites & web applications that improves the
              lives of those around me.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center pt-8 gap-4">
          <p className="font-bold">Tech Stack -</p>
          <img className="w-7 h-7" src={html} alt="" />
          <img className="w-7 h-7" src={css} alt="" />
          <img className="w-7 h-7" src={js} alt="" />
          <img className="w-7 h-7" src={react} alt="" />
          <img className="w-7 h-7" src={redux} alt="" />
          <img className="w-7 h-7" src={tc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

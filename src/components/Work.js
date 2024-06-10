import React, { useEffect } from "react";

import { BsGithub } from "react-icons/bs";
import { projectlist } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      name="work"
      className="w-full min-h-screen bg-[#f1f1f1] max-h-full  pt-36"
    >
      <div className=" flex flex-col items-center  ">
        <h1 className="font-bold text-lg text-blue-600">PORTFOLIO</h1>
        <p className="text-2xl font-bold pt-4 text-center">
          Each project is a unique piece of development 🧩
        </p>
      </div>
      {projectlist.map((elm) => {
        return (
          <div
            key={elm.id}
            className="w-full h-full  flex items-center justify-center  mt-8 pb-8 "
          >
            <div className="w-[990px] h-auto bg-[#f1f1f1] rounded-3xl flex flex-col md:flex-row items-center justify-around pt-6 pb-6">
              <div
                style={{ backgroundImage: `url(${elm.img})` }}
                className="w-[350px] h-[300px] md:w-[530px] md:h-[350px] cursor-pointer  shadow-lg shadow-gray-500 bg-black transition-all ease-linear duration-[4000ms]  bg-no-repeat bg-cover bg-top hover:bg-bottom rounded-3xl"
              ></div>
              <div className="flex flex-col items-center pt-10 md:pt-0">
                <h2 className="font-bold text-xl">{elm.title}</h2>
                <p className="text-[#767676] w-[300px] pt-4 text-lg text-center">
                  {elm.des}
                </p>
                <div className="flex gap-14 justify-center pt-6">
                  <a
                    className="text-white bg-[#212121]  px-4 py-3 rounded-lg hover:scale-95 hover:bg-black my-8 mx-auto flex items-center  transition-all "
                    href={elm.demoUrl}
                    target="_blank"
                  >
                    <p>Live Demo</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;

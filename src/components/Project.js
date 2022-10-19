import React from "react";

const Project = ({ IMAGE, demo, code, projectName }) => {
  return (
    <>
      <div className="w-full h-full pl-4 mt-16   ">
        <div>
          <h1 className=" text-[14px] italic text-white">{projectName}</h1>
          <img
            className="w-[400px] h-[200px]  object-contain pr-4 "
            src={IMAGE}
            alt=""
          />

          <div className="pt-3 pl-20 ">
            <a
              className=" text-xl underline font-semibold text-blue-500  hover:underline hover:text-yellow-400 hover:transition-all duration-1000"
              href={demo}
              target="_blank"
            >
              Demo
            </a>
            <a
              className=" p-2 ml-10 text-xl underline font-semibold text-blue-500 hover:underline hover:text-yellow-400 hover:transition-all duration-1000"
              href={code}
              target="_blank"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

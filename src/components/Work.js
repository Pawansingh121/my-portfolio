import React from "react";
import Project from "./Project";
import Aesthetic from "../assets/aesthetic.webp";
import Gym from "../assets/gym.webp";
import Netflix from "../assets/netclone.png";
import fc from "../assets/fc.png";
import na from "../assets/na.png";
import td from "../assets/td.png";

import prada from "../assets/prada.webp";
import Linkedin from "../assets/linkedin.webp";
const Work = () => {
  return (
    <>
      <div
        name="work"
        className="w-full h-auto bg-[#0a192f] text-gray-300 pt-32 "
      >
        <div className="pl-4 sm:pl-[275px] ">
          <p className="text-4xl  font-bold inline border-b-4 border-yellow-400">
            Work
          </p>
          <p className="py-4">// These are my projects...</p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-3 lg:px-40 md:gap-2 md:pr-[20px]
        "
        >
          <Project
            IMAGE={na}
            demo="https://nike-app-six.vercel.app/"
            code="https://github.com/Pawansingh121/NikeApp"
            projectName="*Add to Cart"
          />
          <Project
            IMAGE={td}
            demo="https://trailer-dekho-r.vercel.app/"
            code="https://github.com/Pawansingh121/TrailerDekho"
            projectName="*TrailerDekho"
          />
          <Project
            IMAGE={fc}
            demo="https://fb-clone-tawny.vercel.app/"
            code="https://github.com/Pawansingh121/fb-clone"
            projectName="*FB Clone"
          />
          <Project
            IMAGE={Aesthetic}
            demo="https://aesthetic-design.vercel.app/"
            code="https://github.com/Pawansingh121/aesthetic-design"
            projectName="*Aesthetic Design"
          />
          <Project
            IMAGE={prada}
            demo="https://prada-clone.vercel.app/"
            code="https://github.com/Pawansingh121/Prada-clone"
            projectName="*Prada Clone"
          />
          <Project
            IMAGE={Linkedin}
            demo="https://linkedin-clone-seven-ebon.vercel.app/"
            code="https://github.com/Pawansingh121/linkedin-clone"
            projectName="*Linkedin Clone"
          />

          <Project
            IMAGE={Gym}
            demo="https://exercisehub1.netlify.app/"
            code="https://github.com/Pawansingh121/exercise-hub"
            projectName="*Exercise Hub"
          />
          <Project
            IMAGE={Netflix}
            demo=" https://netflix-clone-design.netlify.app/"
            code="https://github.com/Pawansingh121/netflix-design"
            projectName="*Netflix Clone"
          />
        </div>
      </div>
    </>
  );
};

export default Work;

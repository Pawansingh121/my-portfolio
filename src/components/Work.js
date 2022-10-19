import React from "react";
import Project from "./Project";
import Aesthetic from "../assets/aesthetic.webp";
import Gym from "../assets/gym.webp";
import Netflix from "../assets/netclone.png";
import Weather from "../assets/weather.webp";
import Social from "../assets/social.webp";
import Prada from "../assets/prada.webp";
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
            IMAGE={Aesthetic}
            demo="https://aesthetic-design.vercel.app/"
            code="https://github.com/Pawansingh121/aesthetic-design"
            projectName="*Aesthetic Web Design"
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
          <Project
            IMAGE={Weather}
            demo="https://weather-app-one-chi-35.vercel.app/"
            code="https://github.com/Pawansingh121/weather-app"
            projectName="*Simple Weather App"
          />
          <Project
            IMAGE={Prada}
            demo="https://prada-clone.vercel.app/"
            code="https://github.com/Pawansingh121/Prada-clone"
            projectName="*Prada clone "
          />
          <Project
            IMAGE={Social}
            demo=" https://socialairy.netlify.app"
            code="https://github.com/Pawansingh121/scoial-media-design"
            projectName="*Simple Social media design"
          />
        </div>
      </div>
    </>
  );
};

export default Work;

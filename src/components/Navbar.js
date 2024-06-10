import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logom.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-full bg-[#f1f1f1]  h-[80px] flex justify-between items-center px-4 fixed z-[2] ">
      <div className="pl-4 text-yellow-600">
        <Link to="home" offset={-500} smooth={true} duration={500}>
          <img className="w-[50px] cursor-pointer" src={Logo} alt="" />
        </Link>
      </div>

      <ul className="hidden md:flex text-[#888888]">
        <li className="hover:text-black">
          <Link to="home" offset={-500} smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className="hover:text-black">
          <Link to="about" offset={-100} smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className="hover:text-black">
          <Link to="work" smooth={true} duration={500}>
            PROJECT
          </Link>
        </li>
        <li className="hover:text-black">
          <Link to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10 pr-6 ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute  top-0 left-0 w-full h-screen bg-[#f1f1f1] flex flex-col justify-center items-center animate-mobNav md:hidden text-[#888888]"
        }
      >
        <li className="py-6 text-3xl">
          <Link
            onClick={handleClick}
            to="home"
            offset={-500}
            smooth={true}
            duration={500}
          >
            HOME
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link
            onClick={handleClick}
            to="about"
            offset={-100}
            smooth={true}
            duration={500}
          >
            ABOUT
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            PROJECT
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

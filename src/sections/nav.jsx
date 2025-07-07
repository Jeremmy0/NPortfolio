"use client"
import { Fasthand } from "next/font/google";
// import { FaLock, FaShieldAlt, FaFileLines, FaBolt,FaMoneyBill, FaStar, FaShield , FaHome, FaSearch, FaStickyNote, FaArrowRight, FaBriefcase, FaLightbulb, FaUser} from "react-icons/fa"
import NavLink from "../components/navLink";
import Cta from "../components/cta";
import { useState } from "react";


const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <div className="  w-full  text-[var(--foreground)] z-50  top-4 sticky   ">
        <div className=" px-3  bg-white/5 backdrop-blur-sm border-1 border-gray-400/10  rounded-xl  flex justify-self-center  justify-center  items-center  md:ps-2 md:py-2 " >
            <NavLink text={"Home"} faIconName="FaHome" href={"/"}/>
          {/* this is the divider */}
          <div className="w-[1px] h-[5vh] rounded-full dark:bg[var(--foreground)]/40 bg-[var(--foreground)]/40 mx-6 hidden md:flex" ></div>
          {/* nav links */}
          <div className=" gap-2 text-baseline hidden md:flex ">
              <NavLink text={"About"} faIconName="FaUser" href={"#about"}/>
              <NavLink text={"Resume"} faIconName="FaStickyNote" href={"#resume"}/>
              <NavLink text={"Experience"} faIconName="FaBriefcase" href={"#experience"}/>
              <NavLink text={"My Works"} faIconName="FaLightbulb" href={"#personalWork"}/>

          </div>
          
          {/* this is the divider */}
          <div className="w-[1px] h-[5vh] rounded-full dark:bg[var(--foreground)]/40 bg-[var(--foreground)]/40  mx-6 hidden md:flex"></div>

          <Cta text={"Book a Call"} className="hidden md:flex" IconName={"FaTelephone" }/>

          {/* Hamburger  */}
          <div className="md:hidden">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className="relative w-10 h-10 flex flex-col items-center justify-center group focus:outline-none"
            >
              {/* Hamburger lines */}
              <span
                className={`block h-0.5 w-7 bg-[var(--foreground)] rounded transition-all duration-300 ease-in-out
                  ${open ? "rotate-45 translate-y-2" : ""}
                `}
              />
              <span
                className={`block h-0.5 w-7 bg-[var(--foreground)] rounded transition-all duration-300 ease-in-out my-1
                  ${open ? "opacity-0" : ""}
                `}
              />
              <span
                className={`block h-0.5 w-7 bg-[var(--foreground)] rounded transition-all duration-300 ease-in-out
                  ${open ? "-rotate-45 -translate-y-2" : ""}
                `}
              />
            </button>
            {/* Example: Mobile menu (optional, for demonstration) */}
            {open && (
              <div className="absolute top-16 right-4 bg-white dark:bg-black rounded-xl shadow-lg p-6 z-50 flex flex-col gap-4 w-48">
                <NavLink text={"About"} faIconName="FaUser" href={"#about"} />
                <NavLink text={"Resume"} faIconName="FaStickyNote" href={"#resume"} />
                <NavLink text={"Experience"} faIconName="FaBriefcase" href={"#experience"} />
                <NavLink text={"My Works"} faIconName="FaLightbulb" href={"#personalWork"} />
                <Cta text={"Book a Call"} className="" IconName={"FaTelephone"} />
              </div>
            )}
          </div> 
        </div>
      </div>
     

      {/* Simplefolio-style nav */}
      {/* <nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent fixed top-0 left-0 z-50">
        <div className="text-xl font-bold text-white tracking-tight">jeremmy0</div>
        <ul className="flex gap-8 text-white/80 font-medium text-base">
          <li className="hover:text-green-400 transition"><a href="#about">About</a></li>
          <li className="hover:text-green-400 transition"><a href="#projects">Projects</a></li>
          <li className="hover:text-green-400 transition"><a href="#experience">Experience</a></li>
          <li className="hover:text-green-400 transition"><a href="#contact">Contact</a></li>
        </ul>
        <a
          href="#contact"
          className="border border-green-400 text-green-400 px-5 py-2 rounded-full font-semibold hover:bg-green-400 hover:text-white transition"
        >
          Hire Me
        </a>
      </nav> */}
    </>
  );
}

export default Nav;
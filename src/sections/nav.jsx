"use client"
import { Fasthand } from "next/font/google";
// import { FaLock, FaShieldAlt, FaFileLines, FaBolt,FaMoneyBill, FaStar, FaShield , FaHome, FaSearch, FaStickyNote, FaArrowRight, FaBriefcase, FaLightbulb, FaUser} from "react-icons/fa"
import NavLink from "../components/navLink";
import Cta from "../components/cta";


const Nav = () => {
  return (
    <>
      
      <div className="container  justify-self-center   py-3 top-0 sticky  -mb-5 text-[var(--foreground)] ">
        <div className=" px-3 md:justify-self-center md:min-w-[70%] md:max-w-[80%] lg:min-w-[45%] lg:max-w-[50%] bg-white/5 backdrop-blur-sm border-1 border-gray-400/10 md:ps-2 md:py-2  rounded-xl  flex  justify-between  items-center   z-100 " >
            <NavLink text={"Home"} faIconName="FaHome" href={"/"}/>
          {/* this is the divider */}
          <div className="w-[1px] h-[5vh] rounded-full dark:bg[var(--foreground)]/40 bg-[var(--foreground)]/40 hidden md:flex"></div>
          {/* nav links */}
          <div className="md:flex gap-2 text-baseline hidden  me-2 ">
              <NavLink text={"About"} faIconName="FaUser" href={"#about"}/>
              <NavLink text={"Resume"} faIconName="FaStickyNote" href={"#resume"}/>
              <NavLink text={"Experience"} faIconName="FaBriefcase" href={"#experience"}/>
              <NavLink text={"My Works"} faIconName="FaLightbulb" href={"#personalWork"}/>

          </div>
          
          {/* this is the divider */}
          <div className="w-[1px] h-[5vh] rounded-full dark:bg[var(--foreground)]/40 bg-[var(--foreground)]/40  hidden md:flex"></div>

          <Cta text={"Contact me"} className=""/>

          {/* Hamburger */}
          <div className="md:hidden "></div>
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
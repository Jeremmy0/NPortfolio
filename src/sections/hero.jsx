
"use client";
import React, { useEffect, useState } from 'react';
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaMoon, FaSun } from "react-icons/fa";
import Cta from "../components/cta";
import Tag from "../components/tag";
import DashedCenter from '../components/dashedCenter';
import Link from  "next/link"

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(document.documentElement.classList.contains("dark") || prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  };

  
  return (
    <section id={""}>
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 z-50 p-2 rounded-full text-white bg-[var(--foreground)] border border-[var(--foreground)]/30 dark:bg-[var(--foreground)] dark:text-black shadow transition"
        aria-label="Toggle dark mode"
      >
        {isDark ? <FaSun/> : <FaMoon/>}
      </button>
      <div className="w-full  " >
        <div className="container relative pt-38 md:pt-20 lg:pt-28 pb-7">
            <div className="justify-self-center w-full md:w-[80%]   place-items-center ">
              <div className="">
                <img className="" src="/images/memoji-computer.png " width={200}  alt="A memeoji with computer " />
              </div>
              <div className="items-center ">
                <h1 className="h-text py-4 text-center   header-text font-bold"> Hello, I'm Ayoola Jeremiah </h1>
                <p className="text-[var(--foreground)]/70 dark:text-[var(--foreground)]/70 pb-3   text-center font-work">I specialize in transforming designs into functional, high-performance , scalable websites and web applications. Minimalist by design. Precise by nature. Built to convert, crafted to impress</p>
              </div>
              <div className="flex flex-col md:flex-row gap-3 mt-3 justify-center  ">
                <Link className="place-self-center" href={"/AyoolaJ_Resume.pdf"}  download="AyoolaJeremiahResume.pdf"> 
                  <Cta text={"Download Resume"} className=" shimmer"   variant={"primary"}/>
                </Link>
                <div className="">
                  <Tag text={"Available For New Projects "} />
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
  };

export default Hero;
  
  
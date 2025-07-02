"use client";
import React, { useEffect, useState } from 'react';
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaMoon, FaSun, FaPowerOn, FaPowerOff} from "react-icons/fa";
import Cta from "../components/cta";
import Tag from "../components/tag";
import DashedCenter from '../components/dashedCenter';

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(null);
  const [isDark, setIsDark] = useState(false);

  // Set initial dark mode based on system preference
  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(document.documentElement.classList.contains("dark") || prefersDark);
      // Set the class on first load
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    return () => clearInterval(timer);
  }, []);

  const toggleDarkMode = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  };

  // Don't render the time until after mount (avoids hydration mismatch)
  const hour = currentTime ? currentTime.getHours().toString().padStart(2, "0") : "--";
  const minute = currentTime ? currentTime.getMinutes().toString().padStart(2, "0") : "--";
  const second = currentTime ? currentTime.getSeconds().toString().padStart(2, "0") : "--";

  return (
    <div>
            {/* Toggle Dark Mode Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 z-50 p-2 rounded-full text-white bg-[var(--foreground)] border border-[var(--foreground)]/30 dark:bg-[var(--foreground)] dark:text-black shadow transition"
        aria-label="Toggle dark mode"
      >
        {isDark ? <FaSun/> : <FaMoon/>}
      </button>
      <div className="w-full bt z-10">
        <div className="container relative bx overflow-visible">
          <div className="size-3 bg-[var(--foreground)] dark:bg-[var(--foreground)] rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 "></div>
          <div className="size-3 bg-[var(--foreground)] dark:bg-[var(--foreground)] rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 "></div>
          {/* this creates the dashed divider in the center  */}
          <DashedCenter />
          <div className="pt-34 pb-7 z-10 ">
            <div className="md:justify-self-center w-[80%] px-6   place-items-center ">
              <div className="inline-flex p-3 rounded-full border-  border-[0.5px] border-[var(--foreground)]/30 dark:border-[var(--foreground)]/30 mb-2">
              <div className="size-34 rounded-full overflow-hidden ">
                <img className="object-top -mt-13  " src="/IMG-20231127-WA0052.jpg" alt="Ayoola Jeremiah" />

                </div>
              </div>
              <div className="items-center ">
                <h1 className="text-6xl font-light py-4 text-center"> Hey, I'm Ayoola Jeremiah </h1>
                {/* <h1 className="text-4xl font-light pb-2 text-center"> A Dreamer and a Creative Designer. </h1> */}
                <p className="text-[var(--foreground)]/70 dark:text-[var(--foreground)]/70 pb-3  ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus, aspernatur adipisci expedita porro ullam, quia dolor hic soluta sint laborum corporis debitis distinctio, incidunt officia vitae placeat vero voluptates.</p>
              </div>
              <div className="flex gap-2 mt-3 justify-center ">
                <Cta text={"Download Resume"} className="" href={"/"}/>
                <Tag text={"Available For Freelancing "} />

              </div>
              <div className="flex "></div>
            </div>
          </div>
        </div>
        {/* Location and time section */}
        <div className="bt bb z-10">
            <div className="container bx relative">
              {/* Edge circle  */}
              <div className="size-3 bg-[var(--foreground)] dark:bg-[var(--foreground)] rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 "></div>
            <div className="size-3 bg-[var(--foreground)] dark:bg-[var(--foreground)] rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 "></div>
            <div className="size-3 bg-[var(--foreground)] dark:bg-[var(--foreground)] rounded-full absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 "></div>
            <div className="size-3 bg-[var(--foreground)] dark:bg-[var(--foreground)] rounded-full absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 "></div>
            <div className="grid grid-cols-3">
              <div className="flex items-center justify-center py-3">
                <p className="text-white/60 text-sm flex gap-1"><FaMapMarkerAlt className="place-self-center" /> Lagos, Nigeria</p>
              </div>
              <div className="flex items-center justify-center bxd ">
                <p className="text-white/60 text-sm flex gap-1"><FaEnvelope className="place-self-center" /> Ayoolajeremy@gmail.com</p>
              </div>
              <div className="flex items-center justify-center py-3">
                <p className="text-white/60 text-sm flex gap-1">
                  <FaClock className="place-self-center" /> {hour}:{minute}:{second}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
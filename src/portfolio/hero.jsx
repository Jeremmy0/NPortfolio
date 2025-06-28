"use client";
import React, { useEffect, useState } from 'react';
import { FaClock, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Cta from "./cta";
import Tag from "./tag";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    // Only run on client
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Don't render the time until after mount (avoids hydration mismatch)
  const hour = currentTime ? currentTime.getHours().toString().padStart(2, "0") : "--";
  const minute = currentTime ? currentTime.getMinutes().toString().padStart(2, "0") : "--";
  const second = currentTime ? currentTime.getSeconds().toString().padStart(2, "0") : "--";

  return (
    <div>
      <div className="w-full bt">
        <div className="container relative bx">
          {/* this creates the dashed divider in the center  */}
          <div className="w-[33.3333333%] h-full bxd border-dashed border-x border-x-white absolute top-0 left-1/2 -translate-x-1/2 -z-10"></div>
          <div className="pt-35 pb-7">
            <div className="md:justify-self-center w-[80%] px-6">
              <div className="size-34 rounded-full overflow-hidden mb-2">
                <img className="object-top -mt-13" src="/IMG-20231127-WA0052.jpg" alt="Ayoola Jeremiah " />
              </div>
              <div>
                <h1 className="text-4xl font-light py-2"> Hey, I'm Ayoola Jeremiah </h1>
                <h1 className="text-4xl font-light pb-2"> A Dreamer and a Creative Designer. </h1>
                <p className="text-white/60 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus, aspernatur adipisci expedita porro ullam, quia dolor hic soluta sint laborum corporis debitis distinctio, incidunt officia vitae placeat vero voluptates.</p>
              </div>
              <div className="flex gap-2 mt-5">
                <Cta text={"Download CV"} className="bg-[white] text-black/80" />
                <Tag text={"Available For Freelancing "} />
              </div>
              <div className="flex "></div>
            </div>
          </div>
        </div>
        {/* Location and time section */}
        <div className="bt bb">
          <div className="container bx ">
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
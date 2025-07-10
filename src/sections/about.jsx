"use client"
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Heading animation
      gsap.from('.about-heading', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-heading',
          start: 'top 85%',
        },
      });

      // Text paragraph animation
      gsap.from('.about-text', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 85%',
        },
      });

      // Image animation
      gsap.from('.about-image', {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 85%',
        },
      });
    },
    { scope: container }
  );

  // bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white
  return (
    
    <section className='container items-center justify-center  py-20'  >
           {/* About Heading  */}
        <div className="justify-items-center mb-6">
          <h6 className="">History</h6>
          <h2 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-300 to-green-400 font-semibold ">About Me</h2>
        </div>
        <div  ref={container} className=""  >
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left Side - Text Content */}
            <div>
              <p className="about-text text-lg md:text-xl text-gray-300 leading-relaxed text-center md:text-left ">A passionate web designer and Developer, crafting award-winning digital experiences. Always exploring the limitless possibilities opf creativity and Technology, With over 2 years of experience in building sleek, responsive, and high-performing web applications which feels effortyless to use, I specialize in turning ideas into scalable digital solutions. 
              </p>
            </div>

            {/* Right Side - Image / Avatar */}
            {/*transition-transform hover:scale-105 duration-300 */}
            <div className="about-image relative  overflow-hidden rounded-2xl p-1 w-[220px] justify-self-center">
              <div className="w-[250%] absolute bg-green-400 h-[20px] animate-spin transition-all kmklmkl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm"></div>
               <img
                src="/images/jeremy.jpg "
                alt="Developer portrait"
                className="object-bottom hover:scale-110 grayscale hover:grayscale-0 transition-all duration-200  rounded-2xl shadow-2x w-[220px]  "
               />
            </div>

          </div>
        </div>
    </section>
  );
};

export default About;
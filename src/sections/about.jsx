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
    <section
      ref={container}
      className="min-h-screen flex items-center justify-center  px-6 py-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div>
          <h1 className="about-heading text-4xl  font-extrabold leading-tight mb-6">
            Hey, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Ayoola jeremy
            </span>
           
          </h1>
          <p className="about-text text-lg md:text-xl text-gray-300 leading-relaxed">A passionate full-stack developer and web designer crafting award-winning digital experiences.
            With over 8 years of experience in building sleek, responsive, and high-performing web applications, I specialize in turning ideas into scalable digital solutions. My work has been recognized by top industry awards and trusted by clients worldwide.
          </p>
        </div>

        {/* Right Side - Image / Avatar */}
        {/*transition-transform hover:scale-105 duration-300 */}
        <div className="about-image border-3 border-gray-600 relative rounded-2xl overflow-hidden shadow-2xl w-[60%] h-[70%] justify-self-center ">
          <img
            src="/images/jeremy.jpg "
            alt="Developer portrait"
            className="object-bottom hover:scale-110 grayscale hover:grayscale-0 transition-all duration-200 "
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
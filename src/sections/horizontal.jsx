"use client";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    // Calculate total horizontal scroll distance
    const totalScroll = container.scrollWidth - window.innerWidth;

    gsap.to(container, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: true,
      },
    });
  }, { dependencies: [], scope: containerRef });

  const slides = [
    {
      text: "\u201CI don\u2019t just build websites.\u201D",
      bg: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
      textColor: "text-white",
    },
    {
      text: "Minimal, bold, functional design.",
      bg: "bg-black border border-white",
      textColor: "text-white",
    },
    {
      text: "Interactive, performant, expressive UI.",
      bg: "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-sky-400 via-rose-400 to-lime-400",
      textColor: "text-neutral-900",
    },
    {
      text: "Built with React, GSAP, Tailwind.",
      bg: "bg-neutral-900 border border-lime-400",
      textColor: "text-lime-300",
    },
    {
      text: "Real solutions. Real stories.",
      bg: "bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]",
      textColor: "text-white",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div
        ref={containerRef}
        className="flex h-full w-max gap-8 px-16 py-8 touch-pan-x snap-x snap-mandatory"
        style={{ width: `${slides.length * 80}vw` }} // Ensures container is wide enough
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`min-w-[80vw] h-[80vh] ${slide.bg} ${slide.textColor} rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-bold text-center shadow-2xl hover:scale-[1.03] transition-transform duration-500 px-6 md:px-16 leading-snug`}
          >
            {slide.text}
          </div>
        ))}
      </div>
    </section>
  );
}


// "use client"
// import gsap from "gsap"
// import scrollTrigger from "gsap/ScrollTrigger"
// import {useGSAP} from "@gsap/react"
// gsap.registerPlugin(scrollTrigger)

// const Horizontal = () => {

  // useGSAP(() => {
  //   gsap.to(".scroll", {
  //       xPercent: -400,
  //       scrollTrigger:{
  //       start: "top top",
  //       end : "bottom top",
  //       pin:true,
  //       markers:true,
  //       scrub:1,

  //       },

  //   //   duration: 18,
  //   //   ease: "none",
  //   //   repeat: -1,
  //   //   modifiers: {
  //   //     x: gsap.utils.unitize(x => parseFloat(x) % -tapeWidth)
  //   //   }
  //   });
  // }, []);
  // return (
  //   <div className="scroll flex w-[100vh] h-[100vh]">

  //     <img className="opacity-10 w-[100vh
  //     +    ] h-full"  src="/images/grain.jpg" alt="alt" />
    {/* //   <div className="Horizontal bg-green-400 w-[100%] h-full  ">1</div>
    //   <div className="Horizontal bg-green-400 w-[100%] h-full  ">2</div>
    //   <div className="Horizontal bg-green-400 w-[100%] h-full  ">3</div>
    //   <div className="Horizontal bg-green-400 w-[100%] h-full  ">4</div> */}
        
    {/* </div>
)
}

export default Horizontal */}
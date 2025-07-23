'use client';

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPrisma, SiVercel, SiFramer } from 'react-icons/si';

const techStack = [
  { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express.js', icon: FaNodeJs, color: '#444444' }, // fallback for Express
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Prisma', icon: SiPrisma, color: '#0C344B' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
];

export default function TechStackSection() {
  // const [ref] = useGSAP({
  //   target: '.tech-item',
  //   from: { opacity: 0,  },
  //   options: { stagger: 0.1, ease: 'power3.out', duration: 0.8 },
  // });

  
    useGSAP(() => {  
      gsap.from(".tech-items", {
        opacity:0,
        y: 20,
        stagger: 0.1,
        ease: "power3.out",
        duration: 1,
      });
    }, []);

  return (
    <section id=" techStack" className="py-20 md:px-10 lg:px-20  rounded-4xl  overflow-hidden bg-[var(--foreground)]/8 px-8  border border-[var(--foreground)]/20 ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left mb-12">
        My Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {techStack.map(({ name, icon: Icon, color }, index) => (
          <div
            key={index}
            className="tech-item group flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Icon
              className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300"
              style={{ color }}
            />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-100 text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
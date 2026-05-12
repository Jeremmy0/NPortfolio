"use client"
import { useState } from 'react';
import Image from 'next/image';
import Cta from "@/components/cta"
import Link from "next/link"

const projects = [
  // {
  //   id: 3,
  //   title: 'Untapped',
  //   category: 'Custom',
  //   imageUrl: '/images/web3.png',
  //   description: 'Second WP project example.',
  //   link: 'https://example.com/wp2',
  // },
  {
    id: 1,
    title: 'Cryptic',
    category: 'Custom',
    imageUrl: '/images/web1.png',
    description: 'Modern cryptocurrency platform interface featuring real-time market insights, and immersive fintech-inspired user experience.',
    link: 'https://cryptik-ruby.vercel.app/',
  },
  {
    id: 2,
    title: 'Layers',
    category: 'Custom',
    imageUrl: '/images/web2.png',
    description: 'AI-driven knowledge hub designed to organize ideas, streamline learning, and enhance productivity.',
    link: 'https://layer-app.vercel.app/layer',
  },

  {
    id: 5,
    title: 'Sozzy Graphics',
    category: 'Custom',
    imageUrl: '/images/web5.png',
    description: 'Designer portfolio showcasing branding, graphic design, and digital media services and conversion-focused user experience.',
    link: 'https://sozzygraphics.vercel.app/',
  },
  {
    id: 4,
    title: 'Shallom Apartment',
    category: 'WordPress',
    imageUrl: '/images/web4.jpg',
    description: 'Luxury serviced apartment website with immersive visuals, and responsive design tailored for premium hospitality brands.',
    link: 'https://shallomapartment.com/',
  },
  {
    id: 6,
    title: 'Nexora',
    category: 'Custom ',
    imageUrl: '/images/nexora.png',
    description: '  Media studio that builds high-converting websites and brand systems for ambitious companies.',
    link: 'https://nexxorra.vercel.app/',
  },
];

export default function PortfolioTabs() {
  const [tab, setTab] = useState('All');

  const filtered = tab === 'All'
    ? projects
    : projects.filter(p => p.category === tab);

  return (
    <section id="personalWork" className="container mx-auto py-20">
      <div className="justify-items-center mb-6">
        <p className="">Recent Works</p>
        <h3 className="bg-clip-text  text-transparent bg-gradient-to-l from-blue-400 via-green-300 to-green-400 text-xl md:text-2xl lg:text-3xl "> Portfolio</h3>
      </div>
      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-2">
        {['All', 'WordPress', 'Custom'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 font-medium  transition ${
              tab === t
                ? 'text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-300 to-green-400 pb-2'
                : 'text-lg text-[var(--foreground)]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 row-reverse ">
        {filtered.slice().reverse().map(project => (
          <div key={project.id} className=" p-2 rounded-xl bg-[var(--foreground)]/8 border border-[var(--foreground)]/20 relative overflow-hidden group transition ">
              <div className="absolute bg-gradient-to-l from-blue-400  to-green-400  rounded-full blur-[40px] bottom-0 right-0 w-[800px] h-[800px] opacity-80 translate-x-1/2 translate-y-3/4 hidden group-hover:block"> </div>
             <Link   href={project.link}  target="_blank"  rel="noopener noreferrer" className="">
            <div className="w-full overflow-hidden rounded-lg shadow-md">
              <div className="relative w-full h-45 md:h-45 lg:h-45 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="w-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="bg-[var(--background)] dark:bg-[var(--background)] p-4 relative overflow-hidden">

                <h3 className="text-lg font-semibold  text-[var(--foreground)]  dark:[var(--foreground)] ">{project.title}</h3>
                <p className="text-sm text-[var(--foreground)]/80 dark:text-[var(--foreground)]/80 mb-3">
                  {project.description}
                </p>
                <span className="">
                  <Cta text="Visit Site" variant={"noStyle"} className={""}/>
                </span>
              </div>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

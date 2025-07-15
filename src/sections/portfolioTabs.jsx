"use client"
import { useState } from 'react';
import Image from 'next/image';
import Cta from "@/components/cta"

const projects = [
  {
    id: 1,
    title: 'Cryptic',
    category: 'WordPress',
    imageUrl: '/images/web1.png',
    description: 'A WordPress theme I built for a client.',
    link: 'https://cryptik-ruby.vercel.app/',
  },
  {
    id: 2,
    title: 'Layers',
    category: 'Custom',
    imageUrl: '/images/web2.png',
    description: 'A custom-built React application.',
    link: 'https://layer-app.vercel.app/layer',
  },
  {
    id: 3,
    title: 'Untapped',
    category: 'WordPress',
    imageUrl: '/images/web3.png',
    description: 'Second WP project example.',
    link: 'https://example.com/wp2',
  },
];

export default function PortfolioTabs() {
  const [tab, setTab] = useState('All');

  const filtered = tab === 'All'
    ? projects
    : projects.filter(p => p.category === tab);

  return (
    <div className="container mx-auto py-20">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-6">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(project => (
          <div key={project.id} className=" p-2 rounded-xl bg-[var(--foreground)]/8 border border-[var(--foreground)]/20 ">
             <a
            
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-full overflow-hidden rounded-xl shadow-md">
              <div className="relative w-full h-45 md:h-55 lg:h-45 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="w-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="bg-[var(--background)] dark:bg-[var(--background)] p-4 relative">
                {/* <div className="absolute bg-gradient-to-tl from-blue-400 via-green-300 to-green-400 size-40 rounded-full blur-90 bottom-0 right-0 "> </div> */}
                <h3 className="text-lg font-semibold mb-2 text-black  dark:text-white ">{project.title}</h3>
                <p className="text-sm text-[var(--foreground)]/80 dark:text-[var(--foreground)]/80 mb-3">
                  {project.description}
                </p>
                <span className="">
                  <Cta text="Visit Site" noStyle={1}/>
                </span>
              </div>
            </div>
          </a>
          </div>
        ))}
      </div>
    </div>
  );
}

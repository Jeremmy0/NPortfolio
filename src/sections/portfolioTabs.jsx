"use client"
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Awesome WP Site',
    category: 'WordPress',
    imageUrl: '/images/wp1.png',
    description: 'A WordPress theme I built for a client.',
    link: 'https://example.com/wp1',
  },
  {
    id: 2,
    title: 'Custom React App',
    category: 'Custom',
    imageUrl: '/images/custom1.png',
    description: 'A custom-built React application.',
    link: 'https://example.com/custom1',
  },
  {
    id: 3,
    title: 'Another Project',
    category: 'WordPress',
    imageUrl: '/images/wp2.png',
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
    <div className="max-w-5xl mx-auto p-4">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {['All', 'WordPress', 'Custom'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 font-medium rounded-lg transition ${
              tab === t
                ? 'bg-blue-600 text-white shadow'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(project => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gradient-to-br from-white to-gray-50 border-2 border-dashed border-gray-300 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition"
          >
            {/* Corner Boxes */}
            <span className="absolute top-1 left-1 w-3 h-3 bg-black rounded-sm" />
            <span className="absolute top-1 right-1 w-3 h-3 bg-black rounded-sm" />
            <span className="absolute bottom-1 left-1 w-3 h-3 bg-black rounded-sm" />
            <span className="absolute bottom-1 right-1 w-3 h-3 bg-black rounded-sm" />

            {/* Project Image */}
            <div className="h-40 bg-gray-100 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

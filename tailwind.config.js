// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./sections/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
          grotesk : ['var(--font-space-grotesk)', 'sans-serif'], 
          work: ['var(--font-work-sans)', 'sans-serif'],
         // headline: ['var(--font-poppins)'],
         // subtext: ['var(--font-inter)'],
      },
    },
    
  },
  plugins: [],
}
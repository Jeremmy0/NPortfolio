// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        headline: ['var(--font-poppins)'],
        subtext: ['var(--font-inter)'],
        grotesk : ['var(--font-space-grotesk)'],
      },
    },
  },
  plugins: [],
}
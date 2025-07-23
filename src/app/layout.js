import { Geist, Geist_Mono, Poppins, Inter,Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";
// import { GSAPProvider}   from '@gsap/react'
import { gsap } from "gsap";
// import { Provider } from "@/components/ui/provider"


const sGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '500', '600'], 
  // regular, medium, semi-bold
  variable: '--font-space-grotesk',
})
const wSans= Work_Sans({
  subsets:["latin"],
  weight:["400"],
  variable: "--font-work-sans"
})
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['600', '700'], // bold
//   variable: '--font-poppins',
// })

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400'], // regular
//   variable: '--font-inter',
// })
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Ayoola Jeremy || Creative Designer & Developer",
  description: "Ayoola Jeremy is a creative designer and developer specializing in crafting unique digital experiences. Explore my portfolio to see my work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${wSans.variable} ${sGrotesk.variable} antialiased `}  suppressHydrationWarning>
      <body
        className=""
        // ${geistSans.variable} ${geistMono.variable}  ${poppins.variable} ${inter.variable}
      >
        {children} 
      </body>
    </html>
  );
}

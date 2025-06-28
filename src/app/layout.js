import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { GSAPProvider}   from '@gsap/react'
import { gsap } from "gsap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ayoola Jeremy || Creative Designer & Developer",
  description: "Ayoola Jeremy is a creative designer and developer specializing in crafting unique digital experiences. Explore my portfolio to see my work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}

"use client"
import Cta from "@/components/cta"
import * as FaIcons from "react-icons/fa"

const socialLinks = [
  {
    logo: "FaGithub",
    socialName: "GitHub",
    link: "https://github.com/Jeremmy0",
  },
  {
    logo: "FaLinkedin",
    socialName: "LinkedIn",
    link: "https://www.linkedin.com/in/ayoolajeremiah",
  },
  {
    logo: "FaEnvelopeOpen",
    socialName: "Email",
    link: "mailto:ayoolajeremy@gmail.com",
  },
]

const Footer = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const message = formData.get("message")

    const whatsappMessage = `Hello Ayoola, ${message}`

    const whatsappURL = `https://wa.me/2348129525774?text=${encodeURIComponent(
      whatsappMessage
    )}`

    window.open(whatsappURL, "_blank")
  }

  return (
    <section
      id="footer"
      className="w-full z-10 relative rounded-t-3xl overflow-hidden text-black"
    >
      <div className="absolute top-0 left-0 bg-gradient-to-r from-emerald-300 to-sky-400 w-full h-full opacity-70 -z-10"></div>

      <div className="container relative pb-4 ">
        <div className="w-[90%] md:max-w-[70%] items-baseline justify-self-center justify-items-center pt-10 pb-5 bb">
          
          <h2 className="mb-2 md:mb-5 text-3xl md:text-5xl">
            Contact Me
          </h2>

          <p className="text-center">
            My inbox is always open. Whether you have a question or just want
            to say hello, I'll try my best to get back to you! Feel free to
            reach out about collaborations, projects, or opportunities.
          </p>

        </div>
      </div>

      <div className="container justify-between flex flex-col md:flex-row">

        {/* Socials */}
        <div className="p-4 content-center">
          <div className="flex gap-2 justify-center">

            {socialLinks.map((link, idx) => {
              const Logo = FaIcons[link.logo]

              return (
                <a
                  key={idx}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 inline-flex hover:scale-110 transition"
                  aria-label={link.socialName}
                >
                  <Logo className="text-3xl text-white" />
                </a>
              )
            })}

          </div>
        </div>

        {/* Form */}
        <div className="p-4">

          <h3>
            Send a message & I'll get back to you ASAP
          </h3>

          <form onSubmit={handleSubmit} className="mt-2">
            <div className="flex gap-2">

              <input
                type="text"
                name="message"
                placeholder="Type your message..."
                required
                className="bg-white rounded-full px-4 py-3 text-black flex-1 outline-none"
              />

              <button
                type="submit"
                className="bg-black text-white px-5 rounded-full hover:scale-105 transition"
              >
                Send
              </button>

            </div>
          </form>

        </div>
      </div>

      {/* Bottom */}
      <div className="container relative justify-content-center">
        <div className="p-4 justify-self-center">
          
          <p className="text-xs md:text-sm text-center">
            Designed & Developed by Ayoola Jeremiah © 2025.
            All rights reserved
          </p>

        </div>
      </div>

    </section>
  )
}

export default Footer

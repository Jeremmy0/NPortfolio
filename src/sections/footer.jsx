import Cta from "@/components/cta"
import DashedCenter from "@/components/dashedCenter"
import * as FaIcons from "react-icons/fa"


const socialLinks = [
    {logo:"FaGithub",
     socialName:"github",
     link:"",   
    },
    {logo:"FaLinkedin",
     socialName:"github",
     link:"",   
    },
    {logo:"FaTwitter",
     socialName:"github",
     link:"",   
    },
    {logo:"FaEnvelopeOpen",
     socialName:"github",
     link:"",   
    },
]

const footer = () => {
  return (
    <div className="w-fill  z-10 relative rounded-t-3xl overflow-hidden text-black">
      <div className="absolute top-0 left-0  bg-gradient-to-r from-emerald-300 to-sky-400 w-full h-full  opacity-70 -z-10"></div>

       <div className="container  relative pb-4">
          <div className="w-[90%] md:max-w-[70%] items-baseline justify-self-center justify-items-center pt-10  pb-5 bb" >
            <h2 className="mb-2 md:mb-5  text-3xl md:text-5xl">Contact Me</h2>
            <p className="text-center">My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.</p>
          </div>
        </div>
 
      <div className="container  justify-between flex">

          {/* grid */}
          <div className="p-4 content-center "> 
            <div className="flex gap-1 justify-center  ">
                {socialLinks.map((link, idx)=>{
                  const Logo = FaIcons[link.logo]
                  return(
                    <div key={idx} className="px-2 py-1 gap-1 inline-flex">
                      <Logo className="place-self-center text-3xl text-white opacity-100"/>
                    </div>
                  )
                  })}             
            </div>
         </div>


            <div className="p-4 "> 
                <h3 className="">Send an email or Dm & i'll get back to you ASAP</h3>
                <form action="/jja" className="mt-2">
                  <div className="flex gap-1">
                    <input type="text" className="bg-white rounded-full ps-2 text-black flex-10/12 "/>
                    <Cta  className="flex-2/12 "/>
                  </div>
                </form>
            </div>

      </div>
      {/*  */}
      <div className="container  relative justify-content-center ">
          {/* grid */}
          <div className="p-4 flex-inline  justify-self-center "> 
            <p className="">Designed & Developed by Ayoola Jeremiah  © 2025. All rights reserved</p>
          </div>

      </div>       

    </div>
  )
}

export default footer
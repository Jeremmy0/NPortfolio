import Cta from "@/components/cta"
import DashedCenter from "@/components/dashedCenter"
import {socialLinks} from "../components/constants"
import { FaGithub } from "react-icons/fa"

const footer = () => {
  return (
    <div className="w-fill by z-10">
      <div className="container bx relative pb-4">
          {/* <DashedCenter/> */}
        {/* <div className="grid grid-cols-3 p-30"> */}
          <div className="max-w-[70%] items-baseline justify-self-center justify-items-center pt-20">
            <h2 className="mb-5 text-5xl">Contact Me</h2>
            <p className="text-center">My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.</p>
          </div>
        {/* </div> */}
      </div>
      <div className="container bt bx relative ">
        <DashedCenter/>
        <div className="grid grid-cols-3">

          {/* grid */}
          <div className="p-4 content-center "> 
            <div className="flex gap-1 ">
            {socialLinks.map((link, idx)=>(
            <div key={idx} className="px-2 py-1 rounded-md border  gap-1 inline-flex">
              <FaGithub className="place-self-center"/>
              <p className="m-0 p-0"> {link.socialName}</p>
            </div>
           ))}             
            </div>

          </div>
          {/* grid */}
          <div className="p-4 "> 
           
          </div>
          {/* grid */}          <div className="p-4 "> 
            <h3 className="">Send an email or Dm & i'll get back to you ASAP</h3>
            <form action="/jja" className="mt-2">
              <div className="flex gap-1">
                <input type="text" className="bg-white rounded-full ps-2 text-black flex-10/12 "/>
                <Cta  className="flex-2/12 "/>
              </div>
            </form>
          </div>
        </div>

      </div>
      {/*  */}
      <div className="container bt bx relative ">
        <DashedCenter/>
        <div className="grid grid-cols-3">

          {/* grid */}
          <div className="p-4 content-center "> 
   
          </div>
          {/* grid */}
          <div className="p-4 "> 
            <p className=""> © 2025  Ayoola Jeremiah. All rights reserved</p>
          </div>
          {/* grid */}       
          <div className="p-4 "> 
 
          </div>
        </div>

      </div>       

    </div>
  )
}

export default footer
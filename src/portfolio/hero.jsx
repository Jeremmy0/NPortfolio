import Cta from "./cta"
import Tag from "./tag"

const Hero = () => {
  return (
    <div>
      <div className="w-full bt  "> 
        <div className="container relative bx"> 
          {/* this creates the dashed divider in the center  */}
          <div className="w-[33.3333333%] h-full bxd border-dashed border-x border-x-white absolute top-0 left-1/2 -translate-x-1/2 -z-10"></div>


          <div className="  pt-35 pb-7">
            <div className=" md:justify-self-center w-[80%] px-6  " >
              <div className=" size-34 rounded-full overflow-hidden mb-2 "> <img className="object-top -mt-13 " src="/IMG-20231127-WA0052.jpg" alt="Ayoola Jeremiah " /></div>
            
            <div className=" ">
                <h1 className="text-4xl font-light py-2"> Hey, I'm Ayoola Jeremiah </h1>
                <h1 className="text-4xl font-light pb-2"> A Dreamer and a Creative Designer. </h1>
                <p className="text-white/60 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus, aspernatur adipisci expedita porro ullam, quia dolor hic soluta sint laborum corporis debitis distinctio, incidunt officia vitae placeat vero voluptates.</p>
            </div>
            <div className="flex gap-2 mt-5">
              <Cta text={"Download CV"} className="bg-[white] text-black/80"/> 
              <Tag text={"Available For Freelancing "}/>
            
            </div>
            <div className="flex ">
              
            </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Hero
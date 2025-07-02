import Cta from "./cta"
import Tag from "./tag"

const NewHero = () => {
  return (
  
      <div className="container-wrapper ">
        <div className="container" >
          <div className="lg-grid"> 
            <div className="col-span-1 size-20 bg-blue-400"></div>
            <div className="col-span-1 size-20 bg-blue-400"></div>
            <div className="col-span-1"></div>
          </div>

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
        </div>
      </div>
 
  )
}

export default NewHero
import DashedCenter from "../components/dashedCenter"
import SpecificWork from "../components/specificWork"

const Portfolio = ()=>{
return(
    <>
    <div className="w-full by z-10">
        <div className="container bx relative ">
          <div className="size-3 bg-[var(--foreground)] dark:bg-[var(--foreground)] rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 "></div>
           <div className="size-3 bg-[var(--foreground)] dark:bg-[var(--foreground)] rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 "></div>
            <div className="size-3 bg-[var(--foreground)] dark:bg-[var(--foreground)] rounded-full absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 "></div>
            <div className="size-3 bg-[var(--foreground)] dark:bg-[var(--foreground)] rounded-full absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 "></div>
            <DashedCenter/>
            <div className="">
                {/* Work Header  */}
                <div className="grid grid-col md:grid-cols-3 bb">
                  <div className="px-4 ">
                    <h1 className=" text-4xl pt-20 ">Works</h1>
                    <div className="text-[var(--foreground)]/50 dark:text-[var(--foreground)]/50 text-3xl my-2">Selection of recent projects and works</div>
                </div> 
                <div className=" relative flex items-center justify-center">
                    <div className="size-3 bg-[var(--foreground)] dark:bg-[var(--foreground)] rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 "></div> 
                    <div className="size-3 bg-[var(--foreground)] dark:bg-[var(--foreground)] rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 "></div>   
    </div> 

                </div>
                {/* SPECIFIC WORKS  */}
                    <SpecificWork/>
            </div>     
        </div>
    </div>
    </>
)
}

export default Portfolio 
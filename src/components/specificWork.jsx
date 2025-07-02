import { works } from "./constants";

const SpecificWork = () => {
    // console.log(worksPassed);
    // const { companyName, title, description, image, companyLogo, link } = worksPassed;
    
    return (
         <div>
            {works.map((work, idx) => (
                <div key={idx} className="grid grid-cols-3 bb ">
                    {/* First column: center content, smaller logo */}
                    <div className="flex flex-col justify-center px-4">
                        <div className="flex items-center gap-3 mb-2">
                            <img 
                                src={work.companyLogo} 
                                alt={`${work.companyName} logo`} 
                                className="w-10 h-10 object-contain"
                            />
                            <h2 className="text-2xl font-bold">{work.companyName}</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 ">{work.description}</p>
                        <div className=" flex gap-1 ">
                            {work.workTags.map((tag, idx) =>(
                                    <div key={idx} className="bg-[#008000]/40 p-1 rounded-md text-xs font-bold">{tag}</div> 
                            ))}
                        </div>
                        {/* <a 
                            href={work.link} 
                            className="text-blue-500 hover:underline mt-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a> */}
                    </div>
                    {/* Second column: image with min height 50vh, scale down, scale to normal on hover */}
                    <a href={work.link}   target="_blank" rel="noopener noreferrer" className="flex items-center justify-center col-span-2 col-start-2 bg-green-100 dark:bg-green-900  shadow-lg min-h-[50vh] z-60">
                        <img 
                            src={work.image} 
                            alt={`${work.title} screenshot`} 
                            className="w-full h-full max-h-[50vh] object-cover transform scale-90 hover:scale-100 transition-transform duration-300 object-center translate-y-4 hover:translate-y-0 "
                        />
                    </a>
                </div>
            ))}
        </div>
        // <div className="grid grid-cols-3 bb">
        //     <div className="px-4">
        //         <div className="flex"> 
        //         <img src={companyLogo} alt={`${companyName} logo`} className="w-16 h-16" />
        //         <h2 className="text-2xl font-bold flex gap-2"> {companyName}</h2>
        //         </div>
        //         <h3 className="text-xl">{title}</h3>
        //         <p className="text-gray-600 dark:text-gray-400">{description}</p>
        //         <a href={link} className="text-blue-500 hover:underline">
        //         View Project
        //         </a>
        //     </div>
        //     <div className="flex items-center justify-center col-span-2 col-start-2 bg-green-100 dark:bg-green-900 p-4  shadow-lg">
        //         <img src={image} alt={`${title} screenshot`} className="w-full h-auto" />
        //     </div>

        // </div>
    );
}

export default SpecificWork;
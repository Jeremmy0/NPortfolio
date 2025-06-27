
import { FaArrowRight } from "react-icons/fa"

const Cta = ({text , className,href}) => {
  return (
    // <div className="">
    //     <button className="py-2 px-4 rounded-md content-center text-center bg-white text-black/80 text-lg font-semibold">{text}</button>
    // </div>
     <button type="button" className={`py-2 px-3    hidden md:flex group rounded-md content-center text-center   text-lg font-semibold ${className} `}><a href={`${href}`}> {text}  </a> <div className="flex gap-4 relative"> <FaArrowRight className="self-center place-self-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-2 transition-all  duration-500 ease-out absolute "/>

     <FaArrowRight className="self-center place-self-center ps-1  group-hover:opacity-100 group-hover:translate-x-2 transition-all  duration-500 ease-out "/> </div></button>
  )
}

export default Cta
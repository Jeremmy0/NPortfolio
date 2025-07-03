
import { FaArrowRight } from "react-icons/fa"
import * as FaIcons from "react-icons/fa";

const Cta = ({text , className,href,FaIconName}) => {
  console.log(FaIconName)
  const IconComponent = FaIcons[FaIconName] 
  console.log(FaIcons[FaIconName], IconComponent)
  
  return (
    // <div className="">
    //     <button className="py-2 px-4 rounded-md content-center text-center bg-white text-black/80 text-lg font-semibold">{text}</button>
    // </div>
     <button type="submit" className={`py-2 px-3     group rounded-md content-center text-center   text-lg font-semibold ${className} bg-[#008000] text-white hover:bg-[#00a000] transition-all duration-500 ease-out  z-90 `}>
      <a href={`${href}`} className="group">{text}</a> 
      <div className="flex gap-4 relative"> <IconComponent className="self-center place-self-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-2 transition-all  duration-500 ease-out absolute "/>

     <IconComponent className="self-center place-self-center ps-1  group-hover:opacity-100 group-hover:translate-x-2 transition-all  duration-500 ease-out "/> </div></button>
  )
}

export default Cta
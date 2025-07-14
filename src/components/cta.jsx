import * as FaIcons from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa"

const Cta = ({text , className,href, IconName, noStyle }) => {

  const AIconName = FaIcons[IconName] || FaArrowRight;
  console.log(noStyle, text)
  // Fallback to FaArrowRight if IconName is not provided or not found
  return (
    <div> 
    {noStyle ? 
       <button
        type=""
        className={`flex gap-2 ${className}`}
      >
        <div href={`${href}`} className="group  text-center">{text}</div>
        <div className="flex gap-4 relative">
          <AIconName className="self-center place-self-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 ease-out absolute" />
          <AIconName className="self-center place-self-center ps-1 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 ease-out" />
        </div>
      </button> :
      <button type=""  className={`py-2 px-3 flex group rounded-md content-center text-center text-lg font-semibold bg-[#27272A] text-white hover:bg-[#27272A] transition-all duration-500 ease-out border-1 border-zinc-300/20 ${className}`}
      >
        <a href={`${href}`} className="group  text-center">{text}</a>
        <div className="flex gap-4 relative">
          <AIconName className="self-center place-self-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 ease-out absolute" />
          <AIconName className="self-center place-self-center ps-1 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 ease-out" />
        </div>
      </button> 
  
    }
       </div>
//  : 
    // }
 
  )
}

export default Cta
import * as FaIcons from "react-icons/fa";
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

const Cta = ({text, className, variant,href,IconName}) =>{
  const AIconName = FaIcons[IconName] || FaArrowRight;
  const Variants = {
    primary :"py-2 px-3 flex group rounded-md content-center text-center text-lg font-semibold bg-[#27272A] text-white hover:bg-[#27272A] transition-all duration-500 ease-out border-1 border-zinc-300/20  ",
    noStyle : "flex gap-2",

  }
  console.log(Variants[variant], variant )
  return(
      <button href={`${href}`} className={` ${className} ${Variants[variant]}`}>
        <div  className=" ">{text}</div>
        <span className="flex gap-4 relative  ">
          <AIconName className="self-center place-self-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 ease-out absolute  " />
          <AIconName className="self-center place-self-center ps-1 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 ease-out " />
        </span>
      </button> 
    

  )
}
export default Cta

// const Cta = ({text , className,href, IconName, noStyle }) => {

//   const AIconName = FaIcons[IconName] || FaArrowRight;
//   // Fallback to FaArrowRight if IconName is not provided or not found
//   return (
//     <div> 
//     {noStyle ? 
//  :
//       <button type=""  className={`py-2 px-3 flex group rounded-md content-center text-center text-lg font-semibold bg-[#27272A] text-white hover:bg-[#27272A] transition-all duration-500 ease-out border-1 border-zinc-300/20 ${className}`}
//       >
//         <a href={`${href}`} className="group  text-center  ">{text}</a>
//         <div className="flex gap-4 relative">
//           <AIconName className="self-center place-self-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 ease-out absolute" />
//           <AIconName className="self-center place-self-center ps-1 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 ease-out" />
//         </div>
//       </button> 
  
//     }
//        </div>
// //  : 
//     // }
 
//   )
// }

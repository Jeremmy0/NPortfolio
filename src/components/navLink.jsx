"use client";
import { IconsManifest } from "react-icons";
import * as FaIcons from "react-icons/fa";
import Link from "next/link";

const NavLink = ({ text, faIconName, href, MobileOpen }) => {


  const IconComponent = FaIcons[faIconName]
  // console.log(IconComponent)
  return (
    <div className="ps-3 p-3 relative  group">
      
      {IconComponent && MobileOpen 
      // i am uding this two "" because i know that thw ixon component will return true: incase of error you can try and check if they both dont have bugs
      ? (
        <> 
          <Link href={`${href}`} className="  gap-2 items-baseline inline-flex">
             <IconComponent className="scale-150 group-hover:scale-200 transition-transform duration-300 ease-out opacity-100" />
            <div className=" font-semibold text-xl text-[var(--foregound)] dark:text-[var(--foreground)] ">
                <span > {text} </span> 
            </div>
          </Link>
        </>
      ) 
      :(
        <Link href={`${href}`}>
          <IconComponent className="scale-150 group-hover:scale-200 transition-transform duration-300 ease-out opacity-100" />
         <div className="absolute top-13 font-semibold left-0 opacity-0 z-20 text-[var(--foregound)] dark:text-[var(--foreground)] transition-opacity duration-300 ease-out group-hover:opacity-100">
            <span > {text} </span> 
         </div>
        </Link> 


      )}

    </div>
  );
};

export default NavLink;


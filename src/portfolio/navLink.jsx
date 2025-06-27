"use client";
import * as FaIcons from "react-icons/fa";

const NavLink = ({ text, faIconName, href }) => {


  const IconComponent = FaIcons[faIconName]
  // console.log(IconComponent)
  return (
    <div className="ps-3 p-3 relative overflow-block group">
      {IconComponent && (
        <IconComponent className="scale-150 group-hover:scale-200 transition-transform duration-300 ease-out opacity-100" />
      )}
      <div className="absolute top-13 font-semibold left-0 opacity-0 z-20 text-white transition-opacity duration-300 ease-out group-hover:opacity-100">
       <a href={`${href}`}> {text} </a> 
      </div>
    </div>
  );
};

export default NavLink;
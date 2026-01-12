
import NavLink from "./navLink";
import Cta from "./cta";


const NewNav = () => {
  return (
    <>
      
      <div className="container-wrapper  pt-5 top-2 sticky justify-center ">
        <div className="container bg-white/5 backdrop-blur-sm border-1 border-gray-400/20 md:ps-2 md:py-2  rounded-xl  shadow  items-center flex justify-between w-full md:w-[70%] lg:w-[50%] sticky" >
            <NavLink text={"Home"} faIconName="FaHome" href={"/"}/>
          {/* this is the divider */}
          <div className="w-[1px] h-[5vh] rounded-full bg-white/40 hidden md:flex"></div>
          {/* NewNav links */}
          <div className="md:flex gap-2 text-baseline hidden  me-2 ">
              <NavLink text={"About"} faIconName="FaUser" href={"#about"}/>
              <NavLink text={"Resume"} faIconName="FaStickyNote" href={"#resume"}/>
              <NavLink text={"Experience"} faIconName="FaBriefcase" href={"#experience"}/>
              <NavLink text={"My Works"} faIconName="FaLightbulb" href={"#personalWork"}/>

          </div>
          
          {/* this is the divider */}
          <div className="w-[1px] h-[5vh] rounded-full bg-white/40  hidden md:flex"></div>

          <Cta text={"Contact me"} className="bg-white text-black/80"/>

          {/* Hamburger */}
          <div className="md:hidden "></div>
        </div>
      </div>
     
    </>
  );
}

export default NewNav;
import Nav from"../sections/nav"
import Hero from"../sections/hero"
import About from"../sections/about"
import Footer from"../sections/footer"
import Highlights from "@/sections/highlights"
import Portfolio from "../sections/portfolio"
import PortfolioTabs from "../sections/portfolioTabs"
import { TapeSection } from "@/sections/tape"
import { HeroSection } from "@/sections/heros"
import Qualifications from "@/sections/qualification"
import TechStackSection from "@/sections/techStack"
// import NewNav from"./components/NewNav"
// import NewHero from"./components/NewHero"  
const Home = ()=>{
 
return(
    <div className=" ">
        {/* <div className="bg-[var(--background)] dark:bg-[var(--background)] rounded-2xl overflow-y-auto  h-full scroll-smooth  scrollbar-none"> */}
            <Nav />
            <Hero/>
            <About/>
            <Qualifications/>
            <PortfolioTabs/>
            {/* <Portfolio/> */}
            <TechStackSection/>
            <TapeSection/>
            <Highlights/>
            <Footer/>
        {/* </div> */}

    </div>
)
//     <div className=" p-3 bg-white/5 fixed top-0 left-0 w-full h-full ">
//         <div className="rounded-3xl  bg-black  overflow-y-auto  h-full scroll-smooth  scrollbar-none">
//             {/* <Nav/> */}
//             <NewNav/>
//             <NewHero/>
//             {/* <Hero/> */}
//             <Hero/>
//             <About/>
//             <Footer/>
//         </div>
//     </div>
// )
}
export default Home

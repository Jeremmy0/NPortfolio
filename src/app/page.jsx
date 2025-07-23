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

const Home = ()=>{ 
return(
    <div className=" ">
            <Nav />
            <Hero/>
            <About/>
            <Qualifications/>
            <PortfolioTabs/>
            <TechStackSection/>
            <TapeSection/>
            {/* <Highlights/> */}
            <Footer/>

    </div>
)
}
export default Home

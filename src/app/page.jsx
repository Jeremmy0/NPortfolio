import Nav from"../sections/nav"
import Hero from"../sections/hero"
import About from"../sections/about"
import Footer from"../sections/footer"
import Highlights from "@/sections/highlights"
import Works from "../sections/works"
// import NewNav from"./components/NewNav"
// import NewHero from"./components/NewHero"  
const Home = ()=>{
return(
    <div className="bg-black  p-3 fixed top-0 left-0 w-full h-full ">
        <div className="bg-[var(--background)] dark:bg-[var(--background)] rounded-2xl overflow-y-auto  h-full scroll-smooth  scrollbar-none">
            <Nav className=""/>
            <Hero/>
            <Highlights/>
            <Works/>
            <About/>
            <Footer/>
        </div>

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

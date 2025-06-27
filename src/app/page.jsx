import Nav from"./components/Nav"
import Hero from"./components/Hero"
import About from"./components/About"
import Footer from"./components/Footer"
// import NewNav from"./components/NewNav"
// import NewHero from"./components/NewHero"  
const Home = ()=>{
return(
    <div className="   ">
            <Nav/>
            <Hero/>
            <About/>
            <Footer/>
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
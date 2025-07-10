import Qualification from "@/components/qualification"
import { FaLink, FaCalendar, FaBriefcase, FaBookOpen, } from "react-icons/fa"

const Qualifications = () =>{
    return(
        <section className="w-full py-20 ">
            <div className="container">
                            {/* Qualifications Heading  */}
                <div className="justify-items-center mb-6">
                    <h6 className="">Experience & Education</h6>
                    <h2 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-300 to-green-400 font-semibold ">Qualifications</h2>
                </div>
                <div className="grid grid-col md:grid-cols-2 gap-12  md:gap-16 ">
                    {/* grid  1 */}
                    <div className=""> 
                        <div className="flex gap-2  text-xl md:text-3xl mb-3"> <FaBriefcase className="place-self-baseline"/> Work Experience  </div>
                        <Qualification title={"Software Developer"} subTitle={"The Webmakers"} date={"Feb 2024 - Jun 2025"} iconName={"FaLink"}/>
                        <Qualification title={"Frontend Engineer"} subTitle={"The Webmakers"} date={"Feb 2024 - Jun 2025"} iconName={"FaLink"}/>
                        <Qualification title={"Frontend Developer"} subTitle={"Systempace Tech."} date={"Feb 2024 - Jun 2025"} iconName={"FaLink"}/>
                    </div>


                    {/* grid 2 */}
                    <div className=""> 
                        <div className="flex gap-2  text-xl md:text-3xl mb-3"> <FaBookOpen className="place-self-baseline"/> Education.  </div>
                        <Qualification title={"Computer Science"} subTitle={"Tai-Solarin University"} date={"Nov 2020 - Jun 2024"} iconName={"FaLink"}/>
                        <Qualification title={"Javascript Masterclass"} subTitle={"Udemy"} date={"Feb 2024 "} iconName={"FaLink"}/>
                        <Qualification title={"Frontend Developer"} subTitle={"Systempace Tech."} date={"Feb 2024 - Jun 2025"} iconName={"FaLink"}/>
                    </div>

                    {/* <div className="flex justify-between">
                        <h3 className=" ">Computer Science  </h3>
                        <div className="py-1 px-3 rounded-lg bg-amber-300 border border-amber-500 text-amber-500 flex gap-2 "> <FaLink/> Tai-Solarin </div>
                    </div> */}

                </div>

            </div>
        </section>

    )
}
export default Qualifications
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Team from "../components/Team"
import Partners from "../components/Partners"
import Stat from "../components/Stat"
import RecentWork from "../components/RecentWork"

import RandD from "../components/RandD"
import { BsArrowUp } from "react-icons/bs";
import { BsAirplaneFill } from "react-icons/bs";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

import ResearchBlogsCard from "../components/ResearchBlogsCard"




function Home() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Navbar></Navbar>

            <Hero />

            <RecentWork />

            <ResearchBlogsCard />
            <Team></Team>

            <Partners />


            <div className="bg-slate-200   h-20">
                {/* <button className="bg-indigo-700 text-orange-600 text-3xl rounded-full flex items-center justify-start pl-5 pb-3 size-[7rem] ml-[85rem] " */}
                <button className="bg-indigo-600 text-white text-3xl rounded-full -bottom-5 -right-9 size-[4rem] h-[5rem] w-[5rem] fixed pl-2.5 pb-2 hover:text-orange-600"
                    onClick={scrollToTop}>
                    <FaArrowUpLong />
                </button>
            </div>


            <Footer></Footer>

        </>
    )
}

export default Home;

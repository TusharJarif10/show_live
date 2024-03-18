import React, { useState } from "react";
import cover from "../assets/cv.png";
import { Link } from "react-router-dom";
function Hero(props) {

  const [show, setShow] = useState(false);

  return (

    <>
      <div class="pb-12 overflow-y-hidden w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${cover})` }}>

        {/* <div className="bg-gray-200 mt-[7rem]"> */}
        <div className="relative px-4 xl:px-0 container mx-auto md:flex items-start gap-8">
          <div className=" pl-[3rem] text-left w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12 items-start ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">
              Start your journey of 
              <span className="text-indigo-700"> Business </span>
              with Us.
            </h1>
            <div className="f-f-r text-base lg:text-base pb-10 sm:pb-0 pt-5 xl:pt-2">
              <p className="mt-5 sm:mt-3 lg:w-10/12 text-black font-bold text-left text-sm sm:text-lg ">Dedicated to elevating businesses to their peak performance through strategic consulting and tailored solutions.</p>
            </div>
            <div className="lg:flex pt-5 gap-3">
              {/* <button className=" sm:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2
                 focus:ring-indigo-700 bg-indigo-300 transition duration-150 ease-in-out
                  hover:bg-indigo-500 hover:text-white lg:text-xl lg:font-bold  rounded text-slate-800 px-4 sm:px-10 border
                   border-indigo-700 py-2 sm:py-4 sm:text-xs text-sm">Get Started</button> */}
              <Link to={"/emailForm"}>
              <button className="text-left sm:font-bold mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2
                 focus:ring-indigo-700 bg-orange-300 transition duration-150 ease-in-out
                  hover:border-indigo-600 lg:text-xl lg:font-bold 
                   hover:bg-slate-700 hover:text-white rounded border
                    border-indigo-700 text-indigo-700 lg:text-center
                    px-4 sm:px-10 py-2 sm:py-4 sm:text-xs text-sm">Book Appointment</button>
              </Link>
             
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </dh-component> */}
        {/* Code block ends */}
      </div>

    </>
  );
}

export default Hero;

import React from "react";
import pheneixlogo from "../assets/phenix.png";
import sherebanglalogo from "../assets/sher-e-bangla-logo.png";
import zahralogo from "../assets/zahralogo.jpeg";

const Partner3 = () => {
    return (
        <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4 bg-slate-200 ">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center text-center space-y-4">
                    <h1 className="text-4xl font-extrabold leading-10 text-gray-800 text-center mb-5 uppercase">Our Trusted Partners</h1>
                    <p className="text-base leading-6 text-center text-gray-600 w-full md:w-10/12">We just got featured in the following magazines and it has been the most incredible journey. We work with the best fashion magazines across the world</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3  justify-items-center gap-x-2 gap-y-6 xl:gap-x-5 mt-10">

                    <div className=" w-[300px] h-[200px] focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-14 px-12 space-y-6">
                    <img src={pheneixlogo} alt="logo" className="md:cursor-pointer h-13 " />

                    </div>
                    <div className="w-[300px] h-[200px] focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-14 px-12 space-y-6">
                    <img src={sherebanglalogo} alt="logo" className="md:cursor-pointer h-13 " />
                    </div>
                    <div className="w-[300px] h-[200px] focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-14 px-12 space-y-6">
                    <img src={zahralogo} alt="logo" className="md:cursor-pointer h-[180px]"  />

                    </div>
                   
                  
                  
                </div>
            </div>
        </div>
    );
};

export default Partner3;

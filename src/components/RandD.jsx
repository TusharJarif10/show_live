import React from "react";
import r1 from "../assets/10.jpg";
import r2 from "../assets/11.jpg";


export default function Home() {
    return (
        <>
            <div className="pt-10 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container bg-gray-50" style={{ height: 700 }}>
                <h1 className="text-4xl font-extrabold leading-10 text-gray-800 text-center mb-5 uppercase pb-12 pt-5" > RESEARCH & DEVELOPMENT </h1>
                <div className="md:flex items-center justify-between w-full bg-gray-50">
                    <div className="xl:w-1/3 md:w-1/2 w-full">
                        <h1 role="heading" className="focus:outline-none leading-6 mt-8 font-extrabold text-3xl 2xl:pr-24 xl:pr-0 pr-12 text-gray-800">
                            Farming flowers
                        </h1>
                        <p role="contentinfo" className="focus:outline-none text-base leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12">
                            Don’t get carried away with super-short paragraphs. The secret to one-sentence paragraphs is to use them like a spice: A pinch of cumin can make a meal more savor.
                        </p>
                    </div>
                    <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
                       
                        <div className="w-full">
                            <img src={r1} alt="Purple flowers on a book" className="md:w-full sm:w-1/2 w-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div className=" 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container bg-gray-50" style={{ height: 650 }}>
                <div className="md:flex items-center justify-between w-full bg-gray-50">
                     <div className="xl:w-4/6 md:w-1/2 w-full xl:pr-48">
                       
                        <div className="w-full">
                            <img src={r2} alt="Purple flowers on a book" className="md:w-full sm:w-1/2 w-full" />
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 w-full">
                        <h1 role="heading" className="focus:outline-none leading-6 mt-8 font-extrabold text-3xl 2xl:pr-24 xl:pr-0 pr-12 text-gray-800">
                            Constructing Buildings
                        </h1>
                        <p role="contentinfo" className="focus:outline-none text-base leading-6 mt-8 text-gray-600 2xl:pr-24 xl:pr-0 pr-12">
                            Don’t get carried away with super-short paragraphs. The secret to one-sentence paragraphs is to use them like a spice: A pinch of cumin can make a meal more savor.
                        </p>
                    </div>
                   
                </div>
            </div>
        </>
    );
}

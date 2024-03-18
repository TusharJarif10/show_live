import React from "react";

export default function Home() {
    return (
        <>
            <div className="xl:px-20 px-5 pb-5  xl:mx-auto bg-slate-50">
                <h1 className="xl:text-4xl md:text-4xl text-2xl leading-tight text-center font-extrabold text-gray-800 sm:mb-0 mb-12 uppercase">
                    More Than 10 Years We Provide Service <br className="md:block hidden" />
                    in various Industry
                </h1>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
                    <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" />
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                        <p className="text-3xl font-semibold text-gray-800">400K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">people benifited directly/indirectly</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4  sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                        <p className="text-3xl font-semibold text-gray-800">10+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Companies Actively Providing Services</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                        <p className="text-3xl font-semibold text-gray-800">15K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">people is being engaged through those company.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

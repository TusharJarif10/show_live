import { Fragment, useState } from "react";
import RecentModal from "./RecentWorkModal.jsx";

import r1 from "../assets/wb.jpeg";
import r2 from "../assets/wd.jpeg";
import r3 from "../assets/wa.jpeg";
import r4 from "../assets/wc.jpeg";


const RecentWork = () => {

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    

    return (
        <>
            <Fragment>

                <div className="2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 md:py-12 md:px-6 py-9 px-4">
                    <div className="flex flex-col items-center justify-center ">
                        <h1 className="text-4xl font-extrabold leading-10 text-gray-800 text-center mb-5 uppercase pt-5" >Recent Works</h1>
                        <p className="text-base leading-6 text-center text-gray-600 sm:w-96 md:w-9/12 lg:w-5/12 mt-4">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-x-0 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6">


                        <div className="relative flex items-center justify-center" >
                            <img className="animate-jump  w-[400px] h-[465px]" src={r1} alt="chair" />
                            <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                                <div className="flex items-center justify-center flex-col h-full">
                                    {/* <h2 className="xl:px-10 md:px-2 px-7 text-2xl leading-normal text-center font-bold text-black">Life Stories</h2>
                                    <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-black font-bold mt-4">Your Premier Event Management Partner</p> */}
                                </div>
                                <div  className="px-4 md:w-auto w-full  ">
                                    <button onClick={() => setShowModal1(true)} className="w-full hover:bg-teal-100  transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-orange-200 focus:outline-none">Read more</button>
                                </div>
                            </div>
                        </div>


                        <div className="relative flex items-center justify-center">
                            <img className="w-[400px] h-[465px]" src={r2} alt="chair" />
                            <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                                <div className="flex items-center justify-center flex-col h-full">
                                    {/* <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-7 lg:leading-7 text-center text-teal-100">Minimimalism and modern day architecture</h2>
                                    <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-teal-100 mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p> */}
                                </div>

                                <div className="px-4 md:w-auto w-full">
                                    <button onClick={() => setShowModal2(true)} className="w-full hover:bg-teal-100  transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-orange-200 focus:outline-none">Read more</button>
                                </div>
                            </div>
                        </div>


                        {/* <div className="relative flex items-center justify-center">
                            <img src="https://i.ibb.co/3ctkDMB/img-3.png" alt="chair" />
                            <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                                <div className="flex items-center justify-center flex-col h-full">
                                    <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold sm:w-auto leading-normal text-center text-teal-100">Layout setting and mood</h2>
                                    <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-teal-100 mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </div>
                                <div className="px-4 md:w-auto w-full">
                                    <button className="w-full hover:bg-teal-100 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-orange-200 focus:outline-none">Read more</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <RecentModal isVisible={showModal1} onClose={() => setShowModal1(false)}>
                    <div className="pr-5 pl-5">
                        <h1 className='text-2xl font-bold pb-2 pt-4 '>Life Stories</h1>
                        <h2 className='text-lg font-bold pb-10 '>Your Premier Event Management Partner</h2>

                        <ul className="flex gap-[17rem] justify-between">
                            <li>
                                <img className="w-[250px] h-[250px] absolute" src={r3} alt="chair" />
                            </li>
                            <li>
                                <p className="">
                                    Life Stories is a leading event management company that offers a comprehensive range of services to cater to all your event needs. With a focus on creativity, innovation, and attention to detail, we are dedicated to delivering exceptional experiences for our clients. From corporate conferences and product launches to social gatherings and weddings, our team of experienced professionals works closely with you to bring your vision to life.
                                </p>
                                <p className="">
                                    Our personalized approach, coupled with our expertise in logistics, production, and design, ensures that every event we manage is executed seamlessly and leaves a lasting impression on your guests.
                                </p>
                            </li>
                        </ul>
                    </div>
                </ RecentModal>

                <RecentModal isVisible={showModal2} onClose={() => setShowModal2(false)}>
                    <div className="pr-5 pl-5">
                        <h1 className='text-2xl font-bold pb-2 pt-4 '>Festivida Event Management</h1>
                        <h2 className='text-lg font-bold pb-10 '> Elevating Your Events to New Heights</h2>

                        <ul className="flex gap-[17rem] justify-between">
                            <li>
                                <img className="w-[250px] h-[250px] absolute" src={r4} alt="chair" />
                            </li>
                            <li>
                                <p className="">
                                    Festivida Event Management is a visionary event management company that combines creative vision with flawless execution to bring your event ideas to life
                                    Whether it's a lavish gala, intimate wedding, or corporate retreat, Gala Affairs is dedicated to exceeding expectations and creating memorable experiences for all involved.

                                </p>
                            </li>
                        </ul>
                    </div>
                </ RecentModal>

            </Fragment>

        </>
    );
};

export default RecentWork;

import { Fragment, useState } from "react";
import Modal from "./Modal.jsx";


export const Team = () => {

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);


    return (
        <>
            <Fragment>

                <div className="xl:mx-auto  2xl:px-20 px-6 py-20 bg-slate-100">
                    <h1 className="text-4xl font-extrabold leading-10 text-gray-800 text-center uppercase">Meet our team</h1>
                    <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 ml-[5rem] mr-[5rem] xl:gap-6 gap-4">

                        <div className="lg:w-96 w-80">
                            <img src="https://i.ibb.co/Vm2T6Gj/team-1.png" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />

                            <div className="bg-white shadow-md rounded-md py-4 text-center cursor-pointer " onClick={() => setShowModal1(true)}>
                                <p className="text-base font-medium leading-6 text-gray-600">S M Forhad Hossain</p>
                                <p className="text-base leading-6 mt-2 text-gray-800">Consultant</p>
                            </div>

                        </div>


                        <div className="bg-indigo-700 rounded-md lg:w-96 w-80 flex flex-col items-center justify-center md:py-0 py-12">
                            <h3 className="text-2xl font-semibold leading-6 text-center text-white">About Team</h3>
                            <p className="lg:w-80 lg:px-0 px-4 text-base leading-6 text-center text-white mt-6">Teamwork is the collaborative effort of a team to achieve a common goal or to complete task in the most effective way. This concept is seen in the greater framework of a team in which indipendent indiviuals who work together towards common goal basic requirement for effective team and company</p>
                        </div>


                        <div className="lg:w-96 w-80">
                            <img src="https://i.ibb.co/85Y7MG9/team-2.png" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman in black dress" />
                            <div className="bg-white shadow-md rounded-md py-4 text-center" onClick={() => setShowModal2(true)}>
                                <p className="text-base font-medium leading-6 text-gray-600">Marilyn Rhodes</p>
                                <p className="text-base leading-6 mt-2 text-gray-800">CEO</p>
                            </div>
                        </div>


                        <div className="lg:w-96 w-80">
                            <img src="https://i.ibb.co/wKq8ZCW/team-3.png" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                            <div className="bg-white shadow-md rounded-md py-4 text-center" onClick={() => setShowModal3(true)}>
                                <p className="text-base font-medium leading-6 text-gray-600">Marry Smith</p>
                                <p className="text-base leading-6 mt-2 text-gray-800">Writer</p>
                            </div>
                        </div>


                        <div className="lg:w-96 w-80">
                            <img src="https://i.ibb.co/TKzGPFx/team-4.png" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                            <div className="bg-white shadow-md rounded-md py-4 text-center" onClick={() => setShowModal4(true)}>
                                <p className="text-base font-medium leading-6 text-gray-600">John Renolds</p>
                                <p className="text-base leading-6 mt-2 text-gray-800">Developer</p>
                            </div>
                        </div>


                        <div className="lg:w-96 w-80">
                            <img src="https://i.ibb.co/Lng30RF/team-5.png" className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                            <div className="bg-white shadow-md rounded-md py-4 text-center" onClick={() => setShowModal5(true)}>
                                <p className="text-base font-medium leading-6 text-gray-600">Annie Jackie</p>
                                <p className="text-base leading-6 mt-2 text-gray-800">Designer</p>
                            </div>
                        </div>

                    </div>
                </div>




                <Modal isVisible={showModal1} onClose={() => setShowModal1(false)}>
                    <div>
                        <h1 className='text-2xl font-semibold pb-2 pt-4 font-serif'>S M Forhad Hossain</h1>
                        <h2 className='text-lg font-semibold pb-10 font-serif'>Consultant</h2>
                        <p className=" text-center leading-normal font-mono pr-10 pl-10">
                        As a consultant, my role is to leverage my expertise and experience to address clients' needs effectively. Through careful analysis and strategic thinking, I provide tailored solutions that drive growth, optimize processes, and solve complex challenges. Whether it's in management, finance, technology, or another domain, I strive to deliver measurable results and empower my clients to achieve their goals with confidence and clarity.
                        </p>
                    </div>
                </ Modal>

                   <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
                    <div>
                        <h1 className='text-2xl font-semibold pb-2 pt-4 font-serif'>Samanta Jane</h1>
                        <h2 className='text-lg font-semibold pb-10 font-serif'>Deginer</h2>
                        <p className=" text-center leading-normal font-mono pr-10 pl-10">
                        As CEO, I recognize the invaluable contribution of consultants to our organization's success. Consultants bring fresh perspectives, specialized skills, and strategic insights that complement our internal expertise. Whether it's navigating market trends, implementing new technologies, or optimizing operations, consultants provide crucial support in driving innovation and achieving our business objectives. I value their collaboration and the diverse perspectives they bring, helping us stay agile and competitive in a dynamic business environment.
                        </p>
                    </div>
                </ Modal>

                   <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
                    <div>
                        <h1 className='text-2xl font-semibold pb-2 pt-4 font-serif'>Samanta Jane</h1>
                        <h2 className='text-lg font-semibold pb-10 font-serif'>Deginer</h2>
                        <p className=" text-center leading-normal font-mono pr-10 pl-10">
                            Teamwork is the collaborative effort of a team to achieve a common goal or to complete task in the most effective way. This concept is seen in the greater framework of a team in which indipendent indiviuals who work together towards common goal basic requirement for effective team and company
                        </p>
                    </div>
                </ Modal>

                   <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}>
                    <div>
                        <h1 className='text-2xl font-semibold pb-2 pt-4 font-serif'>Samanta Jane</h1>
                        <h2 className='text-lg font-semibold pb-10 font-serif'>Deginer</h2>
                        <p className=" text-center leading-normal font-mono pr-10 pl-10">
                            Teamwork is the collaborative effort of a team to achieve a common goal or to complete task in the most effective way. This concept is seen in the greater framework of a team in which indipendent indiviuals who work together towards common goal basic requirement for effective team and company
                        </p>
                    </div>
                </ Modal>

                   <Modal isVisible={showModal5} onClose={() => setShowModal5(false)}>
                    <div>
                        <h1 className='text-2xl font-semibold pb-2 pt-4 font-serif'>Samanta Jane</h1>
                        <h2 className='text-lg font-semibold pb-10 font-serif'>Deginer</h2>
                        <p className=" text-center leading-normal font-mono pr-10 pl-10">
                            Teamwork is the collaborative effort of a team to achieve a common goal or to complete task in the most effective way. This concept is seen in the greater framework of a team in which indipendent indiviuals who work together towards common goal basic requirement for effective team and company
                        </p>
                    </div>
                </ Modal>

            </Fragment>
        </>
    );
};

export default Team;
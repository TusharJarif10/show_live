import React, { Children } from 'react'
import { X } from 'lucide-react';

const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
       flex justify-center items-center" id='wrapper' onClick={handleClose}>
           
                {/* <button className='text-white'>
                    <X />
                </button> */}
                <div className='bg-white p-2 rounded-lg text-indigo-700 h-[500px] w-[700px]'>

                    {/* <div>
                        <h1 className='text-2xl font-semibold pb-2 pt-4 font-serif'>Samanta Jane</h1>
                        <h2 className='text-lg font-semibold pb-10 font-serif'>Deginer</h2>
                        <p className=" text-center leading-normal font-mono pr-10 pl-10">
                            Teamwork is the collaborative effort of a team to achieve a common goal or to complete task in the most effective way. This concept is seen in the greater framework of a team in which indipendent indiviuals who work together towards common goal basic requirement for effective team and company
                        </p>
                    </div> */}

                    {children}

                </div>
           

        </div>
    )
}

export default Modal;

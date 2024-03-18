import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/agventure-2.png";

import { navItems } from "./NavItems";
import NavLinks from "./NavLinks";


function Navbar() {

  const [open, setOpen] = useState(false)

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
}


  return (
    <>
      <nav className='bg-white '>
        <div className="z-50 flex items-center font-medium justify-around">
          <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
            <Link to={"/"}>
            <img src={logo} alt="logo" className="md:cursor-pointer h-9" />
            </Link>
            <div className='text-3xl md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
              <i className={`${open ? "fas fa-times" : "fas fa-bars"}`}>
              </i>
            </div>
          </div>

          <ul className=' md:flex hidden  items-center gap-8 font-[Poppins]'>
            <li>
              <Link to={"/"} className="py-6 px-3 inline-block text-indigo-700 font-bold hover:text-orange-600">
                Home
              </Link>
            </li>
            <NavLinks></NavLinks>
          </ul>

<Link to={"/emailForm"}>
<button type="button" class="focus:outline-none text-white font-bold bg-indigo-500 focus:ring-4 focus:ring-green-300 rounded-md text-md font-sans px-5 py-2.5 me-2 mb-2 hover:text-orange-500">CONTACT</button>
</Link>

          <div className='md:block hidden'>

          </div>
          {/* Mobile */}
          <ul className={`z-40
             md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
             duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}>
            <li>
              <Link to={"/"} className="py-6 px-3 inline-block  text-indigo-700 font-bold" id='wrapper' onClick={handleClose}>
                Home
              </Link>
            </li>
            <NavLinks></NavLinks>

            <div className="py-5">

            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

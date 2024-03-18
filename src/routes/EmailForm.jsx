import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function EmailForm() {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_76rkata', 'template_k45twpd', form.current, '2BYNTyQuI7AkqPAQf')

        .then((result) => {
            console.log(result);
            alert('Email sent successfully');
        })
        
        .catch((error) => {
            console.log(error);
            alert('Something went wrong');
        });
    };


  return (
   <>
   <Navbar />

   <div className="bg-slate-200 h-[55rem] w-full pt-10 md:h-[60rem] sm:h-[67rem] flex justify-center items-center">

   <div className="w-full flex items-center justify-center my-12 ">

    <form ref={form} onSubmit={(e) => sendEmail(e)}  className="absolute top-40 bg-indigo-700 shadow rounded-lg py-12 lg:px-28 px-8 mt-[5rem]">

    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-white font-sans">CONTACT WITH US</p>

      {/* ..............name and email section............ */}

    <div className="md:flex items-center mt-12">

      <div className="md:w-72 flex flex-col">
    <label for="name" class="block mb-2 text-sm font-medium text-white font-sans">Your Name</label>
    <input type="text" id="name" class="shadow-sm bg-gray-50 border
     border-gray-300 text-gray text-sm rounded-lg focus:ring-blue-500
      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200
       dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600
        dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  name="user_name"  placeholder='name' required />
     </div>

     <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
    <label for="useremail" class="block mb-2 text-sm font-medium text-white font-sans">Your Email</label>
    <input type="email" id="useremail" class="shadow-sm bg-gray-50 border
     border-gray-300 text-gray text-sm rounded-lg focus:ring-blue-500
      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600
       dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500
        dark:focus:border-blue-500 dark:shadow-sm-light" name="user_email" placeholder='example@gmail.com' required />
         </div>

       </div>

   {/* ..............name and email section............ */}
 
    {/* ..............messsage section............ */}

    <div className="w-full flex flex-col mt-8">
  <label for="message" class="block mb-2 text-sm font-medium text-white font-sans">Your message</label>
  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm
   text-gray-900 bg-gray-50 rounded-lg border border-gray-700
    focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200
     dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600
      dark:focus:ring-blue-500 dark:focus:border-blue-500" name="message" placeholder="leave a comment..."></textarea>
  </div>

  {/* <button type="submit" id="btn" class="text-white bg-blue-700
   hover:bg-blue-800 focus:ring-4 focus:outline-none 
   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
    dark:bg-blue-600 dark:hover:bg-blue-700
     dark:focus:ring-blue-800">Submit</button> */}

       {/* ..............messsage section............ */}


         {/* ..............button section............ */}

<p className="text-xs leading-3 text-white-900 font-bold font-sans mt-4 text-white">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">

                        <button  type="submit" id="btn" className="mt-9 text-base leading-none font-sans text-indigo-700 font-extrabold py-4 px-10
                         bg-white  rounded-md hover:text-indigo-700 hover:bg-orange-500  focus:ring-2 focus:ring-offset-2
                          focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                    </div>

                      {/* ..............button section............ */}

</form>

</div>
   </div>

   <Footer />

   </>
  )
}

export default EmailForm;

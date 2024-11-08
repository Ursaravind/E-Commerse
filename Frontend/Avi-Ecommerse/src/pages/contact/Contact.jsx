import React, { useState } from 'react';
import Footer from '../../copmponents/Footer';

const Contact = () => {
    const[msg,setMsg] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        setMsg("Form Submitted Succesfully")
    }
   
  return (
    <>
      <h1 className='text-center mt-12 font-bold mb-8 font-serif text-4xl text-gray-800'>
        Contact <span className='text-primary'>Us</span> <i className="ri-contacts-book-2-fill"></i>
      </h1>
      <div className='flex justify-center items-center'>
        <div className='bg-gray-100 shadow-lg shadow-black rounded-lg px-12 py-8 max-w-md w-full'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="name">Name</label>
              <input 
                id="name" 
                className="w-full px-4 py-2 outline-none rounded-md border border-gray-300 focus:ring-2 focus:ring-primary" 
                placeholder='Enter your name' 
                type="text" required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">Email</label>
              <input 
                id="email" 
                className="w-full px-4 py-2 outline-none rounded-md border border-gray-300 focus:ring-2 focus:ring-primary" 
                placeholder='Enter your email' 
                type="email" required 
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="mobile">Mobile</label>
              <input 
                id="mobile" 
                className="w-full px-4 py-2 outline-none rounded-md border border-gray-300 focus:ring-2 focus:ring-primary" 
                placeholder='Enter your mobile number' 
                type="tel" required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                className="w-full px-4 py-2 h-24 outline-none rounded-md border border-gray-300 focus:ring-2 focus:ring-primary resize-none" 
                placeholder='Write your queries here'
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className='w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-orange-600 transition-all duration-200'
              >
                Submit
              </button>
              <div className='mt-5 text-center'>
                {msg && <p className='text-green-600 font-semibold'>{msg}</p> }
              </div>
              
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;

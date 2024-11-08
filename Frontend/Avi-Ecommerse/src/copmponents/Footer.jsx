import React from 'react'
import i1 from '../assets/instagram-1.jpg'
import i2 from '../assets/instagram-2.jpg'
import i3 from '../assets/instagram-3.jpg'
import i4 from '../assets/instagram-4.jpg'
import i5 from '../assets/instagram-5.jpg'
import i6 from '../assets/instagram-6.jpg'
const Footer = () => {
  return (
    <>
    <footer className='section__container footer__container'>
        <div className="footer__col">
            <h4>CONTACT INFO</h4>
            <p>
                <span><i className='ri-map-pin-2-fill'></i></span>
                507800 KPHB phase-3 Hyderabad
            </p>
            <p>
            <span><i className='ri-mail-fill'></i></span>
                support@avi_ecommers.com
            </p>
            <p>
                <span><i className='ri-phone-fill'></i></span>
                +91 9347733508
            </p>
        </div>
        <div className="footer__col">
            <h4> Follow Us On
            </h4>
            <p >
            <i className="ri-instagram-line  text-2xl hover:text-pink-600 text-pink-500"></i>
            
            <i className="ri-facebook-circle-fill ml-5 text-2xl hover:text-blue-600 bg-bl text-blue-500"></i>          
           
            <i className=" ri-twitter-fill ml-5 text-2xl hover:text-blue-600 bg-bl text-blue-500"></i>
            </p>
        </div>   
        <div className="footer__col">
            <h4>COMPANY</h4>
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Work with Us</a>
            <a href="/">Our Blog</a>
            <a href="/">Terms & Conditions</a>
        </div>   
        <div className="footer__col">
            <h4>USEFULL LINKS</h4>
            <a href="/">Help</a>
            <a href="/">Track My Order</a>
            <a href="/">Men</a>
            <a href="/">Women</a>
            <a href="/">Dresses</a>
            
        </div>
       
    </footer>
    <div className='text-center mb-5'>
        <h1 className="text-xl font-bold">Your <span className='text-primary'> Avi_ECommerce</span> Store</h1>
        <p>© 2024 All rights reserved</p>
    </div>  
    <div className="text-center mt-8 mb-5">
          <p>
            Built with ♥ by <a href="https://yoursite.com" className="font-bold underline">Your E-Commerce Team</a>
          </p>
    </div>

    </>
  )
}

export default Footer

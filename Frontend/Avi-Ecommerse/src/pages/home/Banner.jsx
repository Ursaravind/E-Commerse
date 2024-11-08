import React from 'react'
import bannerImg from "../../assets/header.png"
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <div className='section__container header__container'>
      <div className="header__content z-30 ">
        <h4 className='uppercase font-bold text-xl'>UP TO 20% Discount on</h4>
        <h1>Girl's Fashion</h1>
        <p className='mb-10'>"Discover the Best Deals of the Season!"
"Shop the Latest Trends at Unbeatable Prices!"
"Free Shipping on All Orders Over $50!"
"New Arrivals! Find Your Perfect Style Today!"
"Flash Sale: Up to 50% Off on Select Items!"</p>
      <Link to="/pages"><button className='btn' >EXPLORE NOW</button></Link>     
</div>
      <div className='header__image  '>
      <img src={bannerImg} alt="" />

      </div>
    </div>
  )
}

export default Banner

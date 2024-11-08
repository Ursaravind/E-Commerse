import React from 'react'
import dealsImg from '../../assets/deals.png'
const DealsSection = () => {
  return (
    <section className='section__container deals__container '>
      <div className='deals__image mt-22'>
        <img src={dealsImg} alt="" />
      </div>
      <div className="deals__content">
                
      <h5 className='text-5xl font-serif font-bold'>Get Up To 20% Discount</h5>
      <h5>“🔥 Hot Deals of the Day!”
        “🎉 Limited-Time Offers – Grab Them Before They’re Gone!”</h5>
        <p>“Discover exclusive deals on your favorite products. Shop now and save big before the sale ends!”
        “Hand-picked deals just for you. Get up to 20% off on top brands!”</p>
            <div className='deals__countdown '>
                <div className="deals__countdown__card">
                    <h4>14</h4>
                    <p>Days</p>
                </div>
                <div className="deals__countdown__card">
                    <h4>24</h4>
                    <p>Hours</p>
                </div>
                <div className="deals__countdown__card">
                    <h4>15</h4>
                    <p>Mins</p>
                </div>
                <div className="deals__countdown__card">
                    <h4>05</h4>
                    <p>Sec</p>
                </div>
            </div>
      </div>
    </section>
  )
}

export default DealsSection

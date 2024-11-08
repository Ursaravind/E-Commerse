import React from 'react'
const RatingStars = ({rating}) => {
    const stars = [];
    for(let i = 1;i<=5;i++){
        stars.push(
            <span key={i} className={`ri-star${i<=rating?'-fill':'-line'} text-yellow-500`} aria-label={`${i<=rating?'Filled':'Empty'} star`} ></span>
        )
    }
  return (
    <div className='product__rating '>
        {stars}
    </div>
  )
}
 
export default RatingStars

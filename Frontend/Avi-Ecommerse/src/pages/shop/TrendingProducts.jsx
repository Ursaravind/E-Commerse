import React, { useState } from 'react'
import ProductCards from './ProductCards';
import products from '../../data/products.json'

const TrendingProducts = () => {
    const[visibleProducts,setVisibleProducts] = useState(8);
    const loadMoreProducts = ()=>{
        setVisibleProducts(prevCount => prevCount+4);
    }
  return (
    <section className='section__container product__container'>
        <h2 className='section__header'>Trending Products</h2>
        <p className='section__subheader'>"Discover the hottest trends of the season with our exclusive collection of best-selling products! From stylish fashion pieces to cutting-edge tech gadgets, our trending products are handpicked to keep you ahead of the curve. Shop now and elevate your lifestyle with the latest must-haves that everyone is talking about!"</p>

      <div>
      <ProductCards products = {products.slice(0,visibleProducts)}  />
      </div>
      <div className='text-center mt-16'>
          {
            visibleProducts<products.length && (
              <button className='bg-primary px-3 py-3 rounded-lg shadow-lg shadow-black text-white font-bold ' onClick={loadMoreProducts} >Load More</button>
            )
          }
      </div>
    </section>
  )
}

export default TrendingProducts

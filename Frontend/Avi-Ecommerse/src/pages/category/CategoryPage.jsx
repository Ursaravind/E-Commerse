import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data/products.json'
import ProductCards from '../shop/ProductCards';
const CategoryPage = () => {
    const{categoryName} = useParams();
    const[filterdProducts,setFilterdProducts] = useState([])
    useEffect(()=>{
        const filtered = products.filter((product)=> product.category === categoryName.toLowerCase())
            setFilterdProducts(filtered);
    },[categoryName]);
    useEffect(()=>{
        window.scrollTo(0,0);
    })
  
    return (
    <div className='mt-5'>
    <section className='section__container shadow-lg shadow-black  rounded-xl bg-orange-400 '>
            <h2 className='section__header capitalize'>{categoryName}</h2>
            <p className='text-center  text-white'>Browse a diverse range of catgories, from chic dresses to versatile accessories. Elevate your style today!</p>

      
    </section>
    {/* products cards */}
    <div className='section__container'>
        <ProductCards products={filterdProducts} />
    </div>
    </div>
  )
}

export default CategoryPage

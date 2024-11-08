import React, { useState } from 'react'
import productsData from '../../data/products.json'
import ProductCards from '../shop/ProductCards';
import Footer from '../../copmponents/Footer';

const Search = () => {
    const[searchQuery,setSearchQuery] = useState('')
    const[filterdProducts,setFilterdProducts] = useState(productsData);
    const handleSearch = ()=>{
        const query = searchQuery.toLowerCase();
        const filtered = productsData.filter(product=>product.name.toLowerCase().includes(query)|| product.description.toLowerCase().includes(query))
        setFilterdProducts(filtered)
    }
  return (
    <div className='mt-5'>
          <section className='section__container shadow-lg shadow-black  rounded-xl bg-gradient-to-l from-pink1 via-pink2 via-pink3 to-pink4 '>
            <h2 className='section__header capitalize'>Search Here</h2>
            <p className='text-center font-bold text-white'>Browse a diverse range of catgories, from chic dresses to versatile accessories. Elevate your style today!</p>

      
          </section>
    <section className='section__container'>
            <div className='w-full mb-12 flex flec-col md:flex-row items-center justify-center gap-8'>
                <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
                placeholder='search products' className='search-bar w-full max-w-4xl outline-none focus:ring-1 focus:ring-orange-500 border-2 rounded py-1  ' />
                <button onClick={handleSearch} className='search-button w-full md:w-auto py-1 px-5 bg-primary rounded  text-white'>Seach</button>
            </div>
            <ProductCards products={filterdProducts}/>
    </section>
    <Footer/>

    </div>
  )
}

export default Search

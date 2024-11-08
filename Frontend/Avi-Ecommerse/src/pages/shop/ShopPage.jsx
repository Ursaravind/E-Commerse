import React, { useEffect, useState } from 'react'
import productsData from '../../data/products.json'
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';
import Footer from '../../copmponents/Footer';
const filters = {
  categories : ['all','accessories','dress','jewellery','cosmetics'],
  colors:['all','black','red','gold','blue','silver','beige','green'],
  priceRanges : [
                {label:'under 50$',min:0,max:50},
                {label:'$50-$100',min:50,max:100},
                {label:'$100-$200',min:100,max:200},
                {label:'$200 Above',min:200,max:Infinity}
  ]
}
const ShopPage = () => {
  const [products,setProducts] = useState(productsData);
  const[filterdState,setFilterdState] = useState({
    category:'all',
    color:'all',
    priceRange:''
  });
  const applyFilters = () => {
    let filteredProducts = productsData;
  
    // Filter by category
    if (filterdState.category && filterdState.category !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filterdState.category
      );
    }
  
    // Filter by color
    if (filterdState.color && filterdState.color !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filterdState.color
      );
    }
  
    // Filter by price range
    if (filterdState.priceRange) {
      const [min, max] = filterdState.priceRange.split('-').map(Number);
  
      filteredProducts = filteredProducts.filter((product) => {
        if (max) {
          // If there is a max limit, use both min and max
          return product.price >= min && product.price <= max;
        } else {
          // If max is undefined, it means "Above" range
          return product.price >= min;
        }
      });
    }
  
    setProducts(filteredProducts);
  };
    useEffect(()=>{
      applyFilters();

  },[filterdState]);
  const clearFilters = ()=>{
    setFilterdState({
      category:'all',
      color:'all',
      priceRanges:''
  
    })
  }
  return (
    <div className='mt-5'>
      <section className='section__container shadow-lg shadow-black  rounded-xl bg-gradient-to-l from-pink1 via-pink2 via-pink3 to-pink4 '>
            <h2 className='section__header capitalize'>Shop Here</h2>
            <p className='text-center font-bold text-white'>"Discover the Perfect Style for Every Moment ✨"</p>

      
          </section>
          <section className='section__container'>
            <div className='flex flex-col md:flex-row md:gap-8'>
              <ShopFiltering filters={filters} filterdState ={filterdState} setFilterdState = {setFilterdState} clearFilters = {clearFilters}/>
            <div>
              <h1 className='text-xl font-bold'>Products <span className='text-primary'>Available</span>  :{products.length}</h1>
              <ProductCards products={products} />
            </div>
            </div>
            <hr className='border-2' />
          <Footer/>
          </section>
        
    </div>
  )
}

export default ShopPage

import React from 'react'
import category1 from '../../assets/category-1.jpg';
import category2 from '../../assets/category-2.jpg';
import category3 from '../../assets/category-3.jpg';
import category4 from '../../assets/category-4.jpg';
import { Link } from 'react-router-dom'
const Categories = () => {
        const categories = [
            {name:'Accessories',path:"accessories",image:category1},
            {name:'Dress Collection',path:"dress",image:category2},
            {name:'Jewellery',path:"jewellery",image:category3},
            {name:'Cosmotics',path:"cosmetics",image:category4},
        ]
  return (
    <>
    <div className='product__grid'>
        {
            categories.map((category,index)=>(
                <Link key={index} className='shadow-lg shadow-black py-5 rounded-3xl transition-all  duration-500 hover:scale-110 ' to={`/categories/${category.path}`} >
                    <img className= ' w-2/3 ml-6 rounded-full ' src={category.image} alt={category.name} />
                    <h4 className='text-center mt-5 font-mono font-bold ' >{category.name}</h4>
                </Link>
            ))
        }

    </div>
    </>
  )
}

export default Categories

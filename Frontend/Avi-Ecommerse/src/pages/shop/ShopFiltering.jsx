import React from 'react'

const ShopFiltering = ({filters,filterdState,setFilterdState,clearFilters}) => {
  return (
    <div className='flex flex-col '>
    <h1 className='font-bold text-xl mb-10'>Filte <span className='text-primary'>Categories</span></h1>
    <div className='flex  rounded bg-gray-200  shadow-lg shadow-black  px-2 py-5 w-60'>
      <div className='px-8'>
        <hr />
        <div className='flex flex-col'>
        {
            filters.categories.map((category)=>(
                <label key={category}>
                    <input type="radio" className=' mt-5  ' name='category' id='category' value={category} checked={filterdState.category===category} onChange={(e)=>setFilterdState({...filterdState,category:e.target.value})} />
                    <span className='font-serif px-3 text-xl font-medium '>{category}</span>
                </label>
            ))
        }
        </div>
        <hr />
        <div className='flex flex-col mt-5'>
            <h1 className='text-xl font-bold '>Colors</h1>
            {
                filters.colors.map((color)=>(
                    <label key={color}>
                        <input type="radio" className='mt-5' value={color} checked = {
                            filterdState.color==color
                        } onChange={(e)=>setFilterdState({...filterdState,color:e.target.value})} />
                            <span className='font-serif px-3 text-xl font-medium' >{color}</span>
                    </label>
                ))
            }
            </div>
            <hr />
            <div className='flex flex-col mt-5'>
            <h1 className='text-xl font-bold '>Price Filters</h1>

        {filters.priceRanges.map((range) => (
          <label key={range.label}>
            <input className='mt-5'
              type="radio"
              name="priceRange"
              value={`${range.min}-${range.max || ''}`}
              checked={filterdState.priceRange === `${range.min}-${range.max || ''}`}
              onChange={(e) =>
                setFilterdState({ ...filterdState, priceRange: e.target.value })
              }
            />
            
            <span className='font-serif font-medium text-xl px-3' >{range.label}</span>
          </label>
        ))}
        </div>
        <hr />
        <button className='btn mt-10' onClick={clearFilters}>Clear Filters</button>     
        
         </div>
    </div>
          
    </div>
  )
}

export default ShopFiltering

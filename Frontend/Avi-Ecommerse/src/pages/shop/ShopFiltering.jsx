import React from 'react';

const ShopFiltering = ({ filters, filterdState, setFilterdState, clearFilters }) => {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-xl text-center mb-10'>
        Filter <span className='text-primary'>Categories</span>
      </h1>
      <div className='flex rounded bg-gray-200 shadow-lg shadow-black px-2 py-5 w-60'>
        <div className='px-8'>
          <hr />
          {/* Category Dropdown */}
          <div className='flex flex-col mb-5'>
            <label className='text-lg font-medium mb-3'>Select Category</label>
            <select
              value={filterdState.category}
              onChange={(e) => setFilterdState({ ...filterdState, category: e.target.value })}
              className='border border-gray-300 rounded p-2'
            >
              
              {filters.categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <hr />
          {/* Color Dropdown */}
          <div className='flex flex-col mt-5'>
            <label className='text-lg font-medium mb-3'>Select Color</label>
            <select
              value={filterdState.color}
              onChange={(e) => setFilterdState({ ...filterdState, color: e.target.value })}
              className='border border-gray-300 rounded p-2'
            >
             
              {filters.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <hr />
          {/* Price Range Dropdown */}
          <div className='flex flex-col mt-5'>
            <label className='text-lg font-medium mb-3'> Price Range</label>
            <select
              value={filterdState.priceRange}
              onChange={(e) => setFilterdState({ ...filterdState, priceRange: e.target.value })}
              className='border border-gray-300 rounded p-2'
            >
              <option value="">All Price Ranges</option>
              {filters.priceRanges.map((range) => (
                <option key={range.label} value={`${range.min}-${range.max || ''}`}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          <hr />
          <button className='btn mt-10' onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopFiltering;

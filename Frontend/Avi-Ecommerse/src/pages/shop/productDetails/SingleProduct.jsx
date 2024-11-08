import React from 'react';
import Footer from '../../../copmponents/Footer'; // Fixed import path
import { Link, useParams } from 'react-router-dom';
import RatingStars from '../../../copmponents/RatingStars'; // Fixed import path
import { useSelector } from 'react-redux';

const SingleProduct = () => {
    const { id } = useParams(); // Extract product ID from URL params
    const products = useSelector((state) => state.cart.products);

    // Find the specific product based on the ID
    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return <div>Product not found.</div>; // Handle case where product doesn't exist
    }

    return (
        <div className='mt-5'>
            <section className='section__container shadow-lg shadow-black rounded-xl bg-gradient-to-l from-pink1 via-pink2 via-pink3 to-pink4'>
                <h2 className='section__header capitalize'>| Discover Your Perfect Fit |  <i className="ri-shopping-cart-2-fill text-white"></i></h2>
                <p className='text-center font-bold text-white'>"Discover the Perfect Style for Every Moment ✨"</p>
                <div className='text-center mt-5 text-lg font-semibold font-serif text-white'>
                    <span className='hover:text-black'>
                        <Link to="/">Home</Link><i className="ri-arrow-right-fill"></i>
                    </span>
                    <span className='hover:text-black'>
                        <Link to="/pages">Shop</Link><i className="ri-arrow-right-fill"></i>
                    </span>
                </div>
            </section>
            <section className='section__container flex flex-col items-center md:flex-row gap-8'>
                <div className='md:w-1/2 w-full'>
                    <img className='shadow-lg w-full h-auto shadow-black rounded-lg' src={product.image} alt={product.name} />
                </div>
                <div className='md:w-1/2 w-full'>
                    <h3 className='font-bold text-xl'>{product.name}</h3>
                    <p className=''>₹{product.price}</p>
                    <p className=''>{product.description}</p>
                    <p>{product.color}</p>
                    <p className='flex font-bold '>
                        <RatingStars rating={product.rating} /> 
                       <span className='ml-2'>{product.rating}</span>  {/* Pass rating prop */}
                    </p>
                    <Link to="/purchaseproduct">
                    <button className='btn mt-5'>Buy Now</button>
                    </Link>
                </div>
                {/* Display reviews section */}
            </section>
            <section className='section__container'>
              <p>{product.comment}</p>
            </section>
            <Footer />
        </div>
    );
};

export default SingleProduct;

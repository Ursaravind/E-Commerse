import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../../redux/feautures/cart/cartSlice';
import RatingStars from '../../copmponents/RatingStars'
import { toast } from 'react-toastify';
const ProductCards = ({ products }) => {
const dispatch = useDispatch();

  // Local state to track items added to cart
  const [addedToCart, setAddedToCart] = useState([]);

  // Handler for adding to cart and updating button text
  const handleAddtoCart = (product) => {
    dispatch(addtoCart(product));
    toast.success("Product Added Succesfully ✨",{
      position:"top-center",
      autoClose:5000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
     });
    setAddedToCart([...addedToCart, product.id]);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:Lgrid-cols-8 gap-8 mt-10'>
      {products.map((product, index) => (
        <div key={index} className='product__card ml-1'>
          <div>
            <Link to={`/shop/${product.id}`}>
              <img
                src={product.image}
                alt=""
                className='max-h-96 md:h-64 w-full object-cover hover:scale-105 transition duration-500 shadow-xl shadow-black rounded-lg'
              />
            </Link>
            <div className='flex'>
              <div>
               {addedToCart.includes(product.id)?(
                <Link to='/cart'>
                  <button className='btn mt-10'>
                    <i className='ri-shopping-cart-2-line lg:text-2xl '>Go to Cart</i>
                  </button>
                </Link>
               ):(
                <button onClick={(e)=>{e.stopPropagation();
                handleAddtoCart(product);
                }}className="btn mt-10">
                    <i className='ri-shopping-cart-2-line lg:text-2xl '>Add to Cart</i>
                </button>
               )

               }
              </div>
              <div className='mt-10 ml-5 font-bold lg:text-lg'>
                <h4>{product.name}</h4>
                <p>
                  ₹{product.price}
                  {product?.oldPrice ? <s className='ml-2'>₹{product.oldPrice}</s> : null}
                </p>
                <div className='flex'>
                  < RatingStars rating={product.rating} />
                  <div className='ml-3'>
                    <p>{product.rating}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;

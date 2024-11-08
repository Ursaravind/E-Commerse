import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/feautures/cart/cartSlice';
import { Link } from 'react-router-dom';

const AddtoCartPage = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const calculateTotal = () => {
        return products.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="p-4 sm:p-6">
            {/* Header Section */}
            <section className="bg-gradient-to-l from-pink1 via-pink2 via-pink3 to-pink4 shadow-lg rounded-xl text-white p-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center">Your Cart <i className="ri-shopping-cart-2-fill"></i></h2>
            </section>

            {products.length === 0 ? (
                <div className="text-center font-semibold text-gray-500">Your Cart is Empty</div>
            ) : (
                <div>
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4"
                        >
                            {/* Product Image */}
                            <span className='mr-3 font-bold rounded text-white bg-primary px-2'>{index+1}</span>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover rounded-md mb-4 md:mb-0 md:w-32 md:h-32"
                            />

                            {/* Product Details */}
                            <div className="flex-1 text-center ml-16 md:text-left">
                                <h5 className="text-lg font-bold">{item.name}</h5>
                                <p className="text-sm text-gray-600">Price: ${Number(item.price).toFixed(2)}</p>
                                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="mt-2 font-bold bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Cart Summary */}
                    <div className="text-right mt-2 mr-10">
                        <h3 className="text-xl font-bold">Total: ${calculateTotal()}</h3>
                    </div>
                    <div className='flex items-center justify-center font-bold'>
                      <Link to="/purchaseproduct">  <button className='btn mt-8 h-16 '>Proceed to Check out</button>
                      </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddtoCartPage;

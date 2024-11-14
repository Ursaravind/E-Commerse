import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaMoneyBillAlt, FaCreditCard, FaWallet } from 'react-icons/fa';
import { removeFromCart } from '../../redux/feautures/cart/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PurchaseProduct = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    const [paymentMethod,setpaymentMethod] = useState("COD")
    
    const calculateTotal = () => {
        return products.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };
    const handlePlaceOrder = ()=>{
        toast.success("Order Placed Successfully 🎉",{
            position:"top-center",
            autoClose:"3000",
            hideProgressBar:false,
            closeOnClick : true,
            pauseOnHover:true

        })
    }


    return (
        <div className=" CartPage max-w-xl mt-16 mx-auto p-5  bg-white shadow-2xl shadow-black rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-5">Purchase Product</h2>

            {products.length === 0 ? (
                <div className="text-center font-semibold  text-gray-500 ">Your Cart is Empty</div>
            ) : (
                <div>
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center justify-between bg-gray-100 shadow-md rounded-lg p-4 mb-4"
                        >
                            {/* Product Image */}
                           
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 mr-5 h-24 object-cover rounded-md mb-4 md:mb-0 md:w-32 md:h-32"
                            />

                            {/* Product Details */}
                            <div className="flex-1 text-center md:text-left">
                                <h5 className="text-lg font-semibold">{item.name}</h5>
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
                    <div className="text-right mt-2">
                        <h3 className="text-xl font-bold">Total: ${calculateTotal()}</h3>
                    </div>
                </div>
            )}

            <div className="mt-6">
                <h3 className="text-lg font-semibold">Payment Options</h3>

                {/* Cash on Delivery (COD) Option */}
                <div className="flex items-center my-2 p-2 border-b border-gray-300">
                   <input type="radio" className='mr-3 '   value="COD" name='paymentMethod' checked={paymentMethod=="COD"} onChange={(e)=>setpaymentMethod(e.target.value)} /> <FaMoneyBillAlt className="text-xl mr-2 text-gray-700" />
                    <span>Cash on Delivery (COD)</span>
                </div>

                {/* EMI Option */}
                <div className="flex items-center my-2 p-2 border-b border-gray-300">
                <input type="radio" className='mr-3 '   value="EMI" name='paymentMethod' checked={paymentMethod=="EMI"} onChange={(e)=>setpaymentMethod(e.target.value)} />
                    <FaWallet className="text-xl mr-2 text-gray-700" />
                    <span>EMI Available</span>
                </div>

                {/* Credit Card Option */}
                <div className="flex items-center my-2 p-2">
                <input type="radio" className='mr-3 '   value="Credit" name='paymentMethod' checked={paymentMethod=="Credit"} onChange={(e)=>setpaymentMethod(e.target.value)} />
                    <FaCreditCard className="text-xl mr-2 text-gray-700" />
                    
                    <span>Credit Card</span>
                </div>
                <div>
                    <button onClick={handlePlaceOrder} className='btn mt-5'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default PurchaseProduct;

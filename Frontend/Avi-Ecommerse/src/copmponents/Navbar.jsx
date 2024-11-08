import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddtoCartPage from '../pages/shop/AddtoCartPage'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
    const products = useSelector((state)=>state.cart.products);
    const navigate = useNavigate();
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem("expirationTime")
       toast.info("you have been logged out Successfully",{
        position:"top-center",
        autoClose:5000,
       })
          setTimeout(()=>{
        navigate("/")
        
    },5000)

}
const handleMouseClick = ()=>setDropdownVisible(true);

  return (
    <header className='fixed-nav-bar w-nav bg-gray-100 shadow-xl'>
        <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center'>
            <ul className='nav__links'>
                <li className='link bg-primary py-2 px-2 rounded-lg hover:bg-white transition duration-300  ' ><Link to="/"><span className='text-white hover:text-black'>Home</span></Link></li>
                <li className='link bg-primary py-2 px-2 rounded-lg hover:bg-white transition duration-300  ' ><Link to="/pages"><span className='text-white hover:text-black'>Shop</span></Link></li>
                
                <li className='link bg-primary py-2 px-2 rounded-lg hover:bg-white transition duration-300' ><Link to="/contact"><span className='text-white hover:text-black'>Contact</span></Link></li>
            </ul>
            {/* logo icons */}
            <div className="nav__logo">
                <Link>Avi_<span>Shopping</span></Link>
            </div>
            {/* nav icons */}
            <div className="nav__icons relative ">
                <span>
                    <Link to="/search"><i className="ri-search-line lg:ml-6 ml-2  "></i></Link>
                </span>
                <span>
                   <button onClick={()=>navigate('/cart')} className='lg:text-lg  text-red-500'>
                   <i className="ri-shopping-cart-2-line"></i>
                   <sup className='text-sm   px-1.5   text-white  bg-primary rounded-full text-center ' >{products.length}</sup>
                   </button>
                </span>
                <span className='mr-10   lg:mr-0'>
                    <Link to="/login">
                
                    <i onMouseEnter={handleMouseClick} className="ri-user-fill border-2  bg-primary text-white rounded-full px-2 py-2 mr-5  outline-none hover:bg-white hover:text-black transition duration-300  ">
                       </i>
                      
                    
                    </Link>
                  {
                  isDropdownVisible && ( 
                    <button  onClick = {handleLogout}className='ml-5 bg-primary px-3 text-white font-bold rounded-lg text-lg'>Logout</button>
                 ) }
                
                </span>
            </div> 
        </nav>
    </header>
  )
}

export default Navbar
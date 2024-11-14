import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
function Login() {
    const[email,setEmail] = useState('');
    const[msg,setMsg] = useState('')
    const[password,setPassword]  = useState('');
    const navigate = useNavigate();
      useEffect(()=>{
        const token = localStorage.getItem('token');
        const expirationTime = localStorage.getItem('expirationTime')
        if(token && expirationTime && Date.now()<expirationTime){
          navigate("/myprofile")
        }
      },[])

      const handleLogin = async (e)=>{
          e.preventDefault();
          try{
            const response = await axios.post("https://e-commerse-6per.onrender.com/login",{
              email,
              password,
            });
            const token = response.data.token;
            const expirationTime = Date.now()+60*60*1000;//1 hour from now
            localStorage.setItem('token',token)
            localStorage.setItem('expirationTime',expirationTime);
           
            if(response.status==200){
             toast.success("Login Successfully!",{
              position:"top-center",
              autoClose:5000,
              hideProgressBar:false,
              closeOnClick:true,
              pauseOnHover:true,
              draggable:true,
             });
             setTimeout(()=>navigate("/"),3000);
            }
          }
          catch(err){
           window.alert("Invalid Login Credentials")
           window.location.reload();
      }
    }

  return (
    <div>
    
      <h1 className='text-center mt-12 font-bold mb-8 font-serif text-4xl text-gray-800'>
        please<span className='text-primary'> Login </span>  <i className="ri-contacts-book-2-fill"></i>
      </h1>
      <div className='flex justify-center items-center'>
        <div className='bg-gray-100 shadow-lg shadow-black rounded-lg px-12 py-8 max-w-md w-full'>
          <form onSubmit={handleLogin} className='space-y-6' >
            <div>
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="name">Email</label>
              <input onChange={(e)=>setEmail(e.target.value)}
                id="email" 
                className="w-full px-4 py-2 outline-none rounded-md border border-gray-300 focus:ring-2 focus:ring-primary" 
                placeholder='Enter email' 
                type="email" required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">password</label>
              <input onChange={(e)=>setPassword(e.target.value)}
                id="password" 
                className="w-full px-4 py-2 outline-none rounded-md border border-gray-300 focus:ring-2 focus:ring-primary" 
                placeholder='Enter your password' 
                type="password" required 
              />
                {
                msg && <p className='text-red-500'>{msg}</p>
                }

            </div> 
           
            <div>
              <button 
                type="submit" 
                className='w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-orange-600 transition-all duration-200'
              >
                Login
              </button>

              <div className='mt-5 text-center'>
                <p className='italic'>Dont have an account? <Link to="/rigister" className='underline text-primary'>Rigister here</Link>  </p>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

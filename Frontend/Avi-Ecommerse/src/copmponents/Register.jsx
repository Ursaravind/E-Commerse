import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword,setConfirmpassword] = useState('')
  const navigate = useNavigate(); // Initialize navigate function

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://e-commerse-6per.onrender.com/register',{
        username,
        email,
        password,
        confirmpassword
               // Enables sending cookies with the request
      });
      const token = response.data.token;
      localStorage.setItem('token',token);
      
      if (response.status === 200) {
        alert('Registered Successfully');

        navigate('/login'); // Redirect to login page after successful registration
      }
      
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed, please try again.');
    }
  };

  return (
    <>
      <h1 className='text-center mt-12 font-bold mb-8 font-serif text-4xl text-gray-800'>
        Register <span className='text-primary'>Now</span> <i className="ri-contacts-book-2-fill"></i>
      </h1>
      <div className='flex justify-center items-center'>
        <div className='bg-gray-100 shadow-lg shadow-black rounded-lg px-12 py-8 max-w-md w-full'>
          <form onSubmit={handleRegister} className='space-y-6'>
            <div>
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="name">User name</label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                id="name"
                className="w-full px-4 py-2 outline-none rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
                placeholder='Enter your name'
                type="text"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="w-full px-4 py-2 outline-none rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
                placeholder='Enter your email'
                type="email"
                required
              />
            </div>
           
            <div>
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="w-full px-4 py-2 outline-none rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
                placeholder='set your password'
                type="password"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-2" htmlFor="password">Confirm password</label>
              <input
                onChange={(e) => setConfirmpassword(e.target.value)}
                id="password"
                className="w-full px-4 py-2 outline-none rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
                placeholder='confirm password'
                type="password"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className='w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-orange-600 transition-all duration-200'
              >
                Submit
              </button>
            </div>
          </form>
          <div className='mt-5 text-center'>
            <p className='italic'>Already have an account? <Link to="/login" ><span className='text-primary'>login</span></Link> here</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

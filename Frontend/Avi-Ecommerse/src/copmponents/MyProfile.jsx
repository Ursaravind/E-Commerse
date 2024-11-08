import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Add a loading state
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const expirationTime = localStorage.getItem("expirationTime");

        // Check if token or expiration time is missing or expired
        if (!token || !expirationTime || Date.now() > expirationTime) {
            navigate('/login');
            return;
        }

        // Fetch user profile if the token is valid
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get("http://localhost:5000/myprofile", {
                    headers: { 'x-token': token }
                });
                setUser(response.data);
                setLoading(false); // Set loading to false after data is fetched
            } catch (err) {
                console.log(err);
                navigate('/login');
            }
        };

        fetchUserProfile();
    }, [navigate]);

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-300'>
        {loading ? (
            <p className="text-orange-500 text-xl animate-pulse">Loading...</p>
        ) : user ? (
            <div className='flex flex-col items-center bg-gray-900 text-white rounded-lg p-8 space-y-4 shadow-lg transform hover:scale-105 transition-transform duration-300'>
                <div className='relative'>
                    <i className="ri-user-fill text-9xl text-orange-500 rounded-full p-4 shadow-md"></i>
                    <div className='absolute top-2 right-2 bg-green-500 rounded-full w-3 h-3 border-2 border-black'></div>
                </div>
                <h1 className='text-3xl font-bold text-white'>Welcome to <span className='text-orange-500'>Avi_Shopping</span></h1>
                <p className='text-lg font-semibold text-gray-400'>⭐ Discover the new Trends ⭐</p>
                <div className="bg-orange-500 text-black rounded-lg p-4 w-full text-center">
                    <p className='font-semibold'>Username: {user.username}</p>
                    <p className='font-semibold'>Email: {user.email}</p>
                </div>
                <button className='mt-4 px-6 py-2 bg-orange-500 text-black font-bold rounded-full shadow-md hover:bg-orange-600 hover:text-white transition-colors duration-300'>
                    Edit Profile
                </button>
            </div>
        ) : (
            <p className="text-orange-500 text-xl">Failed to load user profile</p>
        )}
    </div>   
    
);
};

export default MyProfile;

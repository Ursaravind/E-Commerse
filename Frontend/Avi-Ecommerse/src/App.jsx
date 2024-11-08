
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './copmponents/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
    <Navbar/>
     <Outlet />
     <ToastContainer 
       position="top-center" 
       autoClose={3000} 
       hideProgressBar={false} 
       newestOnTop={false} 
       closeOnClick 
       rtl={false} 
       pauseOnFocusLoss 
       draggable 
       pauseOnHover 
    />
    </>
 
  )
}

export default App

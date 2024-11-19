import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";
import Contact from "../pages/contact/Contact";
import ShopPage from "../pages/shop/ShopPage";
import SingleProduct from "../pages/shop/productDetails/SingleProduct";
import AddtoCartPage from "../pages/shop/AddtoCartPage";
import Login from "../copmponents/Login";
import { Navigate } from "react-router-dom";
import Register from "../copmponents/Register";
import MyProfile from "../copmponents/MyProfile";
import PurchaseProduct from "../pages/shop/PurchaseProduct";
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const expirationTime = localStorage.getItem('expirationTime');
  return token && expirationTime && Date.now() < expirationTime;
};

// Route wrapper to conditionally render protected routes
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};
const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children: [ 
                  {path:"/",element: <Home/>},
                  {path:"/categories/:categoryName",element:<CategoryPage/>},
                  {path:"/search",element:<Search/>},
                  {path:"/contact",element:<Contact/>},
                  {path:"/pages",element:<ShopPage/>},
                  {path:"/shop/:id",element:<SingleProduct/>},
                  {path:"/cart",element:<AddtoCartPage/>},
                  {path:"/myprofile",element:<ProtectedRoute element={<MyProfile/>}/>},
                  {path:"/purchaseproduct",element:<PurchaseProduct/>}

      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/rigister",
      element:<Register/>
    }
  ]);
  export default router

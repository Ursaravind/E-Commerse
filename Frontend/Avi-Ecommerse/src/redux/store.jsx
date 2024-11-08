import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/feautures/cart/cartSlice'
export const store = configureStore({
  reducer: {
    cart:cartReducer
  },
});
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedItems: 0,
    totalPrice: 0,
    tax: 0,
    taxRate: 0.05,
    grandTotal: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const isExists = state.products.find((product) => product.id === action.payload.id);
            if (!isExists) {
                state.products.push({ ...action.payload, quantity: 1 });
            } else {
                console.log("Item already added");
            }
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);
            state.grandTotal = setGrandTotal(state);
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);
            state.grandTotal = setGrandTotal(state);
        }
    }
});

export const setSelectedItems = (state) => 
    state.products.reduce((total, product) => total + product.quantity, 0);

export const setTotalPrice = (state) => 
    state.products.reduce((total, product) => total + product.quantity * product.price, 0);

export const setTax = (state) => 
    setTotalPrice(state) * state.taxRate;

export const setGrandTotal = (state) => {
    const totalPrice = setTotalPrice(state);
    return totalPrice + totalPrice * state.taxRate;
};

export const { addtoCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

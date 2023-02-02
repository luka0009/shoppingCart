import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./components/state/slice/checkoutSlice";
import cartReducer from "./components/state/slice/cartSlice";

export const store = configureStore({
    reducer: {
        checkout: checkoutReducer,
        cart: cartReducer,
    }
}) 

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const checkoutSlice = createSlice({
   name: 'checkut',
   initialState,
   reducers: {
    open: (state, actions) => {
        state.isOpen = !state.isOpen;
    },
   } 
}) 

export const {open} = checkoutSlice.actions;
export default checkoutSlice.reducer;
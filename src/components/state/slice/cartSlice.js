import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.amount += 1;
            const cartItem = state.cartItems.find(item => {
                item.id === action.payload.id
            });
            cartItem ? cartItem.amount += 1 : 
            state.cartItems.push({...action.payload, amount: 1})
        },
        increase: (state, action) => {
            state.amount += 1;
            const itemIndex = state.cartItems.findIndex(cartItem => {
                return cartItem.id === action.payload.id
            });
            state.cartItems[itemIndex].amount += 1;
            let total = 0;
            total = state.cartItems[itemIndex].amount * state.cartItems.price;
        },
        decrease: (state, action) => {
            const itemIndex = state.cartItems.findIndex(cartItem => {
                return cartItem.id === action.payload.id
            });
            state.cartItems[itemIndex].amount && 
            state.cartItems[itemIndex].amount-- &&
            state.amount --;
        },
        remove: (state, action) => {
            state.cartItems.map((cartItem) => {
                if(cartItem.id === action.payload.id) {
                    state.cartItems = state.cartItems.filter((item) => {
                        return item.id !== cartItem.id
                    });
                    state.amount = state.amount - cartItem.amount;
                }
            })
        },
        total: (state, action) => {
            let total = 0;
            state.cartItems.forEach(cartItem => {
                total = total + (cartItem.price * cartItem.amount)
            });
            state.total = total;
        },
        clear: (state) => {
            state.cartItems = [];
            state.amount = 0;
        }
    },
})

export const {add, increase, decrease, remove, total, clear} = cartSlice.actions;
export default cartSlice.reducer;
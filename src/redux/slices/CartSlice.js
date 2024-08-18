import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    show: {}
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            let existing = state.cart.find(val => val.id == action.payload.id);
            if(existing){
                state.cart = state.cart.map(val => val.id === action.payload.id ? {...val, qty: (val.qty >= 5 ? 5 : val.qty + 1)} : val)
            }
            else{
                state.cart.push(action.payload)
            }
        },
    
        removeCart: (state, action) => {
            state.cart = state.cart.filter(car => car.id !== action.payload.id)
        },

        increment: (state, action) => {
            state.cart = state.cart.map(val => val.id === action.payload.id ? {...val, qty: (val.qty >= 5 ? 5 : val.qty + 1)} : val)
        },
        decrement: (state, action) => {
            state.cart = state.cart.map(val => val.id === action.payload.id ? {...val, qty: (val.qty <= 1 ? 1 : val.qty - 1)} : val)
        },

        gotoShow: (state, action) => {
            state.show = action.payload;
        },
        showIncre: (state, action) => {
            state.show = {...state.show, qty: state.show.qty >= 5 ? 5 : state.show.qty + 1}
        },
        showDecre: (state, action) => {
            state.show = {...state.show, qty: state.show.qty <= 1 ? 1 : state.show.qty - 1}
        },
        addtoVo: (state, action) => {
            let existing = state.cart.find(val => val.id === state.show.id);
            if(existing){
                state.cart = state.cart.map(item => item.id === state.show.id ? {...item, qty: item.qty + 1} : item)
            }
            else{
                state.cart.push(state.show)
            }
        }

    }

})

export const {addtoCart, removeCart, increment, decrement, gotoShow, showIncre, showDecre, addtoVo} = CartSlice.actions;
export default CartSlice.reducer;
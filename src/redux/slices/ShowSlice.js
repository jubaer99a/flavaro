import { createSlice } from "@reduxjs/toolkit";

const ShowSlice = createSlice({
    name: 'show',
    initialState: {
        data: {}
    },
    reducers: {
        gotoShow: (state, action) => {
            state.data = action.payload;
        },
        showIncre: (state, action) => {
            state.data = {...state.data, qty: state.data.qty + 1}
        }
    }
})

export const {gotoShow, showIncre} = ShowSlice.actions;
export default ShowSlice.reducer;
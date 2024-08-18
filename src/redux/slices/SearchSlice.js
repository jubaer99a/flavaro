import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        srch: ''
    },
    reducers: {
        gosearch: (state, action) => {
            state.srch = action.payload.vod
        }
    }
})

export const {gosearch} = SearchSlice.actions;
export default SearchSlice.reducer;
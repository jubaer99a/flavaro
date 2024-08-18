import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name: 'filter',
    initialState: {name: "All"},
    reducers: {
        selected: (state, action) => {
            state.name = action.payload.voda;
        }
    }
})

export const {selected} = FilterSlice.actions;
export default FilterSlice.reducer;
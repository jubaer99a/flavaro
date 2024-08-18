import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import FilterSlice from "./slices/FilterSlice";
import SearchSlice from "./slices/SearchSlice";
import ShowSlice from "./slices/ShowSlice";

const Store = configureStore({
    reducer: {
        carts: CartSlice,
        filter: FilterSlice,
        search: SearchSlice,
    }
})

export default Store 

import { configureStore }  from "@reduxjs/toolkit";
import cartSlice from "features/cartSlice";
import filterSlice from "features/filterSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        filter: filterSlice,
    }
})

export default store;
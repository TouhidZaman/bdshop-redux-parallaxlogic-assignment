import { configureStore }  from "@reduxjs/toolkit";
import { productsApi } from "features/apiSlice";
import cartSlice from "features/cartSlice";
import filterSlice from "features/filterSlice";

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartSlice,
        filter: filterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
    
})

export default store;
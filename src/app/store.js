import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import authSlice from "../services/authSlice";
import { productApi } from "../services/productApi";
import cartSlice from "../services/cartSlice";
import wishlistSlice from "../services/wishlistSlice";

export const store = configureStore({
    reducer:{
        auth : authSlice.reducer,
        cart : cartSlice.reducer,
        wishlist: wishlistSlice.reducer,
        [productApi.reducerPath]:productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})

setupListeners(store.dispatch)

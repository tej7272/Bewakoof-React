import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import authSlice from "../services/authSlice";
import { productApi } from "../services/productApi";
import cartSlice from "../services/cartSlice";
import wishlistSlice from "../services/wishlistSlice";
import orderSlice from "../services/orderSlice";

export const store = configureStore({
    reducer:{
        auth : authSlice,
        cart : cartSlice,
        wishlist : wishlistSlice,
        order : orderSlice,
        [productApi.reducerPath]:productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})

setupListeners(store.dispatch)

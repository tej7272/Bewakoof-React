import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../services/authSlice";

export default configureStore({
    reducer:{
        auth : authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

// export default store;
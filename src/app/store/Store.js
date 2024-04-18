"use client"
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import AuthSlice from "./slices/AuthSlice";

const Store = configureStore({
    reducer: {
        cart:CartSlice,
        auth:AuthSlice
    
}})
export default Store;
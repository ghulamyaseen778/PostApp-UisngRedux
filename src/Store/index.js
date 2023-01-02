import { configureStore } from "@reduxjs/toolkit";
import PostSliceReducer from "./Slice/PostSlice";

export const store = configureStore({
    reducer:{
        post:PostSliceReducer
    }
})
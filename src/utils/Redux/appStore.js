import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./Slices/userSlice"
export const appStore= configureStore({
    reducer:{
        user:userReducer,
    }
})

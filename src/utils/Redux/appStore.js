import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./Slices/userSlice"
import movieReducer from "./Slices/movieSlice"
export const appStore= configureStore({
    reducer:{
        user:userReducer,
        nowPlaying:movieReducer,
    }
})

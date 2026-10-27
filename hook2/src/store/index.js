import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice" 

// store 생성
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})
import {createSlice} from "@reduxjs/toolkit";

const initialState = {count: 0}

// 액션과 리듀서를 생성
const counterSlice = createSlice({
    // essential attribute : name, initialState, reducers
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {state.count = state.count + 1},
        decrement: (state) => {state.count = state.count - 1}
    }
})

// export
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
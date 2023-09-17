import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    initialState: { count: 0 },
    name: 'counter',
    reducers: {
        incrementBy1: (state) => ({ ...state, count: state.count + 1 }),
        decrementBy1: (state) => ({ ...state, count: state.count - 1 })
    }
})

export const { incrementBy1, decrementBy1 } = counterSlice.actions;

export default counterSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    initialState: { amount: 0, error: '' },
    name: 'account',
    reducers: {
        deposit: (state, action) => ({ ...state, error: '', amount: state.amount + action.payload }),
        withdraw: (state, action) => {
            if (state.amount >= action.payload) {
                return ({ ...state, amount: state.amount - action.payload })
            } else {
                return ({ ...state, error: 'Insufficient Funds!' })
            }
        }
    }
})

export const { deposit, withdraw } = accountSlice.actions;

export default accountSlice.reducer;
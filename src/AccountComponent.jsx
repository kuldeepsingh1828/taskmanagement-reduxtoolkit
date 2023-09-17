import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { deposit, withdraw } from './redux/actions/accountActions'
import { deposit, withdraw } from './redux-toolkit/slices/accountSlice'

export default function AccountComponent() {
    const dispatch = useDispatch();
    const { amount, error } = useSelector(state => state.account)

    const withdrawListener = () => {
        dispatch(withdraw(10));
    }

    const depositListener = () => {
        dispatch(deposit(10));

    }
    return (
        <div>
            <div>You Currently hold : {amount}</div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <input />
            <button onClick={withdrawListener}>Withdraw</button>
            <button onClick={depositListener}>Deposit</button>
        </div>
    )
}

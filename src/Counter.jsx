import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { decrementBy1, decrementByN, incrementBy1, incrementByN } from './redux/actions/counterActions';
import { decrementBy1, incrementBy1 } from './redux-toolkit/slices/counterSlice';

export default function Counter() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.counter)
    const [n, setN] = useState(0);
    const incrementValue = (value) => {
        if (value) {
            dispatch(incrementByN(+value))
        } else {
            dispatch(incrementBy1())
        }
    }

    const decrementValue = (value) => {
        if (value) {
            dispatch(decrementByN(+value))
        } else {
            dispatch(decrementBy1())
        }
    }

    return (
        <>
            <div>{state.count}</div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100vh' }}>
                <div>
                    <button onClick={() => incrementValue()}>INCREMENT</button>
                    <button onClick={() => decrementValue()}>DECREMENT</button>
                </div>
                <div>
                    <input value={n} defaultValue={n} onChange={(e) => { setN(e.target.value) }} />
                    <br />
                    <button onClick={() => incrementValue(n)}>INCREMENT</button>
                    <button onClick={() => decrementValue(n)}>DECREMENT</button>
                </div>
            </div >
        </>
    )
}

const intialState = { amount: 0, error: '' }
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'DEPOSIT_AMOUNT': state = { ...state, error: '', amount: state.amount + action.payload }
            break;
        case 'WITHDRAW_AMOUNT':
            if (state.amount >= action.payload)
                state = { ...state, amount: state.amount - action.payload }
            else
                state = { ...state, error: 'Insufficient Funds!' }
            break;
        default: state = { ...state };
    }
    return state;
}

export default reducer;
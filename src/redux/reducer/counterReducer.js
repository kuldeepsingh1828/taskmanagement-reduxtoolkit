const intialState = { count: 0 }
const reducer = (state = intialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'INCREMENT_BY_1': state = { ...state, count: state.count + 1 }
            break;
        case 'INCREMENT_BY_N': state = { ...state, count: state.count + action.payload }
            break;
        case 'DECREMENT_BY_1': state = { ...state, count: state.count - 1 }
            break;
        case 'DECREMENT_BY_N': state = { ...state, count: state.count - action.payload }
            break;
        default: state = { ...state };
    }
    return state;
}

export default reducer;
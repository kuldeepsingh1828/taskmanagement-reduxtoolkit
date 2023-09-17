//Actions return {type:'',payload?}

const incrementBy1 = () => ({ type: 'INCREMENT_BY_1' })
const decrementBy1 = () => ({ type: 'DECREMENT_BY_1' })

const incrementByN = (n) => ({ type: 'INCREMENT_BY_N', payload: n })
const decrementByN = (n) => ({ type: 'DECREMENT_BY_N', payload: n })


export { incrementBy1, decrementBy1, decrementByN, incrementByN }
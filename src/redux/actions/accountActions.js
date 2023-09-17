//action to deposit or withdraw


const deposit = (amount) => ({ type: 'DEPOSIT_AMOUNT', payload: amount })
const withdraw = (amount) => ({ type: 'WITHDRAW_AMOUNT', payload: amount })

export { deposit, withdraw }
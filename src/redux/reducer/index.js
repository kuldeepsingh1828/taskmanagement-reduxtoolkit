import { combineReducers } from 'redux'
import account from './accountReducer'
import counter from './counterReducer'


export default combineReducers({ counter, account })
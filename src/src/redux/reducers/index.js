import { combineReducers } from "redux"
import flight from './flightReducer';
import searchData from './flightSearchReducer';
export default combineReducers({
    flight,
    searchData
})
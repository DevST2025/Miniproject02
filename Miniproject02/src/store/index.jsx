import { combineReducers } from "redux";
import list from '../redux/product/reducer'
import quantity from '../redux/quantity/reducer'
import notify from '../redux/notify/reducer'


export default combineReducers( { list, quantity,notify } )
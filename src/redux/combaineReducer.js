import handleCart from "./reducer";
import {combineReducers} from 'redux';
import { legacy_createStore as createStore } from 'redux';

const root = combineReducers({
        handleCart,     
})
const store = createStore(root);
export default store;

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducer from "./combineReducers";

const initialState = {
    customer: {},
};

const store = createStore(combineReducer, initialState, composeWithDevTools());

export default store;

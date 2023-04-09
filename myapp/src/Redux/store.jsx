import {applyMiddleware, combineReducers, legacy_createStore,compose} from "redux"
import thunk from "redux-thunk"

import {reducer as AuthReducer} from "./AuthReducer/Reducer"
import {reducer as AppReducer} from "./AppReducer/Reducer"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer= combineReducers({AppReducer, AuthReducer})


const store =  legacy_createStore  ( rootReducer ,composeEnhancers (applyMiddleware (thunk)))


 export {store}
import {createStore, compose, applyMiddleware} from "redux";
import {combineReducers} from "redux";
import movies from  "./reducers/movies"
import filters from "./reducers/filters";
import thunk from "redux-thunk";


const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
	movies,
	filters
})
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export default store

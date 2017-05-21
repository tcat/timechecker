import {applyMiddleware, createStore} from "redux"
import Immutable from "immutable"
import reduxThunk from "redux-thunk"
import logger from "redux-logger"
import axios from "axios"
import { routerMiddleware } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'

//import Routes from "../../server/routers/Routes"
import AppConstants from "../constants/AppConstants"
import CombineReducer from "../reducers/CombineReducer"
import ExecutionEnvironment from 'exenv'

// Create a history of your choosing (we're using a browser history in this case)
const history = (ExecutionEnvironment.canUseDOM)?createBrowserHistory():createMemoryHistory()
let middleware;
var preloadedState;
if (ExecutionEnvironment.canUseDOM && window.__PRELOADED_STATE__){
	preloadedState = Immutable.fromJS(window.__PRELOADED_STATE__).toObject()
	// Allow the passed state to be garbage-collected
	delete window.__PRELOADED_STATE__
} else {
	preloadedState ={}
}


if (process.env.NODE_ENV !== "production") {
	middleware = applyMiddleware(logger, reduxThunk, routerMiddleware(history));
} else {
	middleware = applyMiddleware(reduxThunk, routerMiddleware(history));
}

const MainStore = createStore(
  CombineReducer,
  preloadedState,
  middleware
)


//const MainStore = createStore(CombineReducer, middleware);
//MainStore.subscribe(() =>{
//	console.log("StripesStore was changed", MainStore.getState());
//});

export default MainStore;

import React from 'react'
import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom'
//import { Switch , Route } from 'react-router'
import Routes from '../server/routers/routes'
import createBrowserHistory from 'history/createBrowserHistory'
import MainStore from "./stores/MainStore"
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
const history = createBrowserHistory()

export default class ClientRouter extends React.Component{
	render(){
		return (
		<Provider store={MainStore}>
			<BrowserRouter basename="/" history={history}>
				<Routes/>
			</BrowserRouter>
		</Provider>
	)}
};
  
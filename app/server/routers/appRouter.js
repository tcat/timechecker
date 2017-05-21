const passport = require('passport') 
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import Routes from './routes'
import { StaticRouter } from 'react-router'

import {createStore} from "redux"
//import CombineReducer from "../../client/reducers/CombineReducer"
import {Provider} from "react-redux"

import MainStore from "../../client/stores/MainStore";


const init = (app)=>{
	//web part
	/*app.get("/dashboard", passport.authenticationMiddleware(), (req, resp)=>{
		console.log('dashoard page')
		resp.render("dashboard" , { title: 'Dashboard', isAuthorized: true});
	});

	app.get("/users", passport.authenticationMiddleware(), (req, resp)=>{
		resp.render("users" , { title: 'users', isAuthorized: true});
	});*/

	app.get(['/calendar','/about', '/test'], passport.authenticationMiddleware(), (req, resp) => {
		const context = {}
		 // Grab the initial state from our Redux store

  		const preloadedState = MainStore.getState()
  		const preloadStateFormated = JSON.stringify(preloadedState).replace(/</g, '\\u003c') 
		const html = ReactDOMServer.renderToString(
			<Provider store={MainStore}>
			    <StaticRouter location={req.url} context={context}>
			      <Routes/>
			    </StaticRouter> 
			</Provider>
		)
		// context.url will contain the URL to redirect to if a <Redirect> was used
		if (context.url) {
			resp.writeHead(302, {
				Location: context.url
			})
			resp.end()
		} else {
			return resp.render("dashboard" , {preloadState: preloadStateFormated, react_markup: html, title: 'Timechecker'});
		}

	});

}




module.exports = {
	init : init
}
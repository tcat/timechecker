import React from 'react'
import {Switch,Route} from 'react-router'
import About from '../../client/components/about/About.jsx'
import Calendar from '../../client/components/calendar/Calendar.jsx'
import NotFound from '../../client/components/layout/NotFound.jsx'
import Test from '../../client/components/test/Test.jsx'

export default class Routes extends React.Component{
	render(){
		return(
			<Switch>
		    	<Route path="/about" component={About}/>
		    	<Route path="/test" component={Test}/>

		    	<Route path="/calendar" component={Calendar}/>
		    	<Route component={NotFound}/>
			</Switch>
		)
	};
}
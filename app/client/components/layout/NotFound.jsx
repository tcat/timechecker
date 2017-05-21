import React from 'react'
import {Link} from 'react-router-dom'

class NotFound extends React.Component{
	render(){
		return(<div>Page not found. Go to <Link to='/about'>Go to About</Link><Link to='/calendar'>Go to Calendar</Link></div>)
	};
}

export default  NotFound;
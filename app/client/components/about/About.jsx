import React from "react"
import * as UIActions from "../../actions/UIActions"
import AppConstants from "../../constants/AppConstants"
import Layout from "../layout/Layout.jsx"
import {Link} from "react-router-dom"



 

class About extends React.Component{

	componentWillMount(){
	};

	render(){

		return(
			<Layout>
				<div className="col-xs-12">
					<Link to="/calendar">Calendar</Link>
				</div>
			</Layout>
		)
	};
}

export default About;

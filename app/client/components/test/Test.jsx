import React from "react"
import {Link} from "react-router-dom"
import * as UIActions from "../../actions/UIActions"
import Layout from "../layout/Layout.jsx"
import AppConstants from "../../constants/AppConstants"


class Test extends React.Component{

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

export default Test;
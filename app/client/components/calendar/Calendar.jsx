import React from "react"
import BigCalendar from "react-big-calendar"
import moment from "moment"
import * as UIActions from "../../actions/UIActions"
import AppConstants from "../../constants/AppConstants"
import Layout from "../layout/Layout.jsx"
import AddEventModal from "../modals/AddEventModalComponent.jsx"
import {connect} from "react-redux"
//import { loadQuestions } from "../../actions/UIActions"

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer




class Calendar extends React.Component{
	constructor(props) {
		super(props);
		this.state = {};
	};
	componentWillMount(){
		//UIActions.loadQuestions();
	};
	addEvent(){
		UIActions.modalWindowsChangeState(AppConstants.ADD_EVENT_MODAL, {isOpen: true})
	};
	render(){
		let events = [],
			style = {
		      height: '500px'
		    };
		return(
			<Layout>
				<div className="col-xs-12">
					<BigCalendar {...this.props}
					  style={style}
				      events={events}
				      defaultDate={new Date()}
				      startAccessor='startDate'
				      endAccessor='endDate'
				    />
				</div>
				<button type="button" className="btn pmd-ripple-effect btn-info" onClick={this.addEvent}> Add time task</button>
				<AddEventModal windowName={AppConstants.ADD_EVENT_MODAL}/>
			</Layout>
		)
	};
}

export default Calendar;

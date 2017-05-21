import React from 'react';
import {connect} from "react-redux";
import ReactModal from './ReactModalComponent.jsx';
import * as UIActions from "../../actions/UIActions";
import AppConstants from "../../constants/AppConstants"

//import Validation from "../../services/Validation";
//import Joi from "joi";

//import Immutable from 'immutable';

/*const windowName = AppConstants.USER_MODAL_NAME,
	UserNameInput = 'userName',
	UserTypeInput = 'userType',
	UserMailInput = 'userMail',
	UserPhoneInput = 'userPhone',
	UserAgencyInput = 'userAgency',
	UserComics = "userComics";*/


var AddEventModal = React.createClass({
	componentDidMount: function(){
		UIActions.initModalWindows(this.props.windowName);
	},
	/**
	 * [saveTimeTask description]
	 * @return {[type]} [description]
	 */
	saveTimeTask: function(){
		
	},
	closePopup: function(){

		UIActions.modalWindowsChangeState(AppConstants.ADD_EVENT_MODAL, {isOpen: false})
	},
	closeReset: function(){
		UIActions.modalWindowsChangeState(AppConstants.ADD_EVENT_MODAL, {isOpen: false})
		//UIActions.closeReset(this.props.windowName);
	},
	/*updateInputValue: function(event){
		let options = this.getCurrentInput(event.target.name);
		options.input[event.target.name].value = event.target.value;
		UIActions.modalWindowsChangeState(this.props.windowName, options);
	},
	onFocus: function(event){
		let name = event.target.name;
		this.props[name].touched = true;
	},
	onBlur: function(event){
		let options = this.getCurrentInput(event.target.name);
		UIActions.modalWindowsChangeState(this.props.windowName, options);
	},*/
	render: function() {
		
		return (
			<ReactModal isOpen={this.props.isOpen} name="newUser" closeHandler={this.closePopup}>
				<div className="modalWindow">
						<div className="closeBtn">
							<i className="material-icons md-dark pmd-md" onClick={this.closeReset}>clear</i>
						</div>
						<div className="row">
							<div className="col-xs-12">
								<div className="medium-12 columns">
									<p className="lead">Add new time slot</p>
								</div>
							</div>
						</div>
						<form>
							<div className="row">
								<div className="col-xs-12">
									<label>
										
									</label>
								</div>
							</div>
							<div className="row button_holder">
								<div className="col-xs-12">
									<span className="pull-right"><button onClick={this.saveUser} type="button" className="btn pmd-ripple-effect btn-info">ADD</button></span>
								</div>
							</div>
						</form>
				</div>
			</ReactModal>
		);
	}
});

const mapStateToProps = (state, ownProps) => {
	return {
		isOpen: state.UI.getIn(['modalWindows', ownProps.windowName, 'isOpen'])
		/*userPhone: {
			value: state.UI.getIn(['modalWindows', ownProps.windowName, 'input', 'userPhone', 'value']) || '',
			touched: state.UI.getIn(['modalWindows', ownProps.windowName, 'input', 'userPhone', 'touched']) || false,
			valid: Validation.validate(
				'userPhone',
				state.UI.getIn(['modalWindows', ownProps.windowName, 'input', 'userPhone', 'value'])
			)
		}*/
		
	};
};


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(AddEventModal);
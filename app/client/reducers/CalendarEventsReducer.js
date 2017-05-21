import AppConstants from "../constants/AppConstants";
import Immutable from 'immutable';

const initialState = Immutable.Map({

});

export function CalendarEventsReducer(state = initialState, action) {
	switch (action.type){
		/*case AppConstants.USERS_RECEIVED:
			return state.merge({users: action.payload});
		break;*/
		default:
		return state;
		break;
	}
};

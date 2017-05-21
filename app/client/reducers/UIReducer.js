import AppConstants from "../constants/AppConstants";
import Immutable from 'immutable';

const initialState = Immutable.Map({
	modalWindows: Immutable.Map({
		
	})
});
const initModalParams = {
	isOpen: false,
	inputs: {},
	checkboxes: {}
};
export function UIReducer(state = initialState, action) {
	
	switch (action.type){
		case AppConstants.MODAL_INIT:
			let initWindows = {};
			if (Array.isArray(action.payload.windowNames)){
				action.payload.windowNames.map(function(windowName){
					if (!state.getIn(['modalWindows', windowName])) {
							initWindows[windowName] = initModalParams;
					}
				});
			} else {
				initWindows[action.payload.windowNames] = initModalParams;
			}

			return state.mergeDeep({modalWindows: initWindows});
		break;
		case AppConstants.MODAL_STATE_CHANGED:
			function merger(a, b) {
				if (a && a.mergeWith && !Immutable.List.isList(a) && !Immutable.List.isList(b)) {
					return a.mergeWith(merger, b);
				}
				return b;
			}
			if (!state.getIn(['modalWindows', action.payload.windowName])) {
				throw "You have to init your modal " +action.payload.windowName+ " window";
				return state;
			} else {
				let mergeObj = {};
				mergeObj[action.payload.windowName] = action.payload.options;
				return state.mergeWith(merger, {modalWindows: mergeObj});
			}
		break;
		case AppConstants.MAIN_PRELOADER_CHANGE_STATE:
			let mainPreloader = state.get('mainPreloader'),
				countOfPreloaders = mainPreloader.get("countOfPreloaders"),
				options = {};
			options.isVisible = action.payload.isVisible;
			if (options.isVisible) {
				countOfPreloaders++;
			} else {
				countOfPreloaders--;
				if (countOfPreloaders > 0) options.isVisible = true;
			}
			options.countOfPreloaders = countOfPreloaders;
			options.color = action.payload.color || initialState.getIn(["mainPreloader","color"]);
			return state.mergeDeep({'mainPreloader': options});
		break;
        case AppConstants.RESET_FORM_INPUT:
			if (!state.getIn(['modalWindows', action.payload.windowName])) {
				throw "You have to init your modal " +action.payload.windowName+ " window";
				return state;
			} else {
				return state.setIn(['modalWindows', action.payload.windowName], initModalParams);
			}
		break;
		default:
			return state;
		break;
	}
}
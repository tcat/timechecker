import AppConstants from "../constants/AppConstants";
import MainStore from "../stores/MainStore";
import * as UIActions from "./UIActions";
import * as ActionCreators from './ActionCreators'


export function initModalWindows(windowNames) {
  	MainStore.dispatch(ActionCreators.initModalWindows({windowNames: windowNames}))
}
export function modalWindowsChangeState(windowName, options) {
	MainStore.dispatch(ActionCreators.modalWindowsChangeState({windowName: windowName, options: options}))
}


/*export function initModalWindows(windowNames) {
	MainStore.dispatch({
		type: AppConstants.MODAL_INIT,
		payload: {
			windowNames: windowNames
		}
	});
}

export function modalWindowsChangeState(windowName, options) {
	MainStore.dispatch({
		type: AppConstants.MODAL_STATE_CHANGED,
		payload: {
			windowName: windowName,
			options: options
		}
	});
}
export function showHint(options) {
	options.isOpen = true;
	UIActions.modalWindowsChangeState(AppConstants.HINT_MODAL_NAME, options);
}
export function hideHint() {
	UIActions.modalWindowsChangeState(AppConstants.HINT_MODAL_NAME, {isOpen: false});
}

export function showPrompt(options) {
	options.isOpen = true;
	UIActions.modalWindowsChangeState(AppConstants.PROMPT_MODAL_NAME, options);
}
export function hidePrompt() {
	let options = {};
	options.isOpen = false;
	options.okHandler = null;
	options.cancelHandler = null;
	options.okBtnName = "";
	options.cancelBtnName = "";
	options.promptTitle = "";
	options.promptInputErrorValidationMsg = "";
	options.validationSchema = null;
	UIActions.modalWindowsChangeState(AppConstants.PROMPT_MODAL_NAME, options);
}
export function showDialog(options) {
	options.isOpen = true;
	UIActions.modalWindowsChangeState(AppConstants.DIALOG_MODAL_NAME, options);
}
export function hideDialog() {
	let options = {};
	options.isOpen = false;
	options.yesHandler = null;
	options.noHandler = null;
	options.yesBtnName = "";
	options.noBtnName = "";
	options.dialogTitle = "";
	UIActions.modalWindowsChangeState(AppConstants.DIALOG_MODAL_NAME, options);
}

export function toggleMainPreloader(options){
	MainStore.dispatch({
		type: AppConstants.MAIN_PRELOADER_CHANGE_STATE,
		payload: options
	});
}
export function showMainPreloader(props){
	let options = props || {};
	options.isVisible = true;
	UIActions.toggleMainPreloader(options);
}
export function hideMainPreloader(props){
	let options = props || {};
	options.isVisible = false;
	UIActions.toggleMainPreloader(options);
}


export function topbarSubmenuChangeState(isOpen) {
	MainStore.dispatch({
		type: AppConstants.TOPBAR_SUBMENU_STATE_CHANGED,
		payload: {
			isOpen: isOpen
		}
	});
}
export function topbarAccountMenuChangeState(isOpen){
	MainStore.dispatch({
		type: AppConstants.TOPBAR_ACCOUNTMENU_STATE_CHANGED,
		payload: {
			isOpen: isOpen
		}
	});
}

export function closeReset(windowName){
    var data = {windowName: windowName};
    MainStore.dispatch({
        type: AppConstants.RESET_FORM_INPUT,
        payload: data
    });
}*/
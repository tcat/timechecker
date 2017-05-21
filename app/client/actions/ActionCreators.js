import AppConstants from "../constants/AppConstants";
export function initModalWindows(payload) {
  return {
    type: AppConstants.MODAL_INIT,
    payload: payload
  }
}
export function modalWindowsChangeState(payload) {
  return {
    type: AppConstants.MODAL_STATE_CHANGED,
    payload: payload
  }
}

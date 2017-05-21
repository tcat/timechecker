import {combineReducers} from "redux"

import {UIReducer} from "../reducers/UIReducer"
import {CalendarEventsReducer} from "../reducers/CalendarEventsReducer"
import {routerReducer} from 'react-router-redux'
export default combineReducers({
	CalendarEvents: CalendarEventsReducer,
	UI: UIReducer,
    router: routerReducer
});
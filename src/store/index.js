import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dashboardReducer, { selectedListReducer } from "./dashboard/reducer"
import combinedTasksReducers from "./tasks/reducer"

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    selectedList: selectedListReducer,
    combinedTasksReducers
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

export default store
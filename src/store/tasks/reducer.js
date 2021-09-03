import { combineReducers } from "redux"
import { CHANGE_STATUS, FILTER_TASKS, LOAD_TASKS } from "./actions"

const tasksReducer = (state = [], { type, payload }) => {
    switch (type) {

    case LOAD_TASKS:
        return payload
    case CHANGE_STATUS:
        const index = state.findIndex(task => task.id === payload.id)
        const newState = [...state]
        newState[index] = payload
        return newState
    case "":
        return ""
            
            

    default:
        return state
    }
}

export const tasksFilterReducer = (state =  '', { type, payload }) => {
    switch (type) {

    case FILTER_TASKS:
        return payload

    default:
        return state
    }
}

export const combinedTasksReducers = combineReducers({
    tasks: tasksReducer, 
    filter: tasksFilterReducer
})


export default combinedTasksReducers
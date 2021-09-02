import { CHANGE_STATUS, LOAD_TASKS } from "./actions"

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
export default tasksReducer
import { CHANGE_STATUS, LOAD_TASKS } from "./actions"

const tasksReducer = (state = [], { type, payload }) => {
    switch (type) {

    case LOAD_TASKS:
        return payload
    case CHANGE_STATUS:
        const index = state.findIndex(task => task.id === payload)
        const newState = [...state]
        newState[index].done = !newState[index].done
        return newState
    case "":
        return ""
            
            

    default:
        return state
    }
}
export default tasksReducer
import { LOAD_TASKS } from "./actions"

const tasksReducer = (state = [], { type, payload }) => {
    switch (type) {

    case LOAD_TASKS:
        return payload

    default:
        return state
    }
}
export default tasksReducer
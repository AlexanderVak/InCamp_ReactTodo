import { LOAD_DASHBOARD, SELECTED_LIST } from "./actions"

const dashboardReducer = (state = [], { type, payload }) => {
    switch (type) {

    case LOAD_DASHBOARD:
        return payload

    default:
        return state
    }
}
 
export const selectedListReducer = (state = {}, { type, payload }) => {
    switch (type) {

    case SELECTED_LIST:
        return payload 

    default:
        return state
    }
}
 
export default dashboardReducer
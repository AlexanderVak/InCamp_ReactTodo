import axios from 'axios';

export const LOAD_TASKS = "load/tasks"
export const CHANGE_STATUS = "changeStatus/task"

export const getTasks =  (id) => async (dispatch) => {
    try {
      const response = await axios.get(`/lists/${id}/tasks`)
      dispatch({
          type: LOAD_TASKS,
          payload: response.data
      })  
    
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
}
export const changeStatus = (taskId, lsitid, done) => async (dispatch) => {
    try {
        const response = await axios.patch(`/lists/${lsitid}/tasks/${taskId}`, {done: !done})
        dispatch({
            type: CHANGE_STATUS,
            payload: response.data
        })  
      
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
}
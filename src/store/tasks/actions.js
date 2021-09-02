import axios from 'axios';

export const LOAD_TASKS = "load/tasks"

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
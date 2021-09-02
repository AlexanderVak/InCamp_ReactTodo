import axios from 'axios';

export const LOAD_DASHBOARD = "dashboard/load"
export const SELECTED_LIST = "list/selected"

export const getLists = async (dispatch) => {
    try {
      const response = await axios.get('/lists')
      dispatch({
          type: LOAD_DASHBOARD,
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

export const selectList =  (id) => async (dispatch) => {
    try {
      const response = await axios.get(`/lists/${id}`)
      dispatch({
          type: SELECTED_LIST,
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


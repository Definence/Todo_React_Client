import axios from 'axios';
const API_URL = `http://localhost:3000/tasks`;
const headers = { 'Content-Type': 'application/json', }

export function getTasks(){
  return function(dispatch, getState) {
    axios.get(API_URL, { headers })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: 'RESOURCES/TASKS/GET', payload: res.data });
        }
      })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}

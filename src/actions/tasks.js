import axios from 'axios';


const API_URL = `http://localhost:3000/tasks`;
const headers = { 'Content-Type': 'application/json', }


export function getTasks() {
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

export function getTask(id) {
  return function(dispatch, getState) {
    axios.get(`${API_URL}/${id}`, { headers: headers })
      .then(res => {
        dispatch({ type: 'RESOURCES/TASKS/GET/ID', payload: res.data });
      })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}

export function addTask(task) {
  return function(dispatch, getState) {
    let body = JSON.stringify({task: task});

    axios.post(API_URL, body, { headers: headers })
      .then(res => {
        dispatch({ type: 'RESOURCES/TASKS/ADD', payload: res.data});
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function deleteTask(id) {
  return function(dispatch, getState) {
    axios.delete(`${API_URL}/${id}`, { headers: headers })
      .then(res => {
        dispatch({ type: 'RESOURCES/TASKS/DELETE', payload: id });
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function editTask(task){
  let body = JSON.stringify({task: task});

  return function(dispatch, getState) {
    axios.patch(`${API_URL}/${task.id}`, body, { headers: headers })
      .then(res => {
        dispatch({ type: 'RESOURCES/TASKS/EDIT', payload: res.data });
        //dispatch({ type: 'ADD_ALERT', payload: { type: "success", text: "Update task" } });
        console.log('Dispatching editTask: success!');
      })
      .catch(e => {
        console.error("Dispatching editTask: failed! ", e);
        //dispatch({ type: 'ADD_ALERT', payload: { type: "danger", text: "Could not update task" } });
      })
  }
}
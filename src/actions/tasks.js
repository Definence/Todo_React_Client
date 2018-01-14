import axios from 'axios';
import { browserHistory } from 'react-router';
//import cookie from 'react-cookie';

import {
  GET_TASKS,
  GET_TASK_ID,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK
} from '../components/constants/action_types';


const API_URL = `http://localhost:3000/tasks`;
const headers = { 'Content-Type': 'application/json', }


export function getTasks() {
  return function(dispatch, getState) {
    axios.get(API_URL, { headers })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: GET_TASKS, payload: res.data });
        }
      })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}

export function getTask(id) {
  //console.log('current task id: ', id);
  return function(dispatch, getState) {
    axios.get(`${API_URL}/${id}`, { headers: headers })
      .then(res => {
        //console.log('axios get querry: success');
        dispatch({ type: GET_TASK_ID, payload: res.data });
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
        dispatch({ type: ADD_TASK, payload: res.data});
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
        dispatch({ type: DELETE_TASK, payload: id });
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function editTask(task) {
  let body = JSON.stringify({task: task});

  return function(dispatch, getState) {
    axios.patch(`${API_URL}/${task.id}`, body, { headers: headers })
      .then(res => {
        //dispatch({ type: EDIT_TASK, payload: res.data });
        browserHistory.push('/');
        location.reload()
      })
      .catch(e => {
        console.error("Dispatching editTask: failed! ", e);
      })
  }
}

export function completeTask(id, active) {
  return function(dispatch, getState) {
    if (active === true) {
      active = false
    } else {
      active = true
    }

    let task = { id: id, active: active }
    let body = { task: task }

    axios.patch(`${API_URL}/${task.id}`, body, { headers: headers })
      .then(res => {
        dispatch({ type: COMPLETE_TASK, payload: res.data });
      })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}
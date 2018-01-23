import axios from 'axios';
import { browserHistory } from 'react-router';

import { TASKS_URL, HEADERS, token } from '../components/constants/api_config';
import { GET_TASKS, GET_TASK_ID, ADD_TASK, DELETE_TASK, COMPLETE_TASK } from '../components/constants/action_types';
import { addNotificationAsync } from '../components/middlewares/notifications';



let headers = Object.assign({}, HEADERS)
  headers['Authorization'] = token


export function getTasks() {
  return function(dispatch, getState) {
    return new Promise((resolve, reject) => {

      axios.get(TASKS_URL, { headers: headers })

        .then(res => {
          if (res.status === 200) {
            dispatch({ type: GET_TASKS, payload: res.data });
            resolve(res)
          }
        })
        .catch(e => {
          console.error("error: ", e);
          reject(e)
        })
    })
  }
}

export function getTask(id) {
  return function(dispatch, getState) {
    return new Promise((resolve, reject) => {
      axios.get(`${TASKS_URL}/${id}`, { headers: headers })
        .then(res => {
            resolve(res)
          dispatch({ type: GET_TASK_ID, payload: res.data });
        })
        .catch(e => {
          console.error("error: ", e);
          reject(e)
        })
    })
  }
}

export function addTask(task) {
  return function(dispatch, getState) {
    axios.post(TASKS_URL, task, { headers: headers })

      .then(res => {
        dispatch({ type: ADD_TASK, payload: res.data });

        addNotificationAsync({
          message: 'Task has been successfully created'
        })(dispatch);
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function deleteTask(id) {
  return function(dispatch, getState) {
    axios.delete(`${TASKS_URL}/${id}`, { headers: headers })

      .then(res => {
        dispatch({ type: DELETE_TASK, payload: id });

        //middleware
        addNotificationAsync({
          message: 'Task has been successfully deleted'
        })(dispatch);
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function editTask(task) {
  return function(dispatch, getState) {
    axios.patch(`${TASKS_URL}/${task.id}`, task, { headers: headers })

      .then(res => {
        addNotificationAsync({
          message: 'Task has been successfully updated'
        })(dispatch);

        setTimeout(() => {
          browserHistory.push('/');
          location.reload();
        }, 2000)
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
    axios.patch(`${TASKS_URL}/${task.id}`, body, { headers: headers })

      .then(res => {
        dispatch({ type: COMPLETE_TASK, payload: res.data });

        addNotificationAsync({
          message: 'Task has been successfully reassigned'
        })(dispatch);
      })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}
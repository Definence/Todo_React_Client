import axios from 'axios';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

const API_URL = `http://localhost:3000/users`;
const headers = { 'Content-Type': 'application/json', }


export function addUser(user) {
  return function(dispatch, getState) {
    let body = JSON.stringify({user: user});

    axios.post(API_URL, body, { headers: headers })
      .then(res => {
        dispatch({ type: 'RESOURCES/USERS/ADD', payload: res.data});
        browserHistory.push('#/users/log_in');
        location.reload()
      })
      .catch(error => {
        console.error(error);
      })
  }
}

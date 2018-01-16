import axios from 'axios';
import { browserHistory } from 'react-router';
// import cookie from 'react-cookie';

import { USERS_URL, headers } from '../components/constants/api_config';


export function signUp(user) {
  return function(dispatch, getState) {
    let body = JSON.stringify({user: user});
    axios.post(`${USERS_URL}/sign_up`, body, { headers: headers })

      .then(res => {
        //dispatch({ type: 'RESOURCES/USERS/ADD', payload: res.data});
        browserHistory.push('#/users/sign_in');
        location.reload()
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function signIn(session){
  return function(dispatch, getState) {
    let body = JSON.stringify({ session: session });
    axios.post(`${USERS_URL}/sign_in`, body, { headers: headers })

      .then(res => {
        // зберігає дані з бекенду в локалстор
        localStorage.setItem('token', res.data.token);
        // let userToken = localStorage.getItem('token');
        // console.log(userToken);

        // browserHistory.push('/');
        // location.reload();

        // setTimeout(() => {
        //   location.reload()
        // }, 500)
      })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}

export function signOut(session){
  return function(dispatch, getState) {
    let body = JSON.stringify({ session: session });
    axios.post(`${USERS_URL}/sign_in`, body, { headers: headers })

      .then(res => {
        localStorage.removeItem('token');
        console.error('OK');
      })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}



import axios from 'axios';
import { browserHistory } from 'react-router';

import { USERS_URL, HEADERS } from '../components/constants/api_config';
import { addNotificationAsync } from '../components/middlewares/notifications';


export function signUp(user) {
  return function(dispatch, getState) {
    let body = {user: user}
    // let body = JSON.stringify({user: user});
    axios.post(`${USERS_URL}/sign_up`, body, { headers: HEADERS })

      .then(res => {
        addNotificationAsync({
          message: 'You have been successfully signed up. Please confirm your email'
        })(dispatch);

        setTimeout(() => {
          browserHistory.push('#/users/sign_in');
          location.reload()
        }, 3000)
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function signIn(session){
  return function(dispatch, getState) {
    let body = {session: session}
    // let body = JSON.stringify({ session: session });
    axios.post(`${USERS_URL}/sign_in`, body, { headers: HEADERS })

      .then(res => {
        // зберігає дані з бекенду в локалстор
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', res.data.username);

        browserHistory.push('/');
        location.reload();

        // setTimeout(() => {
        //   location.reload()
        // }, 500)
      })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}

export function emailConfirmation(email_token){
  return function(dispatch, getState) {
    axios.get(`${USERS_URL}/${email_token}/email_confirmation`, { headers: HEADERS })
      .then(res => {
        console.log(res)
        if (res.status === 200) {

          // browserHistory.push('#/users/log_in');
          // setTimeout(() => {
          //  location.reload()
          // }, 1500)
        } else if (res.status === 207) {
        }
      })
      .catch(e => {
        console.error("error: ", e);
      })
  }
}
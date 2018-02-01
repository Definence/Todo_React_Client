import axios from 'axios';
import { browserHistory } from 'react-router';

import { USERS_URL, HEADERS } from '../components/constants/api_config';
import { notificationsAsync } from '../components/middlewares/notifications';

export function signUp(user) {
  return function(dispatch, getState) {
    let body = { user: user }
    // let body = JSON.stringify({user: user});
    axios.post(`${USERS_URL}`, body, { headers: HEADERS })

      .then(res => {
        if (status === 200) {
          notificationsAsync({
            message: res.data.message
          })(dispatch);
        setTimeout(() => {
          browserHistory.push('#/users/sign_in');
          location.reload()
        }, 3000)
        } else {
          notificationsAsync({
            message: res.data.message
          })(dispatch);
        }
      })

      .catch(error => {
        console.error(error);
        notificationsAsync({
          message: 'Something went wrong :('
        })(dispatch);
      })
  }
}

export function emailConfirmation(token) {
  return function(dispatch, getState) {
    let body = {user: token};
    axios.post(`${USERS_URL}/email_confirmation`, body, { headers: HEADERS })

      .then(res => {
        if (res.status === 200) {
          notificationsAsync({
            message: res.data.message
          })(dispatch);
          setTimeout(() => {
            browserHistory.push('#/users/sign_in');
            location.reload()
          }, 2000)
        } else {
          notificationsAsync({
            message: 'Something went wrong :('
          })(dispatch);
        }
      })

      .catch(e => {
        console.error("error: ", e);
      })
  }
}
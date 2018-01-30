import axios from 'axios';
import { browserHistory } from 'react-router';

import { SESSION_URL, HEADERS } from '../components/constants/api_config';
import { addNotificationAsync } from '../components/middlewares/notifications';

export function signIn(session){
  return function(dispatch, getState) {
    let body = { session: session }
    // let body = JSON.stringify({ session: session });
    axios.post(`${SESSION_URL}`, body, { headers: HEADERS })

      .then(res => {
        if (res.status === 207) {
          addNotificationAsync({
            message: 'Your account is not activated. Please confirm your email!'
          })(dispatch);
        } else if (res.status === 200) {
          // зберігає дані з бекенду в локалстор
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);
          browserHistory.push('/');
          location.reload();
        } else if (res.status === 204) {
          addNotificationAsync({
            message: 'User does not exists!'
          })(dispatch);
        }
      })

      .catch(e => {
        console.error("error: ", e);
      })

  }
}
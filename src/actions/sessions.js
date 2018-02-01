import axios from 'axios';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux'

import { SESSION_URL, HEADERS } from '../components/constants/api_config';
import { notificationsAsync } from '../components/middlewares/notifications';
import { locations } from '../components/middlewares/locations';


export function signIn(session){
  return function(dispatch, getState) {
    let body = { session: session }
    // let body = JSON.stringify({ session: session });
    axios.post(`${SESSION_URL}`, body, { headers: HEADERS })

      .then(res => {
        if (res.status === 200) {
          // зберігає дані з бекенду в локалстор
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);

          locations({
            url: '/'
          })(dispatch);

          browserHistory.push('/');
          location.reload();
        } else {
          notificationsAsync({
            message: res.data.message
          })(dispatch);
        }
      })

      .catch(e => {
        console.error("error: ", e);
      })

  }
}
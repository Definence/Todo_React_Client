import axios from 'axios';
import { browserHistory } from 'react-router';

import { USERS_URL, HEADERS } from '../components/constants/api_config';


export function signUp(user) {
  return function(dispatch, getState) {
    let body = {user: user}
    // let body = JSON.stringify({user: user});
    axios.post(`${USERS_URL}/sign_up`, body, { headers: HEADERS })

      .then(res => {
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
    let body = {session: session}
    // let body = JSON.stringify({ session: session });
    axios.post(`${USERS_URL}/sign_in`, body, { headers: HEADERS })

      .then(res => {
        // зберігає дані з бекенду в локалстор
        localStorage.setItem('token', res.data.token);
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

// export function signOut(session){
//   return function(dispatch, getState) {
//     let body = JSON.stringify({ session: session });
//     axios.post(`${USERS_URL}/sign_in`, body, { headers: HEADERS })

//       .then(res => {
//         localStorage.removeItem('token');
//         console.error('OK');
//       })
//       .catch(e => {
//         console.error("error: ", e);
//       })
//   }
// }
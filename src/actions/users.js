import axios from 'axios';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

const API_URL = `http://localhost:3000/users`;
const headers = { 'Content-Type': 'application/json', }


export function signUp(user) {
  return function(dispatch, getState) {
    let body = JSON.stringify({user: user});

    axios.post(API_URL, body, { headers: headers })
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

// export function fetchToken(){
//   return function(dispatch, getState) {
//     if (cookie.load('token')) {
//       let token = cookie.load('token')
//       let body = JSON.stringify({ token: token });

//       axios.post(`${API_URL}/fetch_token`, body, { headers: headers })
//         .then(res => {
//           console.log("res", token)
//           dispatch({ type: 'FETCH_TOKEN', payload: token });
//           //dispatch({ type: 'ADD_ALERT', payload: { type: "success", text: "token token token" } });
//         })
//         .catch(e => {
//           console.error("error: ", e);
//         })
//     }
//   }
// }

export function signIn(session){
  return function(dispatch, getState) {
    let body = JSON.stringify({ session: session });

    console.log('action works!!!');
    // axios.post(`${API_URL}/create_token`, body, { headers: headers })
    //   .then(res => {
    //     cookie.save('token', res.data, { path: '/' });
    //     dispatch({ type: 'ADD_ALERT', payload: { type: "success", text: "Login successfully" } });

    //     browserHistory.push('#/');
    //     setTimeout(() => {
    //       location.reload()
    //     }, 1000)
    //   })
    //   .catch(e => {
    //     console.error("error: ", e);
    //     dispatch({ type: 'ADD_ALERT', payload: { type: "danger", text: <div>Could not create user<br /> {e}</div> }});
    //   })
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

//app import
import { token } from './components/constants/api_config';
import './index.css';
import reducer from './reducers';
import Tasks_Index from './components/tasks/tasks_index';
import Tasks_Edition from './components/tasks/tasks_edition';
import Task_Profile from './components/tasks/task_profile';
import Not_exists from './components/layouts/not_exists';

//user import
import Sign_out from './components/users/sign_out';
import Sign_up from './components/users/sign_up';
import Sign_in from './components/users/sign_in';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

if (token) {
  ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Tasks_Index} />
      <Route path="/tasks/:id/edit" component={Tasks_Edition} />
      <Route path="/tasks/:id/profile" component={Task_Profile} />
      <Route path="/users/sign_out" component={Sign_out} />
      <Route path='*' component={Not_exists} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
} else {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/users/sign_in" component={Sign_in} />
        <Route path="/users/sign_up" component={Sign_up} />
        <Route path='*' component={Sign_in} />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}


store.subscribe(() => {
  console.log('MAIN STORE ->', store.getState());
})
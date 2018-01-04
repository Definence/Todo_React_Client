import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import cookie from 'react-cookies';

import './index.css';
import reducer from './reducers';
import Tasks_Index from './components/tasks/tasks_index';
import Tasks_Edition from './components/tasks/tasks_edition';
import Task_Profile from './components/tasks/task_profile';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Tasks_Index} />
      <Route path="/tasks/:id/edit" component={Tasks_Edition} />
      <Route path="/tasks/:id/profile" component={Task_Profile} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

store.subscribe(() => {
  console.log('MAIN STORE ->', store.getState());
})
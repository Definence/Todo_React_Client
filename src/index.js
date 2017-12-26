import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import cookie from 'react-cookies'

import './index.css';
import reducer from './reducers';
import Task from './components/tasks/task_show';
import Tasks_Index from './components/tasks/tasks_index';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Tasks_Index}/>
      <Route path="/task/:id" component={Task}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

store.subscribe(() => {
  console.log('MAIN STORE ->', store.getState());
})
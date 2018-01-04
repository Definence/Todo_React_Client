import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';
//import { browserHistory } from 'react-router'

import Menu from '../layouts/menu';
import { getTask } from '../../actions/tasks';


class Task_Profile extends Component {

  componentDidMount () {
    let id = this.props.params.id;
    this.props.onGetTask(id);
  };

  render () {
    console.log();
    return (
      <div>
        <Menu />

        <div className='container'>
          <div className='col-sm-3 col-xs-1' />
          <div className='col-sm-6 col-xs-10'>

            <h2 className='text-center'>Task profile</h2>

            <p>Title: {  }</p>
            <p>Description: {  }</p>
            <p>Priority: {  }</p>
            <p>Date: {  }</p>
            <p>Status: {  }</p>

          </div>
        </div>
      </div>
    );
  }
}


export default connect(
  state => ({
    // task: state.tasks.tasks.filter(t => t.id === state.tasks.show)
  }),

  dispatch => ({
    onGetTask: (id) => {
      dispatch(getTask(id));
    },
  })

)(Task_Profile);
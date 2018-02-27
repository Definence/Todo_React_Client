import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';
//import { browserHistory } from 'react-router'

import Navbar from '../layouts/navbar';
import { getTask } from '../../actions/tasks';


class Task_Profile extends Component {

  componentDidMount () {
    let id = this.props.params.id;
    this.props.onGetTask(id);
  };

  render () {
    const { task } = this.props
    //  те ж саме, що й попереднє
    //const task = this.props.task
    return (
      <div>

        <Navbar />

        <div className='container'>
          <div className='col-sm-3 col-xs-2' />
          <div className='col-sm-6 col-xs-8'>

            <h2 className='text-left'>Task profile</h2>

            <p><b>Title: </b>{ task.title }</p>
            <p><b>Description: </b>{ task.description }</p>
            <p><b>Priority: </b>{ task.priority }</p>
            <p><b>Date: </b>{ task.due_date }</p>
            <p>
              <b>Status: </b>
              {task.active ? (
                'Completed task'
              ) : (
                'Current task'
              )}
            </p>

          </div>
        </div>
      </div>
    );
  }
}


export default connect(
  state => ({
    task: state.tasks.item
  }),

  dispatch => ({
    onGetTask: (id) => {
      dispatch(getTask(id));
    },
  })

)(Task_Profile);
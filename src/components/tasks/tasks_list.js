import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {
  getTasks,
  deleteTask,
  completeTask,
} from '../../actions/tasks';


class TasksList extends Component {

  static contextTypes = {
    store: React.PropTypes.object
  };

  componentDidMount () {
    this.context.store.dispatch(getTasks());
  }

  handleComplete (id, active) {
    this.props.onCompleteTask(id, active);
  }

  handleDestroy (id) {
    this.props.onDestroyTask(id);
  }

  render() {
    return (
      <div>

        <h3> Current tasks: </h3>
        {this.props.tasks.map( (task) => {
          if (!task.active) {

            return (
              <div key={task.id}>
              <br />
                <li className="li_height hover1 for_icons">

                  <Link to={`/tasks/${task.id}/profile`} className='task_list' >
                    <div className="col-xs-8" style={{backgroundColor: ''}} >{ task.title }</div>
                  </Link>

                  <div className="col-xs-1" style={{backgroundColor: ''}} >{ task.priority }</div>
                  <div className="col-xs-3 hover2" >

                    <Link to={`/tasks/${task.id}/edit`} >
                      <span className="glyphicon glyphicon-pencil" title="Edit task"></span>
                    </Link>

                    <span onClick={this.handleDestroy.bind(this, task.id)} className="glyphicon glyphicon-trash" title="Delete task"></span>

                    <span onClick={this.handleComplete.bind(this, task.id, task.active)} className="glyphicon glyphicon-ok" title="Mark as completed"></span>

                  </div>
                </li>
              </div>
            );

          }
        })}

        <h3> Completed tasks: </h3>
        {this.props.tasks.map( (task) => {
          if (task.active) {

            return (
              <div key={task.id}>
              <br />
                <li className="li_height hover1 for_icons">

                  <Link to={`/tasks/${task.id}/profile`} className='task_list' >
                    <div className="col-xs-8" style={{backgroundColor: ''}} >{ task.title }</div>
                  </Link>

                  <div className="col-xs-1" style={{backgroundColor: ''}} >{ task.priority }</div>
                  <div className="col-xs-3 hover2" >

                    <Link to={`/tasks/${task.id}/edit`} >
                      <span className="glyphicon glyphicon-pencil" title="Edit task"></span>
                    </Link>

                    <span onClick={this.handleDestroy.bind(this, task.id)} className="glyphicon glyphicon-trash" title="Delete task"></span>

                    <span onClick={this.handleComplete.bind(this, task.id, task.active)} className="glyphicon glyphicon-remove" title="Mark as uncompleted"></span>

                  </div>
                </li>
              </div>
            );

          }
        })}

      </div>
    );
  }

}


export default connect(
  state => ({
    tasks: state.tasks.items
  }),
  dispatch => ({
    onDestroyTask: (id) => {
      dispatch(deleteTask(id));
    },
    onCompleteTask: (id, active) => {
      dispatch(completeTask(id, active));
    },
  })
)(TasksList);
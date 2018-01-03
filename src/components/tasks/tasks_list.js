import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getTasks, deleteTask, completeTask } from '../../actions/tasks';
//import axios from 'axios';

// const API_URL = `http://localhost:3000/tasks`;
// const headers = { 'Content-Type': 'application/json', }

class TasksList extends Component {

  static contextTypes = {
    store: React.PropTypes.object
  };

  componentDidMount () {
    return this.context.store.dispatch(getTasks());
  };

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
                  <div className="col-xs-8" style={{backgroundColor: 'green'}} >{ task.title }</div>
                  <div className="col-xs-1" style={{backgroundColor: 'grey'}} >{ task.priority }</div>
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
                  <div className="col-xs-8" style={{backgroundColor: 'green'}} >{ task.title }</div>
                  <div className="col-xs-1" style={{backgroundColor: 'grey'}} >{ task.priority }</div>
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
    tasks: state.tasks.all
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
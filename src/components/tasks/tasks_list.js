import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getTasks, deleteTask } from '../../actions/tasks';
import axios from 'axios';

const API_URL = `http://localhost:3000/tasks`;
const headers = { 'Content-Type': 'application/json', }

class TasksList extends Component {

  static contextTypes = {
    store: React.PropTypes.object
  };

  componentDidMount () {
    return this.context.store.dispatch(getTasks());
  };

  handleDestroy (id) {
    this.props.onDestroyTask(id);

    // axios.delete(`${API_URL}/${id}`, { headers: headers })
    //   .then(res => {

    //   })
    //   .catch(e => {
    //     console.error("error", e);
    //   })
  }

  render() {
    console.log(this.props.tasks);
    return (
      <div>
        <h3> Current tasks: </h3>
        {this.props.tasks.map( (task) => {
          if (!task.active) {

            return (
              <div key={task.id}>
              <br />
                <li className="li_height hover1 for_icons">
                  <div className="col-md-6" style={{backgroundColor: 'green'}} >{ task.title }</div>
                  <div className="col-md-3" style={{backgroundColor: 'yellow'}} >{ task.due_date }</div>
                  <div className="col-md-1" style={{backgroundColor: 'grey'}} >{ task.priority }</div>
                  <div className="col-md-2 hover2" >
                    <span className="glyphicon glyphicon-pencil" title="Edit task"></span>
                    <span onClick={this.handleDestroy.bind(this, task.id)}  className="glyphicon glyphicon-trash" title="Delete task"></span>
                    <span className="glyphicon glyphicon-ok" title="Mark as completed"></span>
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
                  <div className="col-md-6" style={{backgroundColor: 'green'}} >{ task.title }</div>
                  <div className="col-md-3" style={{backgroundColor: 'yellow'}} >{ task.due_date }</div>
                  <div className="col-md-1" style={{backgroundColor: 'grey'}} >{ task.priority }</div>
                  <div className="col-md-2 hover2" >
                    <span className="glyphicon glyphicon-pencil" title="Edit task"></span>
                    <span onClick={this.handleDestroy.bind(this, task.id)}  className="glyphicon glyphicon-trash" title="Delete task"></span>
                    <span className="glyphicon glyphicon-remove" title="Mark as uncompleted"></span>
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

//<Link to={`/task/${task.id}`}></Link>

export default connect(
  state => ({
    tasks: state.tasks
  }),
  dispatch => ({
    onDestroyTask: (id) => {
      dispatch(deleteTask(id));
    }
  })
)(TasksList);
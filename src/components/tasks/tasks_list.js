import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { sortTasks } from '../middlewares/sorted_tasks';
import {
  getTasks,
  deleteTask,
  completeTask
} from '../../actions/tasks';


class TasksList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  //перевіряє чи зі стор  прийшли в пропси
  static contextTypes = {
    store: React.PropTypes.object
  };

  componentDidMount () {
    this.context.store.dispatch(getTasks())
      .then(response => {
        this.setState({tasks: response.data});
      })
  }

  // //замінили на componentDidMount(аналогія в tasks_edition)
  // componentWillReceiveProps(nextProps) {
  //   this.setState({tasks: nextProps.tasks});
  //   console.log(nextProps.tasks)
  // }

  handleComplete (id, active) {
    this.props.onCompleteTask(id, active);
  }

  handleDestroy (id) {
    this.props.onDestroyTask(id);
  }

  sortTasks (type) {
    if (type === 'title') {
      var tasks = this.props.tasks.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });

    } else {
      var tasks = this.props.tasks.sort(function (a, b) {
        if (a.priority > b.priority) {
          return 1;
        }
        if (a.priority < b.priority) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
    }

    this.setState({tasks: tasks});
    this.props.onSortTasks(tasks);
  }

  render() {
    return (
      <div>

        <div>
          <div className="btn btn-info" onClick={this.sortTasks.bind(this, 'title')}>
            Sort by asc
          </div>

          <div className="btn btn-info" onClick={this.sortTasks.bind(this, 'priority')}>
            Sort by priority
          </div>
        </div>

        <br/>

        <h3> Current tasks: </h3>
        {this.props.tasks.map( (task) => {
          if (!task.active) {

            return (
              <div key={task.id}>
              <br />
                <li className="li_height hover1 for_icons">

                  <Link to={`/tasks/${task.id}/profile`} className='task_list' >
                    <div className="col-xs-8">{ task.title }</div>
                  </Link>

                  <div className="col-xs-1">{ task.priority }</div>
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

    onSortTasks: (tasks) => {
      dispatch(sortTasks(tasks));
    }

  })
)(TasksList);
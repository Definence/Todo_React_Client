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
        console.log(this.state.tasks)
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

  handleCheckAll (boolean) {
    if (boolean) {
      return null;
    } else {
      return null;
    }
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
        <div className='row'>

          <div>

            <div className="glyphicon glyphicon-check btn-group btn" />

            <div className='btn-group btn pull-right'>
              <div className="btn btn-group btn-info" onClick={this.sortTasks.bind(this, 'priority')}>
                Sort by priority
              </div>
            </div>

            <div className='btn-group btn pull-right'>
              <div className="btn btn-group btn-info" onClick={this.sortTasks.bind(this, 'title')}>
                Sort by asc
              </div>
            </div>

            <div className='btn-group btn pull-right'>
              <div className="btn btn-group btn-danger">
                Delete all
              </div>
            </div>

          </div>
        </div>

        <h3> Current tasks: </h3>
        {this.props.tasks.map( (task) => {
          if (!task.active) {

            return (
              <div key={task.id} className='container-fluid'>

                <div className='col-xs-1'>
                  <input type='checkbox' />
                </div>

                <div className="li_height hover1 for_icons">

                  <Link to={`/tasks/${task.id}/profile`} className='task_list' >
                    <div className="col-xs-7">{ task.title }</div>
                  </Link>

                  <div className="col-xs-1 priority">{ task.priority }</div>
                  <div className="col-xs-3 hover2 icons-block" >

                    <Link to={`/tasks/${task.id}/edit`} >
                      <span className="glyphicon glyphicon-pencil" title="Edit task"></span>
                    </Link>

                    <span onClick={this.handleDestroy.bind(this, task.id)} className="glyphicon glyphicon-trash" title="Delete task"></span>

                    <span onClick={this.handleComplete.bind(this, task.id, task.active)} className="glyphicon glyphicon-ok" title="Mark as completed"></span>

                  </div>
                </div>
              </div>
            );

          }
        })}

        <h3> Completed tasks: </h3>

        {this.props.tasks.map( (task) => {
          if (task.active) {

            return (
              <div key={task.id} className='container-fluid'>

                <div className='col-xs-1'>
                  <input type='checkbox' />
                </div>

                <div className="li_height hover1 for_icons">

                  <Link to={`/tasks/${task.id}/profile`} className='task_list' >
                    <div className="col-xs-7">{ task.title }</div>
                  </Link>

                  <div className="col-xs-1 priority">{ task.priority }</div>
                  <div className="col-xs-3 hover2 icons-block">

                    <Link to={`/tasks/${task.id}/edit`} >
                      <span className="glyphicon glyphicon-pencil" title="Edit task"></span>
                    </Link>

                    <span onClick={this.handleDestroy.bind(this, task.id)} className="glyphicon glyphicon-trash" title="Delete task"></span>

                    <span onClick={this.handleComplete.bind(this, task.id, task.active)} className="glyphicon glyphicon-remove" title="Mark as uncompleted"></span>

                  </div>
                </div>
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
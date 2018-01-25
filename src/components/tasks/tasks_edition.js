import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../layouts/navbar';
import {
  getTask,
  editTask
} from '../../actions/tasks';
import Notification from '../layouts/notification';


class Tasks_Edition extends Component {

  constructor() {
    super();
    this.state = {
      task: {}
    };
  }

  static contextTypes = {
    store: React.PropTypes.object
  };

  //витягує з бекенду пропси таска
  componentDidMount () {
    let id = this.props.params.id;
    this.context.store.dispatch(getTask(id))
      .then(response => {
        this.setState({task: response.data});
      })
  };

  // // сетить стейт із пропсів(замінили на проміс в componentDidMount)
  // // ел життєвого циклу
  // componentWillReceiveProps(nextProps) {
  //   // назначає стейт таска пропси, що прийшли зі стора
  //   this.setState({task: nextProps.tasks_edition});
  // }

  handleChange(field, e) {
    // this.state.task[field] = element.target.value;
    // this.setState({ task: this.state.task });
    let new_task = Object.assign({}, this.state.task);
    new_task[field] = e.target.value;
    this.setState({ task: new_task });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onEditTask(this.state.task);
  }

  render() {
    const {task} = this.state;
      return (
        <div>
          <Navbar />

          <Notification />

          <div className='container'>
            <div className='col-sm-3' />

            { task.title  &&
              <div className='col-sm-6'>
                <h2 className='text-center'>Task update</h2>

                <form className='form-group' onSubmit={ this.handleSubmit.bind(this) } >
                  <label>Title:</label>
                  <input className='form-control' type="text" value={task.title} name='title' onChange={this.handleChange.bind(this, 'title')} required minLength="5" maxLength="30" />

                  <label>Description:</label>
                  <input className='form-control' type="text" value={task.description} name='description' onChange={this.handleChange.bind(this, 'description')} required />

                  <label>Priority:</label>
                  <input className='form-control' type="number" value={task.priority} name='priority' onChange={this.handleChange.bind(this, 'priority')} required min="-9999" max="9999" />

                  <label>Date:</label>
                  <input className='form-control' type="date" value={task.due_date} name='due_date' onChange={this.handleChange.bind(this, 'due_date')} required />

                  <br/>

                  <button type="submit" className="btn btn-primary form-group">Save</button>
                </form>

              </div>
            }

          </div>

        </div>
      );
  }
}

//записує зі стора item в пропс task_edition
export default connect(
  state => ({
    tasks_edition: state.tasks.item
  }),

  dispatch => ({
    onEditTask: (task) => {
      dispatch(editTask(task));
    }
  })

)(Tasks_Edition);
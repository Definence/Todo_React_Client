import React  from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';

import { addTask } from '../../actions/tasks';


class TaskForm extends React.Component {
  //initial state форми
  constructor() {
    super();
    this.state = {
      task: {
        title: '',
        description: '',
        priority: '',
        due_date: '',
        user_id: '',
        active: false
      }
    };
  }

  //змінює стейт форми
  handleChange(field, e) {
    //змінює стейт active на протилежне
    if (field === 'active') {
      // this.state.task.active = !this.state.task.active
      var new_task_active = Object.assign({}, this.state.task);
      new_task_active['active'] = !new_task_active['active'];
      this.setState({ task: new_task_active });
    }

    //змінює стейт решти полів форми
    else {
      // this.state.task[field] = e.target.value
      //копіює стейт
      var new_task = Object.assign({}, this.state.task);
      //створює перемінну
      new_task[field] = e.target.value;
      //назначає новий стейт
      this.setState({ task: new_task });
    }
  }

  //сабмітить форму
  handleSubmit(element) {
    element.preventDefault();
    this.props.onAddTask(this.state.task);
  }

  render() {
    return(
      <form className='form-group' onSubmit={ this.handleSubmit.bind(this) } >

        <label>Title:</label>
        <input
          className='form-control'
          onChange={ this.handleChange.bind( this, 'title') }
          type="text"
          placeholder='Enter a title'
          required minLength="5"
          maxLength="30"
        />

        <label>Description:</label>
        <input
          className='form-control'
          onChange={ this.handleChange.bind( this, 'description') }
          type="text"
          placeholder='Enter a description'
          required
        />

        <label>Priority:</label>
        <input
          className='form-control'
          onChange={ this.handleChange.bind( this, 'priority') }
          type="number"
          placeholder='Enter a priority'
          required max="9999"
        />

        <label>Date:</label>
        <input
          className='form-control'
          onChange={ this.handleChange.bind( this, 'due_date') }
          type="date"
          placeholder='Enter a date'
          required
        />

        <label>Completed:</label>
        <input
          className='form-group'
          onChange={ this.handleChange.bind( this, 'active') }
          type="checkbox"
        />

        <br/>

        <button type="submit" className="btn btn-primary center-block form-group">Add task</button>

      </form>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onAddTask: (task) => {
      dispatch(addTask(task));
    },
    // onCheckToken: (token) => {
    //   dispatch(checkToken(token))
    // }
  })
)(TaskForm);
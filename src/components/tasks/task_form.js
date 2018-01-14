  import React  from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';

import { addTask  } from '../../actions/tasks';


class Task_Form extends React.Component {
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
  handleChange(field, element) {
    //змінює стейт active на протилежне
    if (field === 'active')
      this.state.task.active = !this.state.task.active
    //змінює стейт решти полів форми
    else
      this.state.task[field] = element.target.value
    //console.log(this.state.task)
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
        <input className='form-control' onChange={ this.handleChange.bind( this, 'title') } type="text" placeholder='Enter a title' required minLength="5" maxLength="30" />

        <label>Description:</label>
        <input className='form-control' onChange={ this.handleChange.bind( this, 'description') } type="text" placeholder='Enter a description' required />

        <label>Priority:</label>
        <input className='form-control' onChange={ this.handleChange.bind( this, 'priority') } type="number" placeholder='Enter a priority' required max="9999" />

        <label>Date:</label>
        <input className='form-control' onChange={ this.handleChange.bind( this, 'due_date') } type="date" placeholder='Enter a date' required />

        <label>Completed:</label>
        <input className='form-group' onChange={ this.handleChange.bind( this, 'active') } type="checkbox" />

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
    }
  })
)(Task_Form);
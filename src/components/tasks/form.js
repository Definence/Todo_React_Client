import React  from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      task: {
        title: '',
        description: '',
        priority: '',
        due_date: '',
        user_id: ''
      }
    };
  }

  handleChange(field, element) {
    this.state.task[field] = element.target.value
  }

  handleSubmit(element) {
    element.preventDefault();

    let API_URL = `http://localhost:3000/tasks`
    let body = JSON.stringify({task: this.state.task});
    let headers = { 'Content-Type': 'application/json' }

    axios.post(API_URL, body, { headers: headers })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.error(error);
      })
  }

  render() {
    return(
        <form className='form-group' onSubmit={ this.handleSubmit.bind(this) } >

          <label>Title:</label>
          <input className='form-control' onChange={ this.handleChange.bind( this, 'title') } type="text" placeholder='Enter a title' />

          <label>Description:</label>
          <input className='form-control' onChange={ this.handleChange.bind( this, 'description') } type="text" placeholder='Enter a description' />

          <label>Priority:</label>
          <input className='form-control' onChange={ this.handleChange.bind( this, 'priority') } type="number" placeholder='Enter a priority' />

          <label>Date:</label>
          <input className='form-control' onChange={ this.handleChange.bind( this, 'date') } type="date" placeholder='Enter a date' /><br/>

          <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    );
  }

}

export default Form;
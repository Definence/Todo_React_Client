import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTask } from '../../actions/tasks';

import Menu from '../layouts/menu';


class Tasks_Edition extends Component {

  constructor() {
    super();
    this.state = {
      task: {
        title: '',
        description: '',
        priority: '',
        due_date: new Date(),
      }
    };
  }

  componentDidMount () {
    let id = this.props.params.id;
    this.props.onGetTask(id);
  };

  componentWillReceiveProps(nextProps) {
   //console.log('має визиватися лише один раз!!!', nextProps.tasks_edition)
   // if (nextProps.tasks_edition !== this.state.task) {
    this.setState({task: nextProps.tasks_edition})
   // }
  }

  handleChange(field, element) {
    this.state.task[field] = element.target.value
    this.setState({ task: this.state.task });
  }

  // handleChange(field, element) {
  //   this.state.task[field] = element.target.value
  // }

  render () {
    const {task} = this.state
    return (
      <div>
        <Menu/>

        <div className='container'>
          <div className='col-sm-3' />

          <div className='col-sm-6'>
            <h2 className='text-center'>Task update</h2>

              <form className='form-group'>
                <label>Title:</label>
                <input className='form-control' type="text" value={task.title} name='title' onChange={this.handleChange.bind(this, 'title')} />

                <label>Description:</label>
                <input className='form-control' type="text" value={task.description} name='description' onChange={this.handleChange.bind(this, 'description')} />

                <label>Priority:</label>
                <input className='form-control' type="number" value={task.priority} name='priority' onChange={this.handleChange.bind(this, 'priority')} />

                <label>Date:</label>
                <input className='form-control' type="date" value={task.due_date} name='due_date' onChange={this.handleChange.bind(this, 'due_date')} />

                <br/>

                <button type="submit" className="btn btn-primary form-group">Save</button>
              </form>

          </div>
        </div>

      </div>
    );
  }
}

export default connect(
  state => ({
    tasks_edition: state.tasks.edit
  }),
  dispatch => ({
    onGetTask: (id) => {
      dispatch(getTask(id));
    }
  })
)(Tasks_Edition);
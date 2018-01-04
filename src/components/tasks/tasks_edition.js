import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { browserHistory } from 'react-router'

import Menu from '../layouts/menu';
import { getTask, editTask } from '../../actions/tasks';


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

  //витягує з бекенду пропси таска
  componentDidMount () {
    let id = this.props.params.id;
    this.props.onGetTask(id);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({task: nextProps.tasks_edition});
  }

  handleChange(field, element) {
    this.state.task[field] = element.target.value;
    this.setState({ task: this.state.task });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onEditTask(this.state.task);
              //redirect
    // const { router } = this.props,
    //   path=`/`;
    // router.push(path);
  }

  render() {
    const {task} = this.state;
    // console.log(this.props.params);
    return (
      <div>
        <Menu/>

        <div className='container'>
          <div className='col-sm-3' />

          <div className='col-sm-6'>
            <h2 className='text-center'>Task update</h2>

              <form className='form-group' onSubmit={ this.handleSubmit.bind(this) } >
                <label>Title:</label>
                <input className='form-control' type="text" value={task.title} name='title' onChange={this.handleChange.bind(this, 'title')} required minLength="5" />

                <label>Description:</label>
                <input className='form-control' type="text" value={task.description} name='description' onChange={this.handleChange.bind(this, 'description')} required />

                <label>Priority:</label>
                <input className='form-control' type="number" value={task.priority} name='priority' onChange={this.handleChange.bind(this, 'priority')} required />

                <label>Date:</label>
                <input className='form-control' type="date" value={task.due_date} name='due_date' onChange={this.handleChange.bind(this, 'due_date')} required />

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
    tasks_edition: state.tasks.item
  }),

  dispatch => ({
    onGetTask: (id) => {
      dispatch(getTask(id));
    },

    onEditTask: (task) => {
      //console.log('Connecting onEditTask: success');
      dispatch(editTask(task));
    }
  })

)(Tasks_Edition);
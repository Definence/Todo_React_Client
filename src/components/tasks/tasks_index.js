import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router';

// import { getTasks } from '../../actions/tasks';
import Menu from '../layouts/menu';
import TasksList from './tasks_list';
import Task_Form from './task_form';


const Tasks_Index = () => {
  return (
    <div>

      <Menu/>

      <div className="container">
        <div className="row">

          <div className="col-sm-8">
            <TasksList />
          </div>

          <div className="col-sm-4">
            <Task_Form />
          </div>

        </div>
      </div>

    </div>
  );
}

export default Tasks_Index;

import React from 'react';
// import { connect } from 'react-redux';

// import { getTasks } from '../../actions/tasks';
import Menu from '../layouts/menu';
import TasksList from './tasks_list';
import Form from './form';
// import { Link } from 'react-router';


const Tasks_Index = () => {
  return (
    <div>

      <Menu/>

      <div className="container">
        <div className="row">

          <div className="col-sm-7">
            <TasksList />
          </div>

          <div className="col-sm-1"></div>

          <div className="col-sm-4">
            <Form />
          </div>

        </div>
      </div>

    </div>
  );
}

export default Tasks_Index;

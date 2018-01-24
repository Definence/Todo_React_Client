import React from 'react';

import Navbar from '../layouts/navbar';
import TasksList from './tasks_list';
import TaskForm from './task_form';
import Notification from '../layouts/notification';


const Tasks_Index = () => {
  return (
    <div>

      <Navbar />

      <Notification />

      <div className="container-fluid">

        <div className="col-sm-8">
          <TasksList />
        </div>

        <div className="col-sm-4">
          <TaskForm />
        </div>

      </div>

    </div>
  );
}

export default Tasks_Index;

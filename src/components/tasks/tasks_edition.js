import React, { Component } from 'react';

import Menu from '../layouts/menu';


export default class Tasks_Edition extends Component {

  render () {
    return (
      <div>
        <Menu/>

        <div className='container'>
          <div className='col-sm-3' />

          <div className='col-sm-6'>

            <h2 className='text-center'>Task update</h2>

            <form className='form-group'>

              <label>Title:</label>
              <input className='form-control' type="text" placeholder='' />

              <label>Description:</label>
              <input className='form-control' type="text" placeholder='' />

              <label>Priority:</label>
              <input className='form-control' type="number" placeholder='' />

              <label>Date:</label>
              <input className='form-control' type="date" placeholder='' />

              <br/>

              <button type="submit" className="btn btn-primary form-group">Submit</button>

            </form>

          </div>
        </div>

      </div>
    );
  }
}
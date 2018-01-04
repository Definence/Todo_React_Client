import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';
//import { browserHistory } from 'react-router'

import Menu from '../layouts/menu';


class Task_Profile extends Component {

  render () {
    console.log(this.props.params);
    return (
      <div>
        <Menu />

        <div className='container'>
          <div className='col-sm-3 col-xs-1' />
          <div className='col-sm-6 col-xs-10'>

            <h2 className='text-center'>Task profile</h2>

            <p>Title: {  }</p>
            <p>Description: {  }</p>
            <p>Priority: {  }</p>
            <p>Date: {  }</p>
            <p>Status: {  }</p>

          </div>
        </div>
      </div>
    );
  }
}


export default connect(
  state => ({
    task: state.tasks.tasks.filter(t => t.id === state.tasks.show)
  })
)(Task_Profile);
import React from 'react';
// import { connect } from 'react-redux';
import { connect } from 'react-redux';

import Menu from '../layouts/menu';
import { addUser  } from '../../actions/users';


class Sign_up extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: '',
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        password_confirmation: ''
      }
    };
  }

  handleChange(field, element) {
    this.state.user[field] = element.target.value
    //console.log(element.target.value)
  }

  handleSubmit() {
    this.props.onAddUser(this.state.user)
    //console.log(this.state.user)
  }

  render() {
    return (
      <div>

        <Menu />

        <div className='col-sm-3 col-md-4' />

        <div className='col-sm-6 col-md-4' >

          <h2 className='text-center'>Sign up</h2>

          <form className='form-horizontal' onSubmit={this.handleSubmit.bind(this)} >

            <div>
              <label>Email:</label>
              <input className='form-control' placeholder="Enter your email" type="email" onChange={this.handleChange.bind(this, 'email')} />
            </div>

            <div>
              <label>Username:</label>
              <input className='form-control' placeholder="Enter a username" type="text" onChange={this.handleChange.bind(this, 'username')} />
            </div>

            <div>
              <label>Firstname:</label>
              <input className='form-control' placeholder="Enter your firstname" type="text" onChange={this.handleChange.bind(this, 'firstname')} />
            </div>

            <div>
              <label>Lastname:</label>
              <input className='form-control' placeholder="Enter your lastname" type="text" onChange={this.handleChange.bind(this, 'lastname')} />
            </div>

            <div>
              <label>Password:</label>
              <input className='form-control' placeholder="Enter a password" type="password" onChange={this.handleChange.bind(this, 'password')} />
            </div>

            <div>
              <label>Password confirmation:</label>
              <input className='form-control' placeholder="Enter a password" type="password" onChange={this.handleChange.bind(this, 'password_confirmation')} />
            </div>

            <br />

            <button type="submit" className="btn btn-primary center-block">Sign up</button>

          </form>
        </div>

      </div>
    );

    }
  }

export default connect(
  state => ({}),
  dispatch => ({
    onAddUser: (user) => {
      dispatch(addUser(user));
    }
  })
)(Sign_up);
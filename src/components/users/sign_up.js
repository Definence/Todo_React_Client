import React from 'react';
// import { connect } from 'react-redux';
import { connect } from 'react-redux';

import Menu from '../layouts/menu';
import { signUp  } from '../../actions/users';


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

  handleChange(field, e) {
    let new_user = Object.assign({}, this.state.user);
    new_user[field] = e.target.value;
    this.setState({ user: new_user });
  }

  handleSubmit(element) {
    console.log(this.user)
    element.preventDefault();
    this.props.onSignUp(this.state.user)
    //console.log(this.state.user)
  }

  render() {
    return (
      <div>

        <Menu />

        <div className='col-sm-3 col-md-4' />

        <div className='col-sm-6 col-md-4' >

          <h2 className='text-center'>Sign up form</h2>

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

            <button type="submit" className="btn btn-primary btn-lg center-block">Sign up</button>

          </form>
        </div>

      </div>
    );

  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onSignUp: (user) => {
      dispatch(signUp(user));
    }
  })
)(Sign_up);
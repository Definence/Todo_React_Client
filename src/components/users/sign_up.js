import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../layouts/navbar';
import { signUp  } from '../../actions/users';
import Notification from '../layouts/notification';


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
    element.preventDefault();
    this.props.onSignUp(this.state.user)
  }

  render() {
    return (
      <div>

        <Navbar />

        <Notification />

        <div className='col-sm-3 col-md-4' />

        <div className='col-sm-6 col-md-4' >

          <h2 className='text-center'>Sign up form</h2>

          <form className='form-horizontal' onSubmit={this.handleSubmit.bind(this)} >

            <div>
              <label>Email:</label>
              <input
                className='form-control'
                placeholder="Enter your email"
                type="email"
                onChange={this.handleChange.bind(this, 'email')}
                minLength="8"
                required
              />
            </div>

            <div>
              <label>Username:</label>
              <input
                className='form-control'
                placeholder="Enter a username"
                type="text"
                onChange={this.handleChange.bind(this, 'username')}
                pattern='{3,10}'
                title="Username must be unique and can contain only letters. 3-10 symbols is allowed"
                required
              />
            </div>

            <div>
              <label>Firstname:</label>
              <input
                className='form-control'
                placeholder="Enter your firstname"
                type="text"
                onChange={this.handleChange.bind(this, 'firstname')}
                pattern='[A-Za-z\d]{3,}'
                title="Firstname can contain only letters. 3-10 symbols is allowed"
                // minLength="3"
                required
              />
            </div>

            <div>
              <label>Lastname:</label>
              <input
                className='form-control'
                placeholder="Enter your lastname"
                type="text"
                onChange={this.handleChange.bind(this, 'lastname')}
                pattern='[A-Za-z]'
                title="Lastname can contain only letters. 4-12 symbols is allowed"
                pattern='[A-Za-z]{4,12}'
                required
              />
            </div>

            <div>
              <label>Password:</label>
              <input
                className='form-control'
                placeholder="Enter a password"
                type="password"
                onChange={this.handleChange.bind(this, 'password')}
                minLength="6"
                required
              />
            </div>

            <div>
              <label>Password confirmation:</label>
              <input
                className='form-control'
                placeholder="Enter a password"
                type="password"
                onChange={this.handleChange.bind(this, 'password_confirmation')}
                minLength="6"
                required
              />
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
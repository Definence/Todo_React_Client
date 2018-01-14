import React from 'react';
import { connect } from 'react-redux';

import Menu from '../layouts/menu';
import { signIn  } from '../../actions/users';


class Sign_in extends React.Component {
  constructor() {
    super();
    this.state = {
      session: {
        email: '',
        password: ''
      }
    };
  }

  handleChange(field, element) {
    this.state.session[field] = element.target.value;
    //console.log(this.state.session);
  }

  handleSubmit(element) {
    element.preventDefault();
    this.props.onSignIn(this.state.session);
    //console.log(this.state.session);
  }

  render() {
    return (
      <div>

        <Menu />

        <div className='col-sm-3 col-md-4' />

        <div className='col-sm-6 col-md-4' >
          <h2 className='text-center'>Log in form</h2>

          <form className='form-horizontal' onSubmit= { this.handleSubmit.bind(this) } >

            <div>
              <label>Email:</label>
              <input className='form-control' placeholder="Enter your email" type="email" onChange={ this.handleChange.bind(this, 'email') } />
            </div>

            <div>
              <label>Password:</label>
              <input className='form-control' placeholder="Enter your password" type="password" onChange={ this.handleChange.bind(this, 'password') } />
            </div>

            <br />

            <button type="submit" className="btn btn-primary btn-lg center-block">Sign in</button>

          </form>
        </div>

      </div>
    );
  }
}


export default connect(
  state => ({}),
  dispatch => ({
    onSignIn: (session) => {
      dispatch(signIn(session));
    }
  })
)(Sign_in);
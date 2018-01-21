import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../layouts/navbar';
import { emailConfirmation } from '../../actions/users';
import { token } from '../constants/api_config';


class Email_Confirmation extends Component {

  componentDidMount() {
    console.log(token);
    // var email_token = this.props.ownProps.routing.locationBeforeTransitions.query.email_token
    // this.props.onEmailConfirmation(email_token);
  }

  render() {
    return(
      <div>

        <Navbar />


      </div>
    );
  }
}

export default connect(
  ownProps => ({
    ownProps
  }),
  dispatch => ({
    onEmailConfirmation: (email_token) => {
      dispatch(emailConfirmation(email_token));
    }
  })
)(Email_Confirmation);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../layouts/navbar';
import { emailConfirmation } from '../../actions/users';
import { token } from '../constants/api_config';
import Notification from '../layouts/notification';


class Email_Confirmation extends Component {

  componentWillMount() {
    // console.log(this.props.location.query.email_token)
    let token = this.props.location.query.email_token;
    this.props.onEmailConfirmation(token);
  }

  render() {
    return(
      <div>

        <Navbar />

        <Notification />

      </div>
    );
  }
}

export default connect(
  ownProps => ({
    ownProps
  }),
  dispatch => ({
    onEmailConfirmation: (token) => {
      dispatch(emailConfirmation(token));
    }
  })
)(Email_Confirmation);
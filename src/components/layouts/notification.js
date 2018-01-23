import React from 'react';
import { connect } from 'react-redux';

import './notification.css';


const Notification = ({ notification }) => {

  const { notificationsAsync } = notification

  if (notificationsAsync.length > 0) {
    return (
      <div className='notifications-block container'>
        <ul>
          {
            notificationsAsync.map( (key, index) => {
              return <li key={ index } className='notification alert alert-info'>{ key.message }</li>
            })
          }
        </ul>
      </div>
    );
  }

  return null;

}

//задається notification (зі стор)
export default connect(
  state => ({
    notification: state.notifications
  })
)(Notification);
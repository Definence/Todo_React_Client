import React from 'react';
import { connect } from 'react-redux';

import './notification.css';


const Notification = ({ notification, dispatch }) => {

  if (notification) {
    //костиль з пропаданням алерту
    // setTimeout(() => {
    //   let Temp = document.getElementById("disappearing")
    //     if (Temp != null)
    //       Temp.style.display = "none";
    // }, 3000)

    return (
      <div id='disappearing'>
        <div className='notifications-block'>
          {notification.type}: {notification.text}
        </div>
      </div>
    );
   }

  return null;
  // return <div className='notifications-block'>ELse</div>

}

//задається notification (зі стор)
export default connect(
  state => ({
    notification: state.notifications
  })
)(Notification);
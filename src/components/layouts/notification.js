import React from 'react';
import { connect } from 'react-redux';

import './notification.css';


const Notification = ({ notification }) => {

  const { notificationsAsync } = notification

  if (notificationsAsync.length > 0) {
    let elementNumber;
    return (
      <div>
        <ul>
          {
            notificationsAsync.map( (key, index) => {
              return <li key={ index }>{ key.message }</li>
            })
          }
        </ul>
      </div>
    );
  }

  return null;

  // if (notification) {
    //костиль з пропаданням алерту
    // setTimeout(() => {
    //   let Temp = document.getElementById("disappearing")
    //     if (Temp != null)
    //       Temp.style.display = "none";
    // }, 3000)

  //   return (
  //     <div id='disappearing'>
  //       <div className='notifications-block'>
  //         {notification.type}: {notification.text}
  //       </div>
  //     </div>
  //   );
  //  }

  // return null;
  // return <div className='notifications-block'>ELse</div>

}

//задається notification (зі стор)
export default connect(
  state => ({
    notification: state.notifications
  })
)(Notification);
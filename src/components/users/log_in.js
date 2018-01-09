import React from 'react';
// import { connect } from 'react-redux';

import Menu from '../layouts/menu';


const Log_in = () => {
  return (
    <div>

      <Menu />

      log in

    </div>
  );
}

export default Log_in;
// export default connect(
//   state => ({}),
//   dispatch => ({
//     onLogIn: (state) => {
//       dispatch(logIn(state.session));
//     }
//   })
// )(Log_in);
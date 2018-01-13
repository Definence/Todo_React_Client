import React from 'react';
// import { connect } from 'react-redux';

import Menu from '../layouts/menu';


const Log_in = () => {
  return (
    <div>

      <Menu />

      <div className='col-sm-3 col-md-4' />

      <div className='col-sm-6 col-md-4' >

        <h2 className='text-center'>Log in</h2>

        <form className='form-horizontal' >

          <div>
            <label>Email:</label>
            <input className='form-control' placeholder="Enter your email" type="email" />
          </div>

          <div>
            <label>Password:</label>
            <input className='form-control' placeholder="Enter a password" type="password" />
          </div>

          <br />

          <button type="submit" className="btn btn-primary center-block">Log in</button>

        </form>
      </div>

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
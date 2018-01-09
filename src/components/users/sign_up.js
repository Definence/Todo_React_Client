import React from 'react';
// import { connect } from 'react-redux';

import Menu from '../layouts/menu';


const Sign_up = () => {
  return (
    <div>

      <Menu />

      <div className='col-sm-3 col-md-4' />

      <div className='col-sm-6 col-md-4' >

        <h2 className='text-center'>Sign up</h2>

        <form className='form-horizontal' >

          <div>
            <label>Email:</label>
            <input className='form-control' placeholder="Enter your email" type="email" />
          </div>

          <div>
            <label>Username:</label>
            <input className='form-control' placeholder="Enter a username" type="text" />
          </div>

          <div>
            <label>Firstname:</label>
            <input className='form-control' placeholder="Enter your firstname" type="text" />
          </div>

          <div>
            <label>Lastname:</label>
            <input className='form-control' placeholder="Enter your lastname" type="text" />
          </div>

          <div>
            <label>Password:</label>
            <input className='form-control' placeholder="Enter a password" type="password" />
          </div>

          <div>
            <label>Password verification:</label>
            <input className='form-control' placeholder="Enter a password" type="password" />
          </div>

          <br />

          <button type="submit" className="btn btn-primary center-block">Sign up</button>

        </form>
      </div>

    </div>
  );
}


export default Sign_up;
// export default connect(
//   state => ({}),
//   dispatch => ({
//     onAddUser: (state) => {
//       dispatch(signUp(state));
//     }
//   })
// )(Sign_up);

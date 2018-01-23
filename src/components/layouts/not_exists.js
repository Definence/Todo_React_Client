import React from 'react';

import Navbar from './navbar';


export default class NotFound extends React.Component {
  render() {
    return (
      <div>

        <Navbar />

        <div className="container">
          <h1 className='text-center'>Error 404:</h1>
          <h1 className='text-center'>Page not found !</h1>
        </div>

      </div>
    );
  }
}
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Navbar = ({ownProps}) => {
  //визначає нинішній паз
  let pathname = ownProps.routing.locationBeforeTransitions.pathname

  //функціяб що:
  function li(link_to, text) {
    //порівнює паз з лінками. активний виділяє
    let if_active = "";
    if (pathname === link_to) {
      if_active = "active";
    } else {
      if_active = "";
    }
    //відображає кожен елемент навбару
    return (
      <div className="nav navbar-nav">
        <li className={if_active}><Link to={link_to}>{text}</Link></li>
      </div>
    );
  }

  //навбар
  return (
    <div>
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="row">
            <ul>

              <div className="col-xs-12 col-sm-9 col-md-10">
                {li("", 'ToDo')}
                {li("/", 'Main')}
              </div>

              <div className='col-xs-12 col-sm-3 col-md-2'>
                {li("/user/log_in", 'Log in')}
                {li("/user/sign_up", 'Sign up')}
              </div>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

//звязання даних стор із компонентами програми
export default connect(
  ownProps => ({
    ownProps
  })
)(Navbar);

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Navbar = ({ownProps}) => {
  //визначає нинішній path
  let pathname = ownProps.routing.locationBeforeTransitions.pathname

  //функціяб що:
  function link(link_to, text) {
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

  //691> норм меню
  return (
    <div>

      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">TODO</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {link("/", 'Main')}
              {link("/users/log_in", 'Log in')}
              {link("/users/sign_up", 'Sign up')}
            </ul>

            <ul className="nav navbar-nav navbar-right">

              <li className="dropdown">

                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Signed in as: username
                  <b className="caret"></b>
                </a>

                <ul className="dropdown-menu">
                  {link("/users/sign_out", 'Sign out')}
                </ul>

              </li>

            </ul>

          </div>
        </div>
      </nav>

    </div>
  );
}

//звязання даних стор із компонентами програми
export default connect(
  ownProps => ({
    ownProps
  })
)(Navbar);



//old menu
// <nav className="navbar navbar-default" role="navigation">

//   <div className="container-fluid">

//     <div className="navbar-header">
//       <a className="navbar-brand" href="#">TODO</a>
//     </div>

//     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

//       <ul className="nav navbar-nav">
//         {li("/", 'Main')}
//         {li("/users/log_in", 'Log in')}
//         {li("/users/sign_up", 'Sign up')}
//       </ul>

//       <ul className="nav navbar-nav navbar-right">

//         <li className="dropdown">
//           <a href="#" className="dropdown-toggle" data-toggle="dropdown">
//             Signed in as: username
//             <b className="caret"></b>
//           </a>
//           <ul className="dropdown-menu">
//             {li("/users/sign_out", 'Sign out')}
//           </ul>
//         </li>

//       </ul>

//     </div>
//   </div>
// </nav>
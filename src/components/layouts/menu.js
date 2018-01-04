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

// <nav className="navbar navbar-default" role="navigation">
//   <div className="container-fluid">
//     <div className="navbar-header">
//       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
//         <span className="sr-only">Toggle navigation</span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//       </button>
//       <a className="navbar-brand" href="#">Название сайта</a>
//     </div>
//     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//       <ul className="nav navbar-nav">
//         <li className="active"><a href="#">Пункт 1</a></li>
//         <li><a href="#">Пункт 2</a></li>
//         <li><a href="#">Пункт 3</a></li>
//         <li><a href="#">Пункт 4</a></li>
//         <li><a href="#">Пункт 5</a></li>
//       </ul>
//     </div>
//   </div>
// </nav>

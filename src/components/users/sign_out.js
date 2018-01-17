import React from 'react';
import { browserHistory } from 'react-router';


export default class Sign_out extends React.Component {
	componentWillMount() {
		localStorage.removeItem('token');
    browserHistory.push('#/users/sign_in');
    location.reload()
	}
}
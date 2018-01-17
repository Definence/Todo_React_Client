import React from 'react';
import { browserHistory } from 'react-router';

import Navbar from '../layouts/navbar';


export default class Sign_out extends React.Component {
	render() {
		return <Navbar />
	}
	componentDidMount() {
		localStorage.removeItem('token');
    browserHistory.push('#/users/sign_in');
    location.reload()
	}
}
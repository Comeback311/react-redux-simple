import React from 'react';

import { connect } from 'react-redux';

import { loginUser, logoutUser } from './store/auth/actions';

import Routes from './routes';

import tools from './tools';

import './styles/reset.scss';
import './styles/global.scss';

class AppContent extends React.Component {
	constructor(props) {
		super(props);

		this.tryToLogin();
	}

	tryToLogin() {
		const uid = tools.getCookie('uid');
		const login = tools.getCookie('login');

		if (uid && login) {
			this.props.loginUser({ uid, login });

			this.updateOnlineStatus();
		}
	}

	updateOnlineStatus() {
		setInterval(function () {
			this.sendOnlineRequest.call(this);
		}.bind(this), 10000);

		this.sendOnlineRequest();
	}

	sendOnlineRequest() {
		fetch('/api/online')
			.then(r => r.json())
			.then(data => this.onFetchResponse.call(this, data))
	}

	onFetchResponse(data) {
		if (data.error) {
			console.error(data.errorText);
		}
	}

	render() {
		return (
			<Routes />
		);
	}
};

const mapStateToProps = state => {
	return {
		login: state.auth.login,
		uid: state.auth.uid
	};
}
const mapDispatchToProps = {
	loginUser,
	logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContent);

import React from 'react';

import { connect } from 'react-redux';

import { loginUser, logoutUser } from './store/auth/actions';

import Routes from './routes';
import { Auth } from './pages';

import tools from './tools';

import './styles/reset.scss';
import './styles/global.scss';

class AppContent extends React.Component {
	constructor(props) {
		super(props);

		this.isLogged = this.tryToLogin();

		if (!this.isLogged && window.location.pathname !== '/') {
			window.location.href = window.location.origin;
		}
	}

	tryToLogin() {
		const uid = tools.getCookie('uid');
		const login = tools.getCookie('login');

		if (uid && login) {
			this.props.loginUser({ uid, login });

			this.updateOnlineStatus();

			return true;
		} else {
			return false;
		}
	}

	updateOnlineStatus() {
		setInterval(function () {
			fetch('/api/online')
				.then(r => r.json())
				.then(data => this.onFetchResponse.call(this, data))
		}.bind(this), 10000);
	}

	onFetchResponse(data) {
		if (data.error) {
			console.error(data.errorText);
		}
	}

	render() {
		return (
			this.isLogged ? <Routes /> : <Auth />
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

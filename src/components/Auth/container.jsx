import React from 'react';
import { connect } from 'react-redux';

import { setLogin, setPassword, loginUser, showErrorText } from '../../store/auth/actions';

import Auth from './auth'

class AuthContainer extends React.Component {
	render() {
		return (
			<Auth 
                login={this.props.login}
                password={this.props.password}
                uid={this.props.uid}
                errorText={this.props.errorText}
                setPassword={this.props.setPassword}
                setLogin={this.props.setLogin}
                loginUser={this.props.loginUser}
                showErrorText={this.props.showErrorText}
            />
		);
	}
};

const mapStateToProps = state => {
    return {
        login: state.auth.login,
        password: state.auth.password,
        uid: state.auth.uid,
        errorText: state.auth.errorText
    };
}

const mapDispatchToProps = {
    setLogin,
    setPassword,
    loginUser,
    showErrorText
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);

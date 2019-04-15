import React from 'react';
import { connect } from 'react-redux';

import { loginUser, setLogin, setPassword, showErrorText, loadingLoginUser } from '../../store/auth/actions';

import AuthContainer from './AuthContainer';

class Auth extends React.Component {
    render() {
        return (
            <AuthContainer
                uid={this.props.uid}
                login={this.props.login}
                password={this.props.password}
                errorText={this.props.errorText}
                loading={this.props.loading}

                setPassword={this.props.setPassword}
                setLogin={this.props.setLogin}
                showErrorText={this.props.showErrorText}
                loginUser={this.props.loginUser}
                loadingLoginUser={this.props.loadingLoginUser}
            />
        );
    }
};

const mapStateToProps = state => {
    return {
        login: state.auth.login,
        password: state.auth.password,
        uid: state.auth.uid,
        errorText: state.auth.errorText,
        loading: state.auth.loading
    };
}
const mapDispatchToProps = {
    setLogin,
    setPassword,
    loginUser,
    showErrorText,
    loadingLoginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

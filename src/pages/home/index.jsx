import React from 'react';
import { connect } from 'react-redux';

import { loginUser, setLogin, setPassword, showErrorText } from '../../store/auth/actions';

import HomeContainer from './HomeContainer';

class Home extends React.Component {
    render() {
        return (
            <HomeContainer
                uid={this.props.uid}
                login={this.props.login}
                password={this.props.password}
                errorText={this.props.errorText}

                setPassword={this.props.setPassword}
                setLogin={this.props.setLogin}
                showErrorText={this.props.showErrorText}
                loginUser={this.props.loginUser}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

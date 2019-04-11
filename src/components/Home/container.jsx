import React from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../../store/auth/actions';

import Header from './home'

class HomeContainer extends React.Component {
	render() {
		return (
			<Header 
                logoutUser={this.props.logoutUser}
                uid={this.props.uid}
                login={this.props.login}
            />
		);
	}
};

const mapStateToProps = state => {
    return {
        uid: state.auth.uid,
        login: state.auth.login
    };
}

const mapDispatchToProps = {
    logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

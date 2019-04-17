import React from 'react';

import { connect } from 'react-redux';

import { setUserNotFound, setUserData, clearUserData } from '../../store/user/actions';
import { loadingLoginUser } from '../../store/auth/actions';

import UserPageContainer from './UserPageContainer';

import { DefaultPage } from '../../pages';

class UserPage extends React.Component {
    render() {
        return (
            <DefaultPage pageContent={
                <UserPageContainer
                    id={this.props.match.params.id}
                    uid={this.props.uid}
                    found={this.props.found}
                    user={this.props.user}
                    loading={this.props.loading}

                    setUserNotFound={this.props.setUserNotFound}
                    setUserData={this.props.setUserData}
                    clearUserData={this.props.clearUserData}
                    loadingLoginUser={this.props.loadingLoginUser}
                />
            } />
        );
    }
};


const mapStateToProps = state => {
    return {
        uid: Number(state.auth.uid),
        found: state.user.found,
        user: state.user.user,
        loading: state.auth.loading
    };
}
const mapDispatchToProps = {
    setUserNotFound,
    setUserData,
    clearUserData,
    loadingLoginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

import React from 'react';

import { connect } from 'react-redux';

import { setUserNotFound, setUserData, clearUserData } from '../../store/user/actions';

import UserPageContainer from './UserPageContainer';

import { DefaultPage } from '../../pages';

class UserPage extends React.Component {
    render() {
        return (
            <DefaultPage pageContent={
                <UserPageContainer 
                    id={this.props.match.params.id}
                    found={this.props.found}
                    user={this.props.user}
                    setUserNotFound={this.props.setUserNotFound}
                    setUserData={this.props.setUserData}
                    clearUserData={this.props.clearUserData}
                />
            } />
        );
    }
};


const mapStateToProps = state => {
    return {
        found: state.user.found,
        user: state.user.user
    };
}
const mapDispatchToProps = {
    setUserNotFound,
    setUserData,
    clearUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

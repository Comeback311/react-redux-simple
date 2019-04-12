import React from 'react';

import { connect } from 'react-redux';

import { setAllUsers } from '../../store/users/actions';

import UsersContainer from './UsersContainer';
class Users extends React.Component {
    render() {
        return (
            <UsersContainer 
                users={this.props.users}
                setAllUsers={this.props.setAllUsers}
            />
        );
    }
};


const mapStateToProps = state => {
    return {
        users: state.users.list
    };
}

const mapDispatchToProps = {
    setAllUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

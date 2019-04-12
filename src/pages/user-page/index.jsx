import React from 'react';

import { connect } from 'react-redux';

import UserPageContainer from './UserPageContainer';

class UserPage extends React.Component {
    render() {
        return (
            <UserPageContainer id={this.props.match.params.id}/>
		);
    }
};


const mapStateToProps = state => {
    return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

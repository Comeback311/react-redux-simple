import React from 'react';
import { connect } from 'react-redux';

import { toggleSidebar } from '../../store/sidebar/actions';
import { logoutUser } from '../../store/auth/actions';

import SidebarContainer from './SidebarContainer';

class Sidebar extends React.Component {
	render() {
		return (
			<SidebarContainer 
                isOpenedSidebar={this.props.isOpenedSidebar}

                toggleSidebar={this.props.toggleSidebar}
                logoutUser={this.props.logoutUser}
            />
		);
	}
};

const mapStateToProps = state => {
    return {
        isOpenedSidebar: state.sidebar.isOpened
    };
}

const mapDispatchToProps = {
    toggleSidebar,
    logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

import React from 'react';
import { connect } from 'react-redux';

import { toggleSidebar } from '../../store/sidebar/actions';

import OverlayContainer from './OverlayContainer';

class Overlay extends React.Component {
	render() {
		return (
			<OverlayContainer 
                isOpenedSidebar={this.props.isOpenedSidebar}

                toggleSidebar={this.props.toggleSidebar}
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
    toggleSidebar
};

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);

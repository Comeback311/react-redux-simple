import React from 'react';

import { connect } from 'react-redux';

import { NoFoundPage } from './';

class DefaultPage extends React.Component {
    isLanding() {
        return window.location.pathname === '/';
    }

    render() {
        return (
            this.props.uid || this.isLanding() ?
                this.props.pageContent : <NoFoundPage />
		);
    }
};

const mapStateToProps = state => {
    return {
        uid: state.auth.uid
    };
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);

import React from 'react';

import { connect } from 'react-redux';

import { NoFoundPage } from './';

import { Header, Footer, Sidebar } from '../components';

class DefaultPage extends React.Component {
    isLanding() {
        return window.location.pathname === '/';
    }

    pageContent() {
        return (
            <React.Fragment>
                <Header />
                <div className={'page' + (this.props.addedClasses ? ` ${this.props.addedClasses}` : '')}>
                    {this.props.pageContent}
                </div>
                <Sidebar />
                {!this.props.noFooter && <Footer />}    
            </React.Fragment>
        )
    }

    render() {
        return (
            this.props.uid || this.isLanding() ?
                this.pageContent() : <NoFoundPage />
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

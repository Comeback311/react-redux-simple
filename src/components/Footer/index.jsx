import React from 'react';
import { connect } from 'react-redux';

import FooterContainer from './FooterContainer'

import { startAnimateFooter, stopAnimateFooter } from '../../store/footer/actions';

class Footer extends React.Component {
	render() {
		return (
			<FooterContainer 
                isAnimatedFooter={this.props.isAnimatedFooter}

                startAnimateFooter={this.props.startAnimateFooter}
                stopAnimateFooter={this.props.stopAnimateFooter}
            />
		);
	}
};

const mapStateToProps = state => {
    return {
        isAnimatedFooter: state.footer.isAnimated
    };
}

const mapDispatchToProps = {
    startAnimateFooter,
    stopAnimateFooter
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

import React from 'react';

import { onToggleSidebar } from '../../store/sidebar/actions';

import './index.scss'

export default class OverlayContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onOverlayClick = this.onOverlayClick.bind(this);
    }

    onOverlayClick(e) {
        e.preventDefault();

        this.props.toggleSidebar();
    }

    render() {
        return (
            <div 
                className={'overlay ' + (this.props.isOpenedSidebar ? ' overlay_opened' : '')} 
                onClick={this.onOverlayClick}
            ></div>
        );
    }
};

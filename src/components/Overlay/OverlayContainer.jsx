import React from 'react';

import './index.scss'

export default class OverlayContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onOverlayClick = this.onOverlayClick.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);

        this.initialPoint = null;
        this.finalPoint = null;
    }

    onOverlayClick(e) {
        e.preventDefault();

        this.props.toggleSidebar();
    }

    onTouchStart(e) {
        this.initialPoint = e.changedTouches[0];
    }

    onTouchEnd(e) {
        this.finalPoint = e.changedTouches[0];

        if (this.needToDoSwipeLeft()) {
            this.props.toggleSidebar();
        }
    }

    needToDoSwipeLeft() {
        const xAbs = Math.abs(this.initialPoint.pageX - this.finalPoint.pageX);
        const yAbs = Math.abs(this.initialPoint.pageY - this.finalPoint.pageY);

        return xAbs > 20 || yAbs > 20 && xAbs > yAbs && this.finalPoint.pageX < this.initialPoint.pageX;
    }

    render() {
        return (
            <div
                className={'overlay ' + (this.props.isOpenedSidebar ? ' overlay_opened' : '')}
                onClick={this.onOverlayClick}
                onTouchEnd={this.onTouchEnd}
                onTouchStart={this.onTouchStart}
            ></div>
        );
    }
};

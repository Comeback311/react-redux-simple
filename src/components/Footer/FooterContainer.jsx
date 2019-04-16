import React from 'react';

import './index.scss'

export default class FooterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);

        this.startAnimationTimer = null;
        this.startDelay = null;
        this.startCoords = {};

        this.LONG_TAP_DELAY = 800;
        this.ANIMATION_DELAY = 510;
    }

    onTouchStart(e) {
        if (this.props.isAnimatedFooter) return;

        this.startDelay = new Date();

        const touches = e.changedTouches[0];

        this.startCoords.x = touches.pageX;
        this.startCoords.y = touches.pageY;

        this.startAnimationTimer = setTimeout(function () {
            this.props.startAnimateFooter();
            this.stopAnimate();
        }.bind(this), this.LONG_TAP_DELAY);
    }

    onTouchMove(e) {
        if (this.props.isAnimatedFooter) return;

        const touches = e.changedTouches[0];

        const offsetX = Math.abs(touches.pageX - this.startCoords.x);
        const offsetY = Math.abs(touches.pageY - this.startCoords.y);

        const MAX_TOUCH_OFFSET = 10;

        if (offsetX > MAX_TOUCH_OFFSET ||
            offsetY > MAX_TOUCH_OFFSET) {
            this.clearStartAnimate();
        }
    }

    onTouchEnd(e) {
        if (this.props.isAnimatedFooter) return;

        const pdelay = new Date();

        if ((pdelay.getTime() - this.startDelay.getTime()) < this.LONG_TAP_DELAY) {
            this.clearStartAnimate();
        }
    }

    stopAnimate() {
        setTimeout(function () {
            this.props.stopAnimateFooter();
        }.bind(this), this.ANIMATION_DELAY);
    }

    clearStartAnimate() {
        clearTimeout(this.startAnimationTimer);
    }

    render() {
        return (
            <div className='footer'>
                <div
                    className={'footer__copy' + (this.props.isAnimatedFooter ? ' footer__copy_animated' : '')}
                    onTouchStart={this.onTouchStart}
                    onTouchEnd={this.onTouchEnd}
                    onTouchMove={this.onTouchMove}
                >Avdeev Denis &copy;</div>
            </div>
        );
    }
};

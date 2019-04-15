import React from 'react';

import { firstUpper } from '../../tools/index'

import './index.scss'

export default class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onBurgerClick = this.onBurgerClick.bind(this);
    }

    onBurgerClick() {
        this.props.toggleSidebar();
    }

    render() {
        return (
            <div className='header'>
                <div className='header__logo'>
                    <svg
                        viewBox='0 0 30 30'
                        xmlns='http://www.w3.org/2000/svg'
                        className='header__burger' onClick={this.onBurgerClick}
                    >
                        <path d='M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z'/>
                    </svg>
                    <p className='header__login'>{firstUpper(this.props.login)}</p>
                </div>
            </div>
        );
    }
};

import React from 'react';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getCookie, firstUpper } from '../../tools/index'
import home from './images/home.svg'

import './index.scss'

export default class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    onLogoutClick() {
        fetch('/api/logout')
            .then(r => r.json())
            .then(data => this.onFetchResponse.call(this, data))
    }

    onFetchResponse(data) {
        if (data.success) {
            if (!getCookie('uid')) {
                this.props.logoutUser();
            }
        }
    }

    render() {
        return (
            <div className='header'>
                <div className='header__logo'>
                    <img width='20' height='20' className='header__logo-icon' src={home} alt='' />
                    Hello, <span className='header__login'>{firstUpper(this.props.login)}</span>
                </div>
                <div className='header__logout'>
                    <Link to='' onClick={this.onLogoutClick}>
                        <Button variant='primary'>
                            Выйти
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
};

import React from 'react';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import burgerMenuIcon from '../../assets/images/burger-menu.svg';
import crossIcon from '../../assets/images/cross.svg';

import { firstUpper } from '../../tools/index'

import './index.scss'

export default class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onLogoutClick = this.onLogoutClick.bind(this);
        this.onClickMenu = this.onClickMenu.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);

        this.state = '';
    }

    onClickMenu() {
        this.setState({
            isOpenedSidebar: !this.state.isOpenedSidebar
        });
    }

    onSidebarClick() {
        this.setState({
            isOpenedSidebar: !this.state.isOpenedSidebar
        });
    }

    onLogoutClick() {
        this.props.logoutUser();
    }

    render() {
        return (
            <div className='header'>
                <div className='header__logo'>
                    <img className='header__burger' src={burgerMenuIcon} onClick={this.onClickMenu} alt='' />
                    <p>
                        Hello, <span className='header__login'>{firstUpper(this.props.login)}</span>
                    </p>
                </div>
                <div className='header__logout'>
                    <Link to='' onClick={this.onLogoutClick}>
                        <Button variant='primary'>
                            Выйти
                        </Button>
                    </Link>
                </div>
                <div className={'overlay ' + (this.state.isOpenedSidebar ? ' overlay_opened' : '')} onClick={this.onSidebarClick}></div>
                {<div className={'sidebar ' + (this.state.isOpenedSidebar ? 'sidebar_opened' : '')}>
                    <div className='sidebar__header'>
                        <img className='sidebar__close' src={crossIcon} onClick={this.onSidebarClick} alt=''/>
                    </div>
                    <div className='sidebar__content'>
                        <div className='sidebar__top'>
                            <Button block variant='success'>
                                Друзья
                            </Button>
                            <Button block variant='success'>
                                Сообщения
                            </Button>
                            <Button block variant='success'>
                                Пользователи
                            </Button>
                        </div>

                        <div className='sidebar__bottom'>
                            <Button block variant='info'>
                                Выход
                        </Button>
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
};

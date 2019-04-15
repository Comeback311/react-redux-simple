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
                    <p className='header__login'>{firstUpper(this.props.login)}</p>
                </div>
                <div className={'overlay ' + (this.state.isOpenedSidebar ? ' overlay_opened' : '')} onClick={this.onSidebarClick}></div>
                {<div className={'sidebar ' + (this.state.isOpenedSidebar ? 'sidebar_opened' : '')}>
                    <div className='sidebar__header'>
                        <img className='sidebar__close' src={crossIcon} onClick={this.onSidebarClick} alt='' />
                    </div>
                    <div className='sidebar__content'>
                        <div className='sidebar__top'>
                            <Link to='' onClick={this.onSidebarClick}>
                                <Button block variant='primary' onClick={this.onSidebarClick}>
                                    Главная
                                </Button>
                            </Link>
                            <Button block variant='success' onClick={this.onSidebarClick}>
                                Друзья
                            </Button>
                            <Button block variant='success' onClick={this.onSidebarClick}>
                                Сообщения
                            </Button>
                            <Link to='/users' onClick={this.onSidebarClick}>
                                <Button block variant='success'>
                                    Пользователи
                                </Button>
                            </Link>
                        </div>

                        <div className='sidebar__bottom'>
                            <Link to='' onClick={this.onSidebarClick}>
                                <Button block variant='info' onClick={this.onLogoutClick}>
                                    Выход
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
};

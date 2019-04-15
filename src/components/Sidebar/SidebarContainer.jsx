import React from 'react';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Overlay } from '../../components';

import crossIcon from '../../assets/images/cross.svg';

import './index.scss'

export default class SidebarContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onToggleSidebar = this.onToggleSidebar.bind(this);
        this.onLogoutClick = this.onLogoutClick.bind(this);
        this.onOverlayClick = this.onOverlayClick.bind(this);
    }

    onOverlayClick(e) {
        e.preventDefault();

        this.onToggleSidebar();
    }

    onToggleSidebar() {
        this.props.toggleSidebar();
    }

    onLogoutClick() {
        this.props.logoutUser();
    }

    render() {
        const button = ({ text, variant = 'success', click, link }) => {
            const onBtnClick = function(click) {
                this.onToggleSidebar();

                click && click();
            };

            const btn = <Button block variant={variant} size='sm' onClick={onBtnClick.bind(this, click)}>{text}</Button>;

            return typeof(link) !== 'undefined' ? <Link to={link}>{btn}</Link> : btn;
        };

        return (
            <React.Fragment>
                <Overlay />
                <div className={'sidebar ' + (this.props.isOpenedSidebar ? 'sidebar_opened' : '')}>
                    <div className='sidebar__header'>
                        <img className='sidebar__close' src={crossIcon} onClick={this.onToggleSidebar} alt='' />
                    </div>
                    <div className='sidebar__content'>
                        <div className='sidebar__top'>
                            {button({ text: 'Главная', variant: 'primary', link: '' })}
                            {button({ text: 'Друзья' })}
                            {button({ text: 'Сообщения' })}
                            {button({ text: 'Пользователи', link: '/users' })}
                        </div>
                        <div className='sidebar__bottom'>
                            {
                                button({
                                    text: 'Выход',
                                    variant: 'info',
                                    click: this.onLogoutClick,
                                    link: ''
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

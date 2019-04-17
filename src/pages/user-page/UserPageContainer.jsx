import React from 'react';

import { Link } from 'react-router-dom';

import { lang, isCorrectUid } from '../../tools';

import { Loader } from '../../components';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import maleIcon from '../../assets/images/male-icon.png';
import femaleIcon from '../../assets/images/female-icon.png';

import './index.scss'

export default class UserPageContainer extends React.Component {
    constructor(props) {
        super(props);

        this.init();

        this._timer = null;

        // пользователь переходит в оффлайн
        this.OFFLINE_TIMEOUT = 1000 * 30; // 30 seconds

        this.onAddToFriendsButton = this.onAddToFriendsButton.bind(this);
    }

    init() {
        const uid = isCorrectUid(this.props.id);

        if (!uid) {
            this.props.setUserNotFound();
        } else {
            this.getInfoAboutUser(uid);
        }
    }

    onAddToFriendsButton() {
        console.log('add');
    }

    getInfoAboutUser(uid) {
        this.props.clearUserData();

        this.timer = setTimeout(function () {
            this.props.loadingLoginUser();
        }.bind(this), 800);

        fetch('/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uid })
        })
            .then(r => r.json())
            .then(data => this.onFetchResponse.call(this, data));
    }

    onFetchResponse(data) {
        clearTimeout(this.timer);

        // пользователь не найден
        if (data.errorCode === 100) {
            this.props.setUserNotFound();
        } else if (data.error) {
            console.log(data.error);
        } else if (data.success) {
            this.props.setUserData(data.user);
        }
    }

    userFoundComponent() {
        const user = this.props.user;
        const isUserOnline = this.isUserOnline(user.online);

        return (
            <React.Fragment>
                <div className='user-page__image'>
                    <img className='user-page__avatar' src={user.sex === 'male' ? maleIcon : femaleIcon} alt='' />
                    <div className={'user-page__status_' + (isUserOnline ? 'online' : 'offline')}></div>
                </div>
                <p className='user-page__name'>{user.firstName} {user.lastName}</p>
                <p className={'user-page__text_' + (isUserOnline ? 'online' : 'offline')}>{this.getOnlineStatus(user.online, user.sex)}</p>
                {

                }
                {this.isMyAccount(user.uid) ? <div className='user-page__actions'>
                    <Button
                        className='user-page__action-item'
                        variant='primary'
                        size='sm'
                        block
                        onClick={this.onAddToFriendsButton}
                    >Добавить в друзья</Button>
                    <Link className='browser-link' to={`/messages/${user.uid}`}><Button className='user-page__action-item' variant='primary' size='sm' block>Отправить сообщение</Button></Link>
                    <Button className='user-page__action-item' variant='danger' size='sm' block>Пожаловаться</Button>
                </div> : <div className='user-page__text'>Моя страница</div>}
            </React.Fragment>
        )
    }

    isMyAccount(uid) {
        return uid !== this.props.uid;
    }

    isUserOnline(online) {
        if (!online) return false;

        const now = + new Date();
        const diff = now - online;

        return diff < this.OFFLINE_TIMEOUT;
    }

    getOnlineStatus(online, sex) {
        if (!online) return 'оффлайн';

        const now = + new Date();
        const diff = now - online;
        const sexText = sex === 'male' ? 'был' : 'была';

        if (diff < this.OFFLINE_TIMEOUT) {
            return 'онлайн';
        }

        const seconds = Math.floor(diff / 1000);
        let textLang;

        if (seconds < 60) {
            textLang = lang(seconds, {
                one: 'секунду',
                two: 'секунды',
                five: 'секунд'
            });

            return `${sexText} ${textLang.number} ${textLang.text} назад`;
        }

        const minutes = Math.floor(seconds / 60);

        if (minutes < 60) {
            textLang = lang(minutes, {
                one: 'минуту',
                two: 'минуты',
                five: 'минут'
            });

            return `${sexText} ${textLang.number} ${textLang.text} назад`;
        }

        const hours = Math.floor(minutes / 60);

        if (hours < 24) {
            textLang = lang(hours, {
                one: 'час',
                two: 'часа',
                five: 'часов'
            });

            return `${sexText} ${textLang.number} ${textLang.text} назад`;
        }

        const days = Math.floor(hours / 24);
        textLang = lang(days, {
            one: 'день',
            two: 'дня',
            five: 'дней'
        });

        if (hours > 24) {
            let textLangAnother = lang(hours - 24, {
                one: 'час',
                two: 'часа',
                five: 'часов'
            });

            return `${sexText} ${textLang.number} ${textLang.text} ${textLangAnother.number} ${textLangAnother.text} назад`;
        }

        return `${sexText} ${textLang.number} ${textLang.text} назад`;
    }

    isUserFound() {
        return this.props.found === true;
    }

    isUserNotFound() {
        return this.props.found === false;
    }

    render() {
        return (
            <React.Fragment>
                <Link to='/users'>&larr; Список пользователей </Link>
                <div className='user-page'>
                    {
                        this.isUserNotFound() ? 'Пользователь не найден.' :
                            this.isUserFound() ? this.userFoundComponent() : ''
                    }
                    {
                        this.props.loading && !this.props.found && <Loader />
                    }
                </div>
            </React.Fragment>
        );
    }
};

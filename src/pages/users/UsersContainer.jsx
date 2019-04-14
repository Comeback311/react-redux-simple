import React from 'react';

import { Link } from 'react-router-dom';

import { Header, Footer } from '../../components';

import './index.scss';

export default class UsersContainer extends React.Component {
    componentDidMount() {
        fetch('/api/users')
            .then(r => r.json())
            .then(data => this.onFetchResponse.call(this, data))
    }

    onFetchResponse(data) {
        if (data.error) {
            console.error('Произошла ошибка', data.errorText);
        } else if (data.success && data.users) {
            this.props.setAllUsers(data.users);
        }
    }

    showUsersTable() {
        const users = this.props.users.map((user, i) => (
            <li className='list__item' key={i}>
                <Link to={'/users/id' + user.id}>
                    {user.firstName} {user.lastName} {this.onlineStatus(user.online)}
                </Link>
            </li>
        ));

        return (
            <ul className='list'>{users}</ul>
        );
    }

    onlineStatus(online) {
        if (!online) return '( оффлайн )';

        const OFFLINE_TIMEOUT = 1000 * 30; // 30 seconds

        const now = + new Date();
        const diff = now - online;

        if (diff < OFFLINE_TIMEOUT) {
            return '( онлайн )';
        }

        const seconds = Math.floor(diff / 1000);

        if (seconds < 60) {
            return '( был ' + seconds + ' секунд назад )';
        }

        const minutes = Math.floor(seconds / 60);

        if (minutes < 60) {
            return '( был ' + minutes + ' минут(у) назад )';
        }

        const hours = Math.floor(minutes / 60);

        if (hours < 24) {
            return '( был ' + hours + ' часов(а) назад )';
        }

        const days = Math.floor(hours / 24);

        return '( был ' + days + ' дня(ей) назад)';
    }

    render() {
        return (
            <div className='users'>
                <Header />
                <div className='page'>
                    <Link to='/'>&larr; На главную </Link>
                    {this.props.users && this.showUsersTable()}
                </div>
                <Footer />
            </div>
        );
    }
};

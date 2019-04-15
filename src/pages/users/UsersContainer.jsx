import React from 'react';

import { Link } from 'react-router-dom';

import maleIcon from '../../assets/images/male-icon.png';
import femaleIcon from '../../assets/images/female-icon.png';

import './index.scss';

export default class UsersContainer extends React.Component {
    constructor(props) {
        super(props);

        // пользователь переходит в оффлайн
        this.OFFLINE_TIMEOUT = 1000 * 30; // 30 seconds
    }

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
            <div className='users__item' key={i}>
                <div className='users__item-icon'>
                    <Link to={'/users/id' + user.uid}>
                        <img className='users__item-icon-avatar' alt='' src={user.sex === 'male' ? maleIcon : femaleIcon} />
                    </Link>
                    <div className={'users__item_' + (this.isUserOnline(user.online) ? 'online' : 'offline')} />
                </div>
                <p className='users__item-name'><Link to={'/users/id' + user.uid}>{user.firstName} {user.lastName}</Link></p>
            </div>
        ));

        return (
            <div className='users'>
                {users}
            </div>
        );
    }

    isUserOnline(online) {
        if (!online) return false;

        const now = + new Date();
        const diff = now - online;

        return diff < this.OFFLINE_TIMEOUT;
    }

    render() {
        return (
            <React.Fragment>
                <Link to='/'>&larr; На главную </Link>
                {this.props.users && this.showUsersTable()}
            </React.Fragment>
        );
    }
};

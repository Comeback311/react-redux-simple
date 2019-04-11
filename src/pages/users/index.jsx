import React from 'react';

import { Link } from 'react-router-dom';

import { Header } from '../../components';

export default class Users extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div>Users</div>
                <Link to='/'>Назад</Link>
            </React.Fragment>
        );
    }
};

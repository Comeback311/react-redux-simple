import React from 'react';

import { Link } from 'react-router-dom';

import { Header, Footer } from '../../components';

import './index.scss'

export default class UserPageContainer extends React.Component {
    constructor(props) {
        super(props);

        this._uid = props.id;
    }

    render() {
        return (
            <div className='user-page'>
                <Header />
                <div className='page'>
                    <Link to='/users'>&larr; Списко пользователей </Link>
                    <div style={{ marginTop: '15px' }}>
                        Пользователь с {this._uid}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

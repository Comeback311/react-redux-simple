import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Footer } from '../../components';
import { Auth } from '../../pages';

import './index.scss'

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const { login, password } = this.props;

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login, password })
        })
            .then(r => r.json())
            .then(data => this.onFetchResponse.call(this, data))
    }

    onFetchResponse(data) {
        if (data.success) {
            this.props.loginUser({
                uid: data.uid,
                login: data.login
            });
        } else if (data.error) {
            this.props.showErrorText(data.errorText);
        }
    }

    onLoginChange(e) {
        this.props.setLogin(e.target.value);
    }

    onPasswordChange(e) {
        this.props.setPassword(e.target.value);
    }

    renderHome() {
        return (
            <React.Fragment>
                <Header />
                <div className='page'>
                    <Link to='/users'>Все пользователи</Link>
                </div>
                <Footer />
            </React.Fragment>
        )
    }

    render() {
        return (
            this.props.uid ? this.renderHome() : <Auth />
        );
    }
};

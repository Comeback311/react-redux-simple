import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Footer } from '../../components';

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
        } else if(data.error) {
            this.props.showErrorText(data.errorText);
        }
    }

    onLoginChange(e) {
        this.props.setLogin(e.target.value);
    }

    onPasswordChange(e) {
        this.props.setPassword(e.target.value);
    }

    renderAuth() {
        return (
            <div className='auth'>
                <form className='auth__form' onSubmit={this.onSubmit}>
                    <input type='text' placeholder='login' onChange={this.onLoginChange} />
                    <input type='password' placeholder='password' onChange={this.onPasswordChange} />
                    <input type='submit' value='Войти' />
                    {this.props.errorText && <p className='auth__error'>{this.props.errorText}</p>}
                </form>
            </div>
        );
    }

    renderHome() {
        return (
            <div className='home'>
                <Header />
                <div className='page'>
                    <Link to='/users'>Все пользователи</Link>
                </div>
                <Footer />
            </div>
        )
    }

    render() {
        return (
            this.props.uid ? this.renderHome() : this.renderAuth()
		);
    }
};

import React from 'react';

import { Loader } from '../../components';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss'

export default class AuthContainer extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.loadingLoginUser();

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

    render() {
        return (
            <div className='auth'>
                <Form className='auth__form' onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="text" placeholder="Введите логин" onChange={this.onLoginChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" onChange={this.onPasswordChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                        Войти
                    </Button>
                    {this.props.errorText && <p className='auth__error'>{this.props.errorText}</p>}
                </Form>
                {this.props.loading && <Loader />}
            </div>
        );
    }
};

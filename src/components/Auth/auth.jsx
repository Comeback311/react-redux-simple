import React from 'react';
import Home from '../../components/Home/container';

import tools from '../../tools/index'

import './index.scss'

export default class Auth extends React.Component {
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

    componentDidMount() {
        const uid = tools.getCookie('uid');
        const login = tools.getCookie('login');

        if (uid && login) {
            this.props.loginUser({ uid, login });
        }
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
            <Home />
        )
    }

    render() {
        return (
            // tools.getCookie('uid') ? this.renderHome() : this.renderAuth()
            this.props.uid ? this.renderHome() : this.renderAuth()
		);
    }
};


// import React from 'react';

// export default class Auth extends React.Component {
//     constructor(props) {
//         super(props);

//         this.onEmailChange = this.onEmailChange.bind(this);
//         this.onPasswordChange = this.onPasswordChange.bind(this);
//         this.onclick = this.onclick.bind(this);
//     }

//     onEmailChange(e) {
//         this.props.setEmailText(e.target.value);
//     }

//     onPasswordChange(e) {
//         this.props.setPasswordText(e.target.value);
//     }

//     onclick() {
//         fetch('/users', {
//             method: 'POST',
//             headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({name: this.props.email})
//         })
//             .then(r => r.json())
//             .then(data => console.log(data))
//     }

//     render() {
//         return (
//             <div className='auth'>
//                 <p>Auth</p>
//                 <input type='text' placeholder='login' value={this.props.email} onChange={this.onEmailChange}/>
//                 <input type='password' placeholder='password' value={this.props.password} onChange={this.onPasswordChange}/>
//                 <button onClick={this.onclick}>Click</button>
//             </div>
//         )
//     }
// }

import { AUTH_SET_LOGIN, AUTH_SET_PASSWORD, LOGIN_USER, LOGOUT_USER, SHOW_ERROR_TEXT, LOADING_LOGIN_USER } from './actions';
import { deleteCookie } from '../../../src/tools';

const defaultState = {
    login: '',
    password: '',
    errorText: '',
    loading: false
};

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_SET_LOGIN:
            return {
                ...state,
                login: action.payload
            }

        case AUTH_SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            };

        case LOGIN_USER:
            delete state.password;
            delete state.errorText;

            return {
                ...state,
                uid: action.payload.uid,
                login: action.payload.login,
                loading: false
            };

        case LOGOUT_USER:
            delete state.uid;
            delete state.login;

            deleteCookie('uid');
            deleteCookie('login');

            return {
                ...state,
                loading: false
            };

        case SHOW_ERROR_TEXT:
            return {
                ...state,
                errorText: action.payload,
                loading: false
            };

        case LOADING_LOGIN_USER:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}

import { AUTH_SET_LOGIN, AUTH_SET_PASSWORD, LOGIN_USER, LOGOUT_USER, SHOW_ERROR_TEXT } from './actions';

const defaultState = {
    login: '',
    password: '',
    uid: '',
    errorText: ''
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
            }

        case LOGIN_USER:
            return {
                ...state,
                uid: action.payload.uid,
                login: action.payload.login
            }

        case LOGOUT_USER:
            return {
                ...state,
                uid: ''
            }

        case SHOW_ERROR_TEXT: {
            return {
                ...state,
                errorText: action.payload
            }
        }

        default:
            return state;
    }
}

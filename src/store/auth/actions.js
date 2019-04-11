export const AUTH_SET_LOGIN = 'AUTH_SET_LOGIN';
export const AUTH_SET_PASSWORD = 'AUTH_SET_PASSWORD';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const SHOW_ERROR_TEXT = 'SHOW_ERROR_TEXT';

export const setLogin = login => ({
    type: AUTH_SET_LOGIN,
    payload: login
});

export const setPassword = password => ({
    type: AUTH_SET_PASSWORD,
    payload: password
});

export const loginUser = uid => ({
    type: LOGIN_USER,
    payload: uid
});

export const logoutUser = uid => ({
    type: LOGOUT_USER,
    payload: uid
});

export const showErrorText = text => ({
    type: SHOW_ERROR_TEXT,
    payload: text
})



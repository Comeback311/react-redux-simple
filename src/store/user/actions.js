export const SET_USER_NOT_FOUND = 'SET_USER_NOT_FOUND';
export const SET_USER_DATA = 'SET_USER_DATA';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';

export const setUserNotFound = user => ({
    type: SET_USER_NOT_FOUND,
    payload: user
});

export const setUserData = user => ({
    type: SET_USER_DATA,
    payload: user
});

export const clearUserData = user => ({
    type: CLEAR_USER_DATA,
    payload: user
});


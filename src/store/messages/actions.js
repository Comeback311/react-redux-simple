export const SAVE_MESSAGES = 'SAVE_MESSAGES';
export const ADD_NEW_MESSAGE_TO_STORE = 'ADD_NEW_MESSAGE_TO_STORE';
export const CLEAR_MESSAGES_STORE = 'CLEAR_MESSAGES_STORE';
export const WRITE_MESSAGE = 'WRITE_MESSAGE';
export const SET_MESSAGE_ERROR = 'SET_MESSAGE_ERROR';

export const saveMessages = payload => ({
    type: SAVE_MESSAGES,
    payload: payload
});

export const writeMessage = payload => ({
    type: WRITE_MESSAGE,
    payload: payload
});

export const addNewMessageToStore = payload => ({
    type: ADD_NEW_MESSAGE_TO_STORE,
    payload: payload
});

export const clearMessagesStore = payload => ({
    type: CLEAR_MESSAGES_STORE,
    payload: payload
});

export const setMessageError = payload => ({
    type: SET_MESSAGE_ERROR,
    payload: payload
});

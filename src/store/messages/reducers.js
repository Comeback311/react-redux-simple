import {
    SAVE_MESSAGES,
    ADD_NEW_MESSAGE_TO_STORE,
    CLEAR_MESSAGES_STORE,
    WRITE_MESSAGE,
    SET_MESSAGE_ERROR
} from './actions';

const defaultState = {
    messages: [],
    user: null,
    hasMessages: null,
    text: '',
    error: false
};

export const messagesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_MESSAGES:
            const hasMessages = Boolean(action.payload.messages && action.payload.user);

            return {
                ...state,
                messages: action.payload.messages || defaultState.messages,
                user: action.payload.user || defaultState.user,
                hasMessages
            }

        case ADD_NEW_MESSAGE_TO_STORE:
            return {
                ...state,
                hasMessages: defaultState.hasMessages,
                messages: [].concat(state.messages, action.payload),
                text: defaultState.text
            }

        case WRITE_MESSAGE:
            return {
                ...state,
                text: action.payload
            }

        case SET_MESSAGE_ERROR:
        console.log('SET_MESSAGE_ERROR', {
            ...state,
            error: action.payload
        })
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_MESSAGES_STORE:
            return defaultState;

        default:
            return state;
    }
}

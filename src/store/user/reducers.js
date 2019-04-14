import { SET_USER_NOT_FOUND, SET_USER_DATA, CLEAR_USER_DATA } from './actions';

const defaultState = {
    found: null,
    user: null
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER_NOT_FOUND:
            return {
                ...state,
                found: false
            }

        case SET_USER_DATA:
            return {
                ...state,
                user: action.payload,
                found: true
            }

        case CLEAR_USER_DATA:
            return {
                ...state,
                found: null,
                user: null
            }

        default:
            return state;
    }
}

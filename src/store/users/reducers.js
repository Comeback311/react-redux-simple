import { SET_ALL_USERS } from './actions';

const defaultState = {
    list: []
};

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ALL_USERS:
            return {
                ...state,
                list: action.payload
            }

        default:
            return state;
    }
}

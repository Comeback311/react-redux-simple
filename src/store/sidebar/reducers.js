import { TOGGLE_SIDEBAR } from './actions';

const defaultState = {
    isOpened: false
};

export const sidebarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                isOpened: !state.isOpened
            }

        default:
            return state;
    }
}

import { START_ANIMATE_FOOTER, STOP_ANIMATE_FOOTER } from './actions';

const defaultState = {
    isAnimated: false
};

export const footerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case START_ANIMATE_FOOTER:
            return {
                ...state,
                isAnimated: true
            }

        case STOP_ANIMATE_FOOTER:
            return {
                ...state,
                isAnimated: false
            }

        default:
            return state;
    }
}

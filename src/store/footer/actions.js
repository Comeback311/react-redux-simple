export const START_ANIMATE_FOOTER = 'START_ANIMATE_FOOTER';
export const STOP_ANIMATE_FOOTER = 'STOP_ANIMATE_FOOTER';

export const startAnimateFooter = isAnimated => ({
    type: START_ANIMATE_FOOTER,
    payload: isAnimated
});

export const stopAnimateFooter = isAnimated => ({
    type: STOP_ANIMATE_FOOTER,
    payload: isAnimated
});


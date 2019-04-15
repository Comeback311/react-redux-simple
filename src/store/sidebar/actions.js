export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const toggleSidebar = isOpened => ({
    type: TOGGLE_SIDEBAR,
    payload: isOpened
});

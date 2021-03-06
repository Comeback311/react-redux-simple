import { combineReducers } from 'redux';

import { authReducer } from './auth/reducers';
import { usersReducer } from './users/reducers';
import { userReducer } from './user/reducers';
import { sidebarReducer } from './sidebar/reducers';
import { footerReducer } from './footer/reducers';
import { messagesReducer } from './messages/reducers';

export default combineReducers({
    auth: authReducer,
    users: usersReducer,
    user: userReducer,
    sidebar: sidebarReducer,
    footer: footerReducer,
    messages: messagesReducer
});


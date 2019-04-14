import { combineReducers } from 'redux';

import { authReducer } from './auth/reducers';
import { usersReducer } from './users/reducers';
import { userReducer } from './user/reducers';

export default combineReducers({
    auth: authReducer,
    users: usersReducer,
    user: userReducer
});


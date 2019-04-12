import { combineReducers } from 'redux';
import { authReducer } from './auth/reducers';
import { usersReducer } from './users/reducers';

export default combineReducers({
    auth: authReducer,
    users: usersReducer
});


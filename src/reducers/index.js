import { combineReducers } from 'redux';

import { usersContactsReducer } from './usersContactsReducer';
import { usersMessagesReducer } from './usersMessagesReducer';

export default combineReducers({
  usersContactsReducer,
  usersMessagesReducer,
});

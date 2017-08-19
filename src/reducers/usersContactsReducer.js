

export function usersContactsReducer(state = {
  contacts: [],
}, action) {
  const newState = {...state};
  switch (action.type) {
    case 'FETCH_USERS_CONTACTS_DONE': {
      newState.contacts = action.payload.data;
      break;
    }
    default: {
      console.log('Loading');
    }

  }
  return newState;

}


export function usersMessagesReducer(state = {
  modalData: {
    contact: {},
    modalStatus: null,
  },
  reply: null,
}, action) {
  const newState = {...state};
  switch (action.type) {
    case 'MESSAGE_SENT': {
      newState.reply = action.payload;
      break;
    }
    case 'SET_RECEPIENT': {
      newState.modalData.contact = action.payload;
      newState.modalData.modalStatus = 'open';
      break;
    }
    default: {
      console.log('Messages Loading');
    }

  }
  return newState;

}

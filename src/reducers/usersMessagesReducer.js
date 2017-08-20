
export function usersMessagesReducer(state = {
  modalData: {
    contact: {},
    modalStatus: null,
  },
  sent: false,
  error: false,
}, action) {
  const newState = {...state};
  switch (action.type) {
    case 'MESSAGE_SENT': {
      newState.sent = true;
      break;
    }
    case 'ERROR_SENDING_MESSAGE': {
      newState.error = true;
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

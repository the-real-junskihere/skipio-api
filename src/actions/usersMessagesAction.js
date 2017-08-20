import request from 'superagent';
import api from '../api-config.json';

export function sendMessage(recipients , message) {
  const data = {
     recipients ,
     messages:{
       body: message
     },
  };
  return (dispatch) => {
    request
    .get(`https://stage.skipio.com/api/v2/messages?token=${api.token}`)
    .send({data}) // sends a JSON post body
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) {
        dispatch({
          type: 'ERROR_SENDING_MESSAGE',
          payload: err,
        });
      } else {
        dispatch({
          type: 'MESSAGE_SENT',
          payload: res,
        });
      }

    });
  }
}

export function setRecipient(recepient) {
  return ({
    type: 'SET_RECEPIENT',
    payload: recepient,
  });
}

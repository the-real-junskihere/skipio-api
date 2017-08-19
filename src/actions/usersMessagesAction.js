import request from 'superagent';

export function sendMessage(recipients , message) {
  const data = {
     recipients ,
     messages:{
       body: message
     },
  };
  return (dispatch) => {
    request
    .post('https://stage.skipio.com/api/v2/messages?token=d3ef07cd3fb17859a874b7854c84f0ec')
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

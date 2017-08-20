import request from 'superagent';
import api from '../api-config.json';


export function fetchUsersContacts() {
  return (dispatch) => {
    request
    .get(`https://stage.skipio.com/api/v2/contacts?token=${api.token}&page=1&per=10`)
    .end((err, res) => {
      if (err) {
        dispatch({
          type: 'FETCH_USER_ERROR',
          payload: err,
        });
      }
      const data = JSON.parse(res.text);
      dispatch({
        type: 'FETCH_USERS_CONTACTS_DONE',
        payload: data,
      });
    })
  }
}

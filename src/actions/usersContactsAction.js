import request from 'superagent';

export function fetchUsersContacts() {
  return (dispatch) => {
    request
    .get('https://stage.skipio.com/api/v2/contacts?token=d3ef07cd3fb17859a874b7854c84f0ec&page=1&per=10')
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

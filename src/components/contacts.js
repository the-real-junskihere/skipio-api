import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsersContacts } from '../actions/usersContactsAction';

function SendMessageModal(props) {
  console.log(props);
  return(
    <div id="modal1" className="modal bottom-sheet">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  );
}




class Contacts extends Component {
  constructor(props) {
    super(props);

    this.sendMessageHandler = this.sendMessageHandler.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchUsersContacts());
  }

  sendMessageHandler(e) {
    e.preventDefault();
    console.log(e);
  }
  render() {
    const contactsTable = this.props.contacts.map(
      contact =>
      <tr key={contact.id}>
        <td>{contact.full_name}</td>
        <td>
          <a className="waves-effect waves-light btn modal-trigger" href="#modal1" onClick={this.sendMessageHandler} data={contact.id}   title='send new message'>
            <i className="material-icons">message</i>
          </a>
        </td>
      </tr>
    );
    return(
      <div>
        <SendMessageModal></SendMessageModal>
        <h4>Contacts Lists</h4>
        <table className="striped">
          <thead>
            <tr>
              <td>Full Name</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {contactsTable}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect((store)=> {
  return {
    contacts: store.usersContactsReducer.contacts,
  };
})(Contacts);

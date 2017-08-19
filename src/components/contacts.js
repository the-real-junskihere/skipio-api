import React, { Component } from 'react';
import { connect } from 'react-redux';


import { fetchUsersContacts } from '../actions/usersContactsAction';
import { setRecipient } from '../actions/usersMessagesAction';
import Messages from './messages';


class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalStatus: 'close',
      contact: {},
    };
    this.sendMessageHandler = this.sendMessageHandler.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchUsersContacts());
  }

  sendMessageHandler(contact) {
    this.setState({
      modalStatus: 'open',
    });
    this.props.dispatch(setRecipient(contact));
  }

  render() {
    const contactsTable = this.props.contacts.map(
      contact =>
      <tr key={contact.id}>
        <td>{contact.full_name}</td>
        <td>
          <a className="waves-effect waves-light btn modal-trigger" href="#modal1" onClick={() => this.sendMessageHandler(contact)} title='send new message' >
            <i className="material-icons">message</i>
          </a>
        </td>
      </tr>
    );
    return(
      <div>
        <Messages modalData={this.state}></Messages>
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

import React, { Component } from 'react';
import Contacts from './contacts';

class CreateMessage extends Component {
  render() {
    return(
      <div>
        <Contacts></Contacts>
        <textarea></textarea>
      </div>
    )
  }
}

class Messages extends Component {
  render() {
    return(
      <div>
        <h1>Messages</h1>

        <CreateMessage></CreateMessage>
      </div>
    )
  }
}

export default Messages;

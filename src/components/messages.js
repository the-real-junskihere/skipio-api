import React, { Component } from 'react';
import { connect } from 'react-redux';

 import { sendMessage } from '../actions/usersMessagesAction';


class Messages extends Component {
  constructor(props) {
    super(props);
    this.state ={ message: "" };
    this.sendMessage = this.sendMessage.bind(this);
    this.handleTextareaOnChange = this.handleTextareaOnChange.bind(this);
  }

  sendMessage(contact){
    const recipients = [`contact-${contact.id}`];
    const message = this.state.message;
    this.props.dispatch(sendMessage(recipients, message));
  }

  handleTextareaOnChange(e) {
    this.setState({ message: e.target.value});
  }

  render(props) {

    const contact = { ...this.props.modalData.contact };
    const status = this.props.modalData.modalStatus;
    return(
      <div id="modal1" className={"modal bottom-sheet " + status} >
        <div className="modal-content">
          <h4>Send Message</h4>
          <div>to: {contact.full_name}</div>
          <div><textarea value={this.state.message} onChange={this.handleTextareaOnChange} /></div>
        </div>
        <div className="modal-footer">
          <a href="#!"  className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
          <a href="#!" onClick={()=>this.sendMessage(contact)} className="waves-effect waves-green btn-flat">Send</a>
        </div>
      </div>
    );
  }
}

export default connect((store)=> {
  return {
    modalData: store.usersMessagesReducer.modalData,
    reply: store.usersMessagesReducer.reply,
  };
})(Messages);

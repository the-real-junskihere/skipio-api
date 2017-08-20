import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sendMessage } from '../actions/usersMessagesAction';
import { notify } from 'react-notify-toast';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state ={ message: "" };
    this.sendMessage = this.sendMessage.bind(this);
    this.cancelMessage = this.cancelMessage.bind(this);
    this.handleTextareaOnChange = this.handleTextareaOnChange.bind(this);
  }

  componentDidUpdate() {
    if(this.props.sent && this.state.message !== '') {
        notify.show('Message Sent', 'success');
        this.refs.close.click();
        this.props.dispatch({type: 'RESET'});
    } else if (this.props.error) {
      this.props.dispatch({type: 'RESET'});
      notify.show('Message sending failed', 'error');
    }
  }

  sendMessage(contact){
    const recipients = [`contact-${contact.id}`];
    const message = this.state.message;
    this.props.dispatch(sendMessage(recipients, message));
  }
  cancelMessage(){
    this.setState({ message: ''});
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
          <div className="input-field"><textarea id="tmsg" className="materialize-textarea" value={this.state.message} onChange={this.handleTextareaOnChange} ></textarea><label htmlFor="tmsg">Message</label></div>
        </div>
        <div className="modal-footer">
          <a href="#!" ref="close" onClick={()=>this.cancelMessage()} className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
          <a href="#!" onClick={()=>this.sendMessage(contact)} className="waves-effect waves-green btn-flat">Send</a>
        </div>
      </div>
    );
  }
}

export default connect((store)=> {
  return {
    modalData: store.usersMessagesReducer.modalData,
    sent: store.usersMessagesReducer.sent,
    error: store.usersMessagesReducer.error,
  };
})(Messages);

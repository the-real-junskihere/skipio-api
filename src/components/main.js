import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Contacts from './contacts';
import Messages from './messages';
import Notification from 'react-notify-toast';
class Main extends Component {
  render() {
    return(
      <div className="container">
      <Notification options={{zIndex: 5000}}></Notification>
        <div className="row">
          <div className="cols s12 routes-links">
          </div>
        </div>
        <div className="row">
          <div className="cols s12 routes-to">
            <Route exact path="/" component={Contacts} />
            <Route path="/contacts" component={Contacts} />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Contacts from './contacts';
import Messages from './messages';

class Main extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="cols s12 routes-links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="contacts">Contacts</Link></li>
              <li><Link to="messages">Messages</Link></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="cols s12 routes-to">
            <Route exact path="/"  />
            <Route path="/contacts" component={Contacts} />
            <Route path="/messages" component={Messages} />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/main.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(<Provider store={store}><BrowserRouter><Main /></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();

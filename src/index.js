import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './containers/App';
import Navbar from "./containers/Navbar"
import ContentList from "./containers/ContentList"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ContentList />, document.getElementById('root'));
registerServiceWorker();

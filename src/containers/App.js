import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'//导入的方式跟之前有点变化

import logo from '../img/logo.svg';
import './../css/App.css';

import Navbar from "./Navbar"
import Main from "./Main"
import UserInfo from "./UserInfo"

class App extends React.Component{
    render(){
        return(
            <Router>
                <div id="root">
                    <Route path="/" component={Navbar} />
                </div>
            </Router>
        )
    }
}


export default App;

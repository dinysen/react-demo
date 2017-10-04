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
                <div>
                    <Route exact path="/" component={Navbar} >
                        <Route path="/main" component={Main}/>
                        <Route path="/right" component={UserInfo}/>
                    </Route>
                </div>
            </Router>
        )
    }
}


export default App;

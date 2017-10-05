import React, { Component } from 'react';
import '../css/Navbar.css';
import {BrowserRouter as Router,Route,NavLink,Redirect} from 'react-router-dom'//导入的方式跟之前有点变化

import Main from "./Main"
import Timeline from "./Timeline"

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hoverWidth : 0,
            hoverLeft : 0,
            hoverVisible : true
        };
    }

    // _handleMouseOver=(event)=>{
    //     //event 获取的是鼠标的属性
    //     //event.currentTarget获取的是绑定事件的元素
    //     console.log("offsetHeight:"+event.currentTarget.offsetHeight);
    //     console.log("offsetWidth:"+event.currentTarget.offsetWidth);
    //     console.log("left:"+event.currentTarget.offsetLeft);
    //     this.setState({
    //        hoverWidth : event.currentTarget.offsetWidth,
    //        hoverLeft : event.currentTarget.offsetLeft,
    //        hoverVisible : true
    //     });
    // }
    //
    // _handleMouseOut=(event)=>{
    //     this.setState({
    //         hoverVisible : false
    //     })
    // }

    render() {
        const {state} = this;
        console.log(this.props);
        return (
            <div>
                <ul className="navbar-container">
                    <li className="hover-item" style={{display : state.hoverVisible ? "block" : "none" ,width:state.hoverWidth,left:this.state.hoverLeft}} ></li>
                    <li >
                        <NavLink  to="/main">首页</NavLink>
                    </li>
                    <li >
                        <NavLink to="/timeline">时光轴</NavLink>
                    </li>
                    <li className="right-item" >
                        <NavLink to="/manage">管理</NavLink>
                    </li>
                </ul>
                <div className="main-content">
                    <Route exact path="/" render={()=>{
                        return <Redirect to="/main" />
                    }} />
                    <Route path="/main" component={Main} />
                    <Route path="/timeline" component={Timeline} />
                    <Route path="/manage" component={Timeline} />
                </div>
            </div>
        );
    }
}

export default Navbar;

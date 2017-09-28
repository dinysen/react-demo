import React, { Component } from 'react';
import '../css/Navbar.css';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hoverWidth : 0,
            hoverLeft : 0,
            hoverVisible : true
        };
    }

    _handleMouseOver=(event)=>{
        //event 获取的是鼠标的属性
        //event.currentTarget获取的是绑定事件的元素
        console.log("offsetHeight:"+event.currentTarget.offsetHeight);
        console.log("offsetWidth:"+event.currentTarget.offsetWidth);
        console.log("left:"+event.currentTarget.offsetLeft);
        this.setState({
           hoverWidth : event.currentTarget.offsetWidth,
           hoverLeft : event.currentTarget.offsetLeft,
           hoverVisible : true
        });
    }

    _handleMouseOut=(event)=>{
        this.setState({
            hoverVisible : false
        })
    }

    render() {
        const {state} = this;
        return (
            <ul className="navbar-container">
                <li class="hover-item" style={{display : state.hoverVisible ? "block" : "none" ,width:state.hoverWidth,left:this.state.hoverLeft}} ></li>
                <li onMouseOver={this._handleMouseOver} onMouseLeave={this._handleMouseOut} className="active" >
                    <a href="javascript:void(0)">首页</a>
                </li>
                <li onMouseOver={this._handleMouseOver} onMouseLeave={this._handleMouseOut} >
                    <a href="javascript:void(0)">时光轴</a>
                </li>
                <li onMouseOver={this._handleMouseOver} onMouseLeave={this._handleMouseOut} className="right-item" >
                    <a href="javascript:void(0)">管理</a>
                </li>
            </ul>
        );
    }
}

export default Navbar;

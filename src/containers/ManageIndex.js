import React, { Component } from 'react';
import '../css/ManageIndex.css';
import '../css/Animation.css'
import '../fonts/iconfont.css'
import {Route,NavLink,Redirect} from "react-router-dom"

import Main from "./Main"
import Timeline from "./Timeline"
import ArticleList from "./ArticleList"

class ManageIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        const {state} = this;
        return (
            <div className="manageindex-container">
                <div className="side">
                    <ul>
                        <li><NavLink to="/manage/articlelist">文章管理</NavLink></li>
                        <li><NavLink to="/manage/timeline">时间轴管理</NavLink></li>
                    </ul>
                </div>
                <div className="body">
                    <Route exact path="/manage" render={()=>{
                            return <Redirect to="/manage/article" />
                        }}
                    />
                    <Route path="/manage/articlelist" component={ArticleList} />
                    <Route path="/manage/timeline" component={Timeline} />
                </div>
            </div>
        );
    }
}

export default ManageIndex;

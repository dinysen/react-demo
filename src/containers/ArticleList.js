import React, { Component } from 'react';
import '../css/ArticleList.css';
import '../css/Animation.css'
import '../fonts/iconfont.css'
import {Route,NavLink} from "react-router-dom"
import ArticleEdit from "./ArticleEdit"

class ArticleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articlelist : [{
                title : "你好明天",
                describe : "你好明天你好明天你好明天你好明天"
            },{
                title : "不积跬步无以至千里",
                describe : "不积跬步无以至千里不积跬步无以至千里不积跬步无以至千里"
            },{
                title : "你好明天",
                describe : "你好明天你好明天你好明天你好明天"
            },{
                title : "你好明天",
                describe : "你好明天你好明天你好明天你好明天"
            },{
                title : "你好明天",
                describe : "你好明天你好明天你好明天你好明天"
            },{
                title : "你好明天",
                describe : "你好明天你好明天你好明天你好明天"
            },{
                title : "你好明天",
                describe : "你好明天你好明天你好明天你好明天"
            },{
                title : "你好明天",
                describe : "你好明天你好明天你好明天你好明天"
            },{
                title : "你好明天",
                describe : "你好明天你好明天你好明天你好明天"
            }]
        };
    }

    render() {
        const {state} = this;
        return (
            <div className="articlelist-container">
                <div className="articlelist-side">
                    <div className="add">
                        <i className="iconfont icon-tianjia"></i>
                        <span>新建文章</span>
                    </div>
                    <ul>
                        {
                            this.state.articlelist.map((obj,index,arr)=>{
                                return (
                                    <li>
                                        <i className="iconfont icon-wenjian" ></i>
                                        <NavLink to={`/manage/articlelist/articleedit/${index}`}  >
                                            {obj.title}
                                            <span>{obj.describe}</span>
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="article-content-container">
                    <Route path="/manage/articlelist/articleedit/:id" component={ArticleEdit} />
                </div>
            </div>
        );
    }
}

export default ArticleList;

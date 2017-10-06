import React, { Component } from 'react';
import '../css/ArticleList.css';
import '../css/Animation.css'
import '../fonts/iconfont.css'

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
                                        <a className={index == 0 ? "active" : ""} href="javascript:void(0)" >
                                            {obj.title}
                                            <span>{obj.describe}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ArticleList;

import React, { Component } from 'react';
import '../css/UserInfo.css';
import '../fonts/iconfont.css'

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            linklist : [{
                url : "http://www.lyblogs.cn/",
                name : "不落阁 - 一个.NET程序员的个人博客"
            },{
                url : "http://blog.jczxw.cn/",
                name : "小李blog | 专注web前端开发技术"
            },{
                url : "http://www.jianshu.com/",
                name : "简书 - 创作你的创作"
            },{
                url : "http://www.ruanyifeng.com/home.html",
                name : "阮一峰的博客"
            },{
                url : "http://naotu.baidu.com/home",
                name : "百度脑图 - 便捷的思维工具"
            },{
                url : "http://ai.baidu.com/",
                name : "百度AI开放平台"
            }]
        };
    }

    render() {
        const {state} = this;
        return (
            <div className="root">
                
            </div>
        );
    }
}

export default Navbar;

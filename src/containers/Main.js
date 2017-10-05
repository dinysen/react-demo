import React, { Component } from 'react';
import '../css/Main.css';
import '../css/Animation.css'
import '../fonts/iconfont.css'

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list : [{
                title : "体验异步的终极解决方案-ES7的Async/Await",
                describe : "async 表示这是一个async函数，await只能用在这个函数里面。await 表示在这里等待promise返回结果了，再继续执行。await 后面跟着的应该是一个promise对象（当然，其他返回值也没关系，只是会立即执行，不过那样就没有意义了…）"
            },{
                title : "Cordova 打包 Android release app 过程详解",
                describe : "Android app 的打包分为 debug 和 release 两种，后者是用来发布到应用商店的版本。这篇文章会告诉你 Cordova 如何打包 Android release 版本，也会让你了解 Android app 的打包流程。"
            },{
                title : "flex.css",
                describe : "在移动端开发中，并不是所有的浏览器，webview，微信等各种版本都支持标准的flex， 但是基本上都会支持-webkit-box，所以flex.css的主要作用是保证每一个属性都能支持标准flex或旧版本的-webkit-box。 由于flex.css采用了autoprefixer编译，所以能够保证在浏览器不支持标准flex布局的情况下， 回滚到旧版本的-webkit-box，保证移动设备中能呈现出一样的布局效果。 于是，一款移动端快速布局的神器诞生了..."
            }],
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

    _handleMouseOver=(event)=>{
        //event 获取的是鼠标的属性
        //event.currentTarget获取的是绑定事件的元素
        // console.log("offsetHeight:"+event.currentTarget.offsetHeight);
        // console.log("offsetWidth:"+event.currentTarget.offsetWidth);
        // console.log("left:"+event.currentTarget.offsetLeft);
        // this.setState({
        //    hoverWidth : event.currentTarget.offsetWidth,
        //    hoverLeft : event.currentTarget.offsetLeft,
        //    hoverVisible : true
        // });
    }

    _handleMouseOut=(event)=>{
        // this.setState({
        //     hoverVisible : false
        // })
    }

    _handleAddClick=()=>{
        let newItem = [{
            title : "table-layout的fixed属性",
            describe : "当你准备全面进军web标准时，有时候你是不是被表格的弄得焦头烂额呢？比如，原来使用“非法”的nobr现在要用什么来代替呢？今天，就让我来一个终极解决方案。"
        }];
        this.setState({
            list : this.state.list.concat(newItem)
        })
    }

    _handleDelClick=()=>{
        this.state.list.splice(this.state.list.length-1,1);
        this.setState({
            list : this.state.list
        })
    }

    render() {
        const {state} = this;
        return (
            <div className="root">
                <div className="left">
                    <div className="btn-container">
                        <button onClick={this._handleAddClick} className="btn" >增加一个item</button>
                        <button onClick={this._handleDelClick} className="btn" >删除一个item</button>
                    </div>
                    {
                        this.state.list.map((obj,index,arr)=>{
                            return (
                                <div key={index} className="article-item fadeInLeft">
                                    <div className="img-container">
                                        <img src={require("../img/default_pic.jpg")} />
                                    </div>
                                    <div className="content-container">
                                        <div className="article-title" ><a href="#" >{obj.title}</a></div>
                                        <div className="article-content">
                                            <span>{obj.describe}</span>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="article-footer">
                                        <span><i className="iconfont icon-clocko"></i>&nbsp;&nbsp;2017-09-28</span>
                                        <span><i className="iconfont icon-user"></i>&nbsp;&nbsp;Robert</span>
                                        <span><i className="iconfont icon-tags"></i>&nbsp;&nbsp;<a href="#">React初级教程</a></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="right-container">
                    <div className="userinfo block fadeInRight">
                        <div className="user-portrait-container">
                            <img src={require("../img/portrait.jpg")} />
                        </div>
                        <p className="blog-username">Calm</p>
                        <p className="blog-introduce">一条不思进取的咸鱼~</p>
                        <p className="blog-location"><i className="iconfont icon-location"></i>魔都-上海</p>
                    </div>

                    <div className="link block fadeInBottom">
                        <div className="blog-module-title">快速导航</div>
                        <ul>
                            {
                                this.state.linklist.map((obj,index,arr)=>{
                                    return (
                                        <li><a href={obj.url} target="_blank" ><i className="iconfont icon-daohang"></i>{obj.name}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;

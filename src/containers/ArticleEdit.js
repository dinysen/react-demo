import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import '../css/ArticleEdit.css'
import '../css/Animation.css'
import '../fonts/iconfont.css'

class ArticleEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            editorContainerHeight : 0
        };
    }

    componentDidMount(){
        let editorContainerHeight  = this.refs.articleeditContainer.offsetHeight - 110;
        this.setState({
            editorContainerHeight : editorContainerHeight
        })
    }

    _onChange=(editorState)=>{
        this.setState({editorState});
    }

    _onBoldClick() {
        this._onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    render() {
        const {state} = this;
        return (
            <div className="articleedit-container" ref="articleeditContainer">
                <input type="text" placeholder="无标题" />
                <ul className="toolbar">
                    <li className="left"><a title="加粗" className="iconfont icon-icon-test" href="javascript:void(0)"></a></li>
                    <li className="left"><a title="斜体" className="iconfont icon-xieti" href="javascript:void(0)"></a></li>
                    <li className="left"><a title="链接" className="iconfont icon-link" href="javascript:void(0)"></a></li>
                    <li className="left"><a title="插入图片" className="iconfont icon-tupian" href="javascript:void(0)"></a></li>
                    <li className="right"><a href="javascript:void(0)"><i className="iconfont icon-fenxiang"></i>&nbsp;发布文章</a></li>
                </ul>
                <div className="editor-container" style={{height:this.state.editorContainerHeight}} >
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this._onChange} />
                    </div>
            </div>

        );
    }
}

export default ArticleEdit;

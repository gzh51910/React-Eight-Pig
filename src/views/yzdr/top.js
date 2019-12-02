import React, { Component } from 'react';
import '../../common/css/yzdr/top.scss'
import { withRouter } from 'react-router-dom';
class top extends Component {
    state = {
        list: [],
    }
    goto =() => { 
        let { history } = this.props;
             history.push('/home')
         console.log(this.props);     
    }
    render() {
        return (
            <div className="toptsdr">
               <img src="https://pic.8pig.com/img/h5/new/common/logo.png"/>
               <div onClick={this.goto.bind(this,)}>首页</div>
               <div>目的地</div>
               <div>咨询</div>
               <div>关于我们</div>
            </div>
        )
    }
}
 top = withRouter(top)
export default top;
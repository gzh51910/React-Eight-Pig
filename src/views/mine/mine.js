import React, { Component } from 'react';
import {Icon} from 'antd';
import '../../common/css/mine/me.scss'
import {connect} from 'react-redux'
import { NavLink} from 'react-router-dom';
import { Button } from 'antd';
import UserAction from '../../store/action/common'
const {logout} =UserAction;
// 映射属性（获取）
const mapStateToProps = (state)=>{
  let {user} = state.common;
  let phone=user.phone;
  return {
      user,
      phone
  }
}
// 映射方法（修改操作）
const mapDispatchToProps = (dispatch)=>{
    return {
      dispatch
    }
  }
@connect(mapStateToProps,mapDispatchToProps)
class Mine extends Component {
     lgout=()=>{
        let {dispatch} =this.props;
        dispatch(logout())
        localStorage.removeItem('user');
     }
    render() {
        let {user,phone} = this.props;
        return (
            <div className='minewrap'>
                <header className='top'>
                    <div className='pic'>
                        <img src='https://pic.8pig.com/avatar/default/no_login_avatar.jpg@112w_112h__1e_1c.webp' />
                    </div>
                    <div className='log'>
                        <div style={phone?{display:'none'}:{display:'block'}}>
                            <NavLink className="homelog" to="/login">点击登录</NavLink>
                        </div>
                        <div className='user' style={phone?{display:'block'}:{display:'none'}}>
                            {phone}
                        </div>
                    </div>
                </header>
                <nav className='menav'>
                     <li><Icon type="heart" /><span>我的收藏</span></li>
                     <li><Icon type="audit" /><span>我的订单</span></li>
                     <li><Icon type="money-collect" /><span>我的保单</span></li>
                </nav>
                <main>
                    <ul>
                        <li>我的优惠券<Icon type="right" /></li>
                        <li>邀请好友，立享优惠<Icon type="right" /></li>
                        <li>联系客服<Icon type="right" /></li>
                    </ul>
                    <ul>
                        <li>下载8只小猪APP<Icon type="right" /></li>
                        <li>成为达人，赚取百万佣金<Icon type="right" /></li>
                        <li>关于我们<Icon type="right" /></li>
                    </ul>
                </main>
                <Button block onClick={this.lgout} style={phone?{display:'block'}:{display:'none'}}>退出登录</Button>
            </div>
        )
    }
}



export default Mine;
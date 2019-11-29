import React, { Component } from 'react';
import {Icon} from 'antd';
import '../../common/css/mine/me.scss'
class Mine extends Component {

    render() {

        return (
            <div className='minewrap'>
                <header className='top'>
                    <div className='pic'>
                        <img src='https://pic.8pig.com/avatar/default/no_login_avatar.jpg@112w_112h__1e_1c.webp' />
                    </div>
                    <div className='log'>
                        <a>点击登录</a>
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
            </div>
        )
    }
}



export default Mine;
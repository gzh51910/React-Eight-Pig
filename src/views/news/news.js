import React, { Component } from 'react';
import '../../common/css/news/news.scss'

class news extends Component {


    render() {


        return (
            <div className="new1s">
                <dl>
                    <dt>
                        <img src='https://pic.8pig.com/h5/img/logo.png@96w_96h__1e_1c.webp' />
                    </dt>
                    <dd>
                        <div className='title'>
                            <h3>8只小猪客服</h3>
                            <span></span>
                        </div>
                        <p>您好，请问有什么出行需要</p>
                    </dd>
                </dl>
                <div className='login-btn'>
                    <a>登录即可查看历史消息</a>
                </div>
            </div>
        )
    }
}


export default news;
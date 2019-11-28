import React, { Component } from 'react';
import imgURL from '../../common/img/home/RectangleCopy.svg';
import '../../common/css/home/homeNav.scss'
class homeNav extends Component {

    render() {

        return (
            <div className="homeNav">
                <img className="navLog" src="https://pic.8pig.com/img/h5/new/common/logo_3x.png@.webp" />
                <a className="Search">
                    <img className="homeSearch" src={imgURL} />
                    <span>想去哪里?</span>
                </a>
                <div className="homelog">
                    登录/注册
                </div>
            </div>
        )
    }
}

export default homeNav;
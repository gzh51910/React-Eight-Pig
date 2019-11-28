import React, { Component } from 'react';
import '../../common/css/home/homefoot.scss'
class homefoot extends Component {

    render() {

        return (
            <div className="homefoot">
                <ul className="footlist">
                    <li>预订流程</li>
                    <li>旅行贴士</li>
                    <li>关于我们</li>
                </ul>
                <p className="license">
                    旅行社业务经营许可证：L-GD02482
                </p>
                <p className="copyRight">Copyright © 2015-2018 8Pig. All Rights Reserved.</p>
            </div>
        )
    }
}

export default homefoot;
import React, { Component } from 'react';
import '../../common/css/home/nav.scss'
import { my } from '../../api'
import Header from 'antd/lib/calendar/Header';
function Nav({ list }) {
    return (
        <div>
            <ul className="navhome">
                {
                    list.map(item => {
                        return <li key={item.text}>{item.text}<svg className="sj" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="triangle"><path d="M525.347 748.235l471.775-471.777H27.528z"></path></svg></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Nav;
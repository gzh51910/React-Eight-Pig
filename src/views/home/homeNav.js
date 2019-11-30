import React, { Component } from 'react';
import imgURL from '../../common/img/home/RectangleCopy.svg';
import { NavLink} from 'react-router-dom';
import '../../common/css/home/homeNav.scss'
import {connect} from 'react-redux'
// 映射属性（获取）
const mapStateToProps = (state)=>{
  let {user} = state.common;
  let phone=user.phone;
  return {
      user,
      phone
  }
}
@connect(mapStateToProps)
class homeNav extends Component {
    componentDidMount(){
        console.log('222',this.props);
    }
    render() {
        let {phone} = this.props;
        return (
            <div className="homeNav">
                <img className="navLog" src="https://pic.8pig.com/img/h5/new/common/logo_3x.png@.webp" />
                <a className="Search">
                    <img className="homeSearch" src={imgURL} />
                    <span>想去哪里?</span>
                </a>
                <div style={phone?{display:'none'}:{display:'block'}}>
                    <NavLink className="homelog" to="/login">登录/注册</NavLink>
                </div>
                <div style={phone?{display:'block'}:{display:'none'}}>
                    {phone}
                </div>
            </div>
        )
    }
}

export default homeNav;
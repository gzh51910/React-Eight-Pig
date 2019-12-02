import React,{Component} from 'react';
import { Form, Icon, Input, Button } from 'antd';
import '../../common/css/mine/login.scss';
import { NavLink,Route, Switch } from 'react-router-dom';
import { my } from '../../api';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import UserAction from '../../store/action/common'
const {login} =UserAction;
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
class Login extends Component{
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      let { phone, password } = values
      if (!err) {
        let {data} = await my.get("/login", {
          phone,
          password
      })
        if(data.status==1){
          let user=data.data[0];
          // console.log(user);
          let {dispatch} =this.props;
          dispatch(login(user))
          localStorage.setItem('user',JSON.stringify(user));
          this.props.history.push('/mine')
        }
    }
    });
  };
  constructor(props){
    super(props);
    this.register = this.register.bind(this);
    this.goBack=this.goBack.bind(this);
}
  register(){
    console.log(this.props);
    this.props.history.push('/reg')
  }
  goBack(){
    console.log(this.props);
    this.props.history.push('/home')
  }
  handleLogin(){ 

    this.props.login(this.props.state)
    // console.log("this.props.state",this.props.state);
}
  render() {

    const { getFieldDecorator } = this.props.form;
    return (
      
      <Form onSubmit={this.handleSubmit} className="login-form">
        
        {this.props.redirectTo&&this.props.redirectTo!=='/login'? <Redirect to={this.props.redirectTo} />:null}
        <div className="logheader">
        <Button type="link" className="goback" onClick={this.goBack}>
        <Icon type="left" />
        </Button><p className="login_header">登录8只小猪</p>
        </div>
        <br/>
        <Form.Item>
          <label>账号：</label>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入手机号！'},{pattern:/^1[3-9]\d{9}$/,message: '手机号格式错误！'}],
          })(
            
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
              placeholder="请输入手机号"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <label>密码：</label>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }],
          })(
            
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <a className="reg-form-a" href="">
            短信验证登录
          </a>
          <Button type="" htmlType="submit" className="login-form-button" ref='sub'>
            登录
          </Button>
          <Button type="" className="reg-form-button" onClick={this.register}>
            注册
          </Button>
        </Form.Item>
      </Form>
    );
  }
 
}(Form.create()(Login))


export default Form.create()(Login);

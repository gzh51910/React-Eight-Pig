import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox,Divider,label  } from 'antd';
import '../../common/css/mine/login.scss';
import { my } from '../../api';
import {Redirect} from 'react-router-dom'


class Login extends Component{
  

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      let { user, pwd } = values
      if (!err) {
        let {
            data
        } = await my.get("/login", {
            user,
            pwd
        });
        console.log(data);

        if (data.status == 1) {
            this.props.history.replace('/')
        } 


    }
    });
  };
  
  constructor(props){
    super(props);
    this.register = this.register.bind(this);
}
  register(){
    console.log(this.props);
    this.props.history.push('/reg')
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
        <Button type="link" className="goback" onClick={()=>this.goBack()}>
        <Icon type="left" />
        </Button><p className="login_header">登录8只小猪</p>
        </div>
        <br/>
        <Form.Item>
          <label>账号：</label>
          {getFieldDecorator('user', {
            // rules: [{ required: true, message: 'Please input your phone!' }],
          })(
            
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入手机号"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <label>密码：</label>
          {getFieldDecorator('pwd', {
            // rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="pwd"
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <a className="reg-form-a" href="">
            短信验证登录
          </a>
          <Button type="" htmlType="submit" className="login-form-button">
            登录
          </Button>
          <Button type="danger" htmlType="submit" className="reg-form-button" onClick={this.register}>
            注册
          </Button>
        </Form.Item>
      </Form>
    );
  }
 
}(Form.create()(Login))


export default Form.create()(Login);

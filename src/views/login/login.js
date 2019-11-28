import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox,Divider  } from 'antd';
import '../../common/css/mine/login.scss';

class Login extends Component{
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {

    const { getFieldDecorator } = this.props.form;
    return (
    
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div className="login_header">登录8只小猪</div>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {/* {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)} */}
          <a className="reg-form-a" href="">
            短信验证登录
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          <Button type="primary" htmlType="submit" className="reg-form-button">
            注册
          </Button>
        </Form.Item>
      </Form>
    );
  }
 
}(Form.create()(Login))


export default Form.create()(Login);

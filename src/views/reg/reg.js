import React, { Component } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  PageHeader
} from 'antd';
import '../../common/css/mine/reg.scss';
import { my } from '../../api'

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


class Reg extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      let { phone, password, captcha } = values
      if (!err) {
        let { data } = await my.post("/reg", {
          phone,
          password
        })
        console.log(data);

        if (data.status == 1) {
          this.props.history.push('/login')
        }
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <PageHeader
          onBack={() => history.back()}
          title="注册账号"
        />

        <br />
        <Form.Item >账号
          {getFieldDecorator('phone', {
          rules: [{ required: true, message: '请输入手机号！' }, { pattern: /^1[3-9]\d{9}$/, message: '手机号格式错误！' }],
        })(<Input addonBefore={prefixSelector} style={{ width: '70%' }} placeholder="请输入手机号" />)}
        </Form.Item>
        <Form.Item >
          <Row gutter={8}>
            <Col span={14}>验证码
              {getFieldDecorator('captcha', {
              rules: [{ required: true, }],

            })(<Input placeholder="请输入验证码" />)}
            </Col>
            <Col span={9}>
              <Button type="danger">发送验证码</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item hasFeedback>密码
          {getFieldDecorator('password', {
          rules: [
            { required: true, message: '请输入密码！' }
          ],
        })(<Input.Password placeholder="请设置6-16位登录密码" />)}
        </Form.Item>
        <span>密码长度6～16位，由英文字母a～z (区分大小写)、数字0～9、至少两种特殊字符组成</span>

        <Form.Item {...tailFormItemLayout}>
          <Button className='wancheng' type="default" htmlType="submit" style={{ width: '100%', background: '#ccc' }}>
            完成
          </Button>
        </Form.Item>
        <p className='regp'>继续操作即代表您同意<a>《用户协议》</a></p>
      </Form>
    );
  }
} (Form.create()(Reg))


export default Form.create()(Reg);


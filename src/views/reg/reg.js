import React, { Component } from 'react';
import { PageHeader,label,Input,Icon, Button} from 'antd';
import '../../common/css/mine/reg.scss';
class Reg extends Component {
    constructor(props){
        super(props);
        this.state={
            phone:'',
            captcha:'',
            pwd:'',
            type:'user'
        }
    }
    render() {

        return (
            
               <div>
                    <PageHeader
                        onBack={() => null}
                        title="注册账号"
                    />
                    <form>
                        <div className="in phone">
                            <label className="dq">+86<Icon type="caret-down" /></label><Input onChange={value => this.handleChange('phone', value)} placeholder="请输入手机号" />
                        </div>
                        <div className="in captcha">
                            <label>验证码</label><Input onChange={value => this.handleChange('captcha', value)} placeholder="请输入验证码" /><Button type="danger" className="fs">发送验证码</Button>
                        </div>
                        <div className="in password">
                            <label>密码</label><Input onChange={value => this.handleChange('password', value)} placeholder="请设置6-16位登录密码" />
                        </div>
                        
                        <span className="mima">密码长度6～16位，由英文字母a～z (区分大小写)、数字0～9、至少两种特殊字符组成</span>
                        
                        <Button onClick={this.handleGoLogin.bind(this)} type="default" className="wc">完成</Button>
                        
                        <span>继续操作即代表您同意<a>《用户协议》</a></span>
                    </form>
               </div>
        )
    }
    handleGoLogin(){
        this.props.hisory.push('/login')
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
}

export default Reg;
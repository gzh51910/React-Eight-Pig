import React, { Component } from 'react';
import { Icon } from 'antd';
import '../../common/css/yzdr/yzdr.scss'
import Top from './top'
import Foot from './foot'
import { my } from '../../api'
class tedr extends Component {
    state = {
        list: [

        ],

    }
    async componentDidMount() {
        
        let { id } = this.props.match.params;
        console.log(id);
        let {
            data: { data }
        } = await my.get("/yz", { _id: id });
        console.log(data[0]);

        this.setState({
            list: data[0]
        })

    }


    render() {

        return (
            <div className="yzdr">
                <div className="box">
                    <Top></Top>
                    <div className="main">
                        <div className="info">
                            <img src={this.state.list.bigsrc} />
                            <div className="name">
                                {this.state.list.name}
                            </div>
                        </div>
                        <ul className="verification">
                            <li>
                                <Icon type="schedule" className="icon" />
                                <div>
                                    <p>身份</p><p className="gray">已验证</p>
                                </div>
                            </li>
                            <li>
                                <Icon type="phone" className="icon" />
                                <div> <p>手机</p> <p className="gray">已验证</p>
                                </div>
                            </li>
                        </ul>
                        <div className="count">
                            <div>
                                <em>{this.state.list.num1}</em>
                                <span>{this.state.list.num2}</span>
                            </div>
                            <div>
                                <em>{this.state.list.num3}</em>
                                <span>{this.state.list.num4}</span>
                            </div>
                            <div>
                                <em>{this.state.list.num5}</em>
                                <span>{this.state.list.num6}</span>
                            </div>
                        </div>
                        <div className="conten">
                            {this.state.list.text}
                        </div>
                    </div> 
                <Foot></Foot>
                </div>
            </div>
        )
    }
}

export default tedr;
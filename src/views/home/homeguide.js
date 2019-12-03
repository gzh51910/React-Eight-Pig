import React, { Component } from 'react';
import '../../common/css/home/homeguide.scss'
import { Tabs } from 'antd';
import { my } from '../../api'
import Lazyload from 'r-img-lazyload';
import imgURL from '../../common/img/home/loading.jpg';
class homeguide extends Component {
    state = {
        list: [
            {
                isActive: 'isActive',
                content: "Serean"
            },
            {
                isActive: '',
                content: "Kamyee"
            },
            {
                isActive: '',
                content: "邂逅巴黎"
            },
            {
                isActive: '',
                content: "Bella"
            },
            {
                isActive: '',
                content: "严拾捌"
            },
            {
                isActive: '',
                content: "晓晨"
            }, {
                isActive: '',
                content: "Lee李小鹿"
            }
        ],
        menu: [

        ],
        menu1: [

        ]
    }
    async componentDidMount() {
        let {
            data: { data }
        } = await my.get("/HQ", {
            team: "play"
        });
        this.setState({
            menu: data,
            menu1: data[0].children
        })
        console.log(this.state.menu1);

    }
    changebox = async (index) => {
        let list = this.state.list.map((item, idx) => {
            if (index !== idx) {
                item.isActive = ''

            } else {
                item.isActive = 'isActive'
            }
            return item
        })
        this.setState({
            list,
            menu1: this.state.menu[index].children
        })

    }
    render() {
        const config = {
            options: {

                loading: imgURL
            },
        };
        return (
            <div className="homeguide">
                <h1 className="title">优质达人带你玩</h1>
                <div className="navhome">
                    {
                        this.state.list.map((item, index) => {
                            return <li onClick={this.changebox.bind(this, index)} key={item.content} >
                                <span className={item.isActive}>{item.content}</span>
                            </li>
                        })
                    }
                </div>
                <div className="g-list">
                    {
                        this.state.menu1.map((item, index) => {
                            return <dd key={item.name} >
                                <Lazyload src={item.src}   {...config}/>
                                <p>{item.name}</p>
                                <span className="g-price">{item.price}</span>
                                <span className="g-rate">{item.rate}<span className="g-warn" >{item.warn}</span></span>
                                <span className="g-text" >{item.tag} </span>
                            </dd>
                        })
                    }
                </div>
            </div >
        )
    }
}

export default homeguide;
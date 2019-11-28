import React, { Component } from 'react';
import '../../common/css/home/homeMore.scss'
import { my } from '../../api'
class homeMore extends Component {
    state = {
        list: [

        ]
    }
    async componentDidMount() {
        let {
            data: { data }
        } = await my.get("/HQ", {
            team: "recommend"
        });
        console.log(data);

        this.setState({
            list: data
        })

    }
    render() {

        return (
            <div className="homeMore">
                <h1 className="title">推荐专题</h1>
                <div className="more">
                    {this.state.list.map(item => {
                        return <img key={item.src} src={item.src} />
                    })}
                </div>
            </div>
        )
    }
}

export default homeMore;
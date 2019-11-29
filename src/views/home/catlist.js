import React, { Component } from 'react';
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import '../../common/css/home/homecatlist.scss';
import { my } from '../../api'
class catList extends Component {
    state = {
        list: [

        ]
    }
    async componentDidMount() {
        let {
            data: { data }
        } = await my.get("/HQ", {
            team: "icon"
        });

        this.setState({
            list: data
        })

    }
    goto = (text) => {
        if (text == '特色达人') {
            let { history } = this.props;
            // console.log(this.props);
            history.push('/tsdr')
        }else if(text == '机场接送'){
            let { history } = this.props;
            // console.log(this.props);
            history.push('/air')
        }else if(text == '畅游包车'){
            let { history } = this.props;
            // console.log(this.props);
            history.push('/car')
        }

    }
    render() {

        return (
            <div className="catlist">

                {this.state.list.map(item => {
                    return <figure className="list" key={item.text} onClick={this.goto.bind(this, item.text)}>
                        <img src={item.src} />
                        <figcaption>
                            {item.text}
                        </figcaption>
                    </figure>
                })}
                 
            </div>
        )
    }
}
catList = withRouter(catList);
export default catList;
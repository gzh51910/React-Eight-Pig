import React, { Component } from 'react';
import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import './common/css/app/app.scss'
import imgURL from './common/img/shouye2.svg';
import imgURL4 from './common/img/shouye1.svg';
import imgURL1 from './common/img/faxian.svg';
import imgURL5 from './common/img/faxian1.svg';
import imgURL2 from './common/img/xiaoxi.svg';
import imgURL6 from './common/img/xiaoxi1.svg';
import imgURL3 from './common/img/wode.svg';
import imgURL7 from './common/img/wode1.svg';



import Home from '~/home/home';
import Discover from '~/discover/discover';
import news from '~/news/news';
import Reg from '~/reg/reg';
import Login from '~/login/login';
import Mine from '~/mine/mine';
// import Goods from '~/Goods';
class App extends Component {
    state = {
        currentPath: '/home',
        isActive: false,
        menu: [
            {
                isActive: true,
                name: 'home',
                path: '/home',
                src: imgURL,
                src1: imgURL4,
                text: '首页',

            }, {
                isActive: false,
                name: 'discover',
                path: '/discover',
                src: imgURL1,
                src1: imgURL5,
                text: '发现'
            },
            {
                isActive: false,
                name: '消息',
                path: '/news',
                src: imgURL2,
                src1: imgURL6,
                text: '购物车'
            }, {
                isActive: false,
                name: 'mine',
                path: '/mine',
                src: imgURL3,
                src1: imgURL7,
                text: '我的'
            },
        ]
    }

    goto = (path, idx) => {

        let { history } = this.props;
        history.push(path)
        let list = this.state.menu.map((item, index) => {
            if (index === idx) {
                item.isActive = true
            }
            return item
        })
        this.setState({
            menu: list
        })
    }
    componentDidUpdate(prevProps, nextProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            var list = this.state.menu.map((item) => {
                if (this.props.location.pathname !== item.path) {
                    item.isActive = false
                }
                return item
            })
            this.setState({
                menu: list
            })
        }

    }
    render() {

        return (
            <div>
                <div className="nav">
                    {
                        this.state.menu.map((item, index) => {
                            return <figure key={item.path} onClick={this.goto.bind(this, item.path, index)}>
                                <img className="icon" src={item.isActive ? item.src1 : item.src} />
                                <figcaption style={item.isActive ? { color: '#ff5e69' } : {}}>
                                    {item.text}
                                </figcaption>
                            </figure>
                        })
                    }


                </div>

                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/discover" component={Discover} />
                    <Route path="/news" component={news} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/login" component={Login} />
                    <Route path="/mine" component={Mine} />
                    {/* <Route path="/goods/:id" component={Goods} /> */}
                    <Route path="/notfound" render={() => <div>404页面</div>} />
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="/notfound" />
                </Switch>

            </div>
        )
    }
}

App = withRouter(App);
export default App;
import React, { Component } from 'react';
import Nav from '../../components/common/navhome'
import '../../common/css/home/tedr.scss';
import {my} from '../../api'
import Main from '../tsdr/main'
class Tsdr extends Component {
    state = {
        list: [
            {
                text: '目的地'
            },
            {
                text: '当地向导'
            },
            {
                text: '综合排序'
            },
            {
                text: '筛选'
            }
        ],
        tslist:[]
    }
    del(item){
        console.log('1111',item);
    }
    async componentDidMount(){
        let {
            data: { data }
        } = await my.get("/HQ", {
            team: "feature"
        });
        this.setState({tslist:data})
        console.log(data)
    }
    render() {
        return (
            <div className="homeTsdr">
                <div className="box">
                <Nav list={this.state.list}></Nav>
                <Main list={this.state.tslist} del={this.del}></Main>
                </div>
            </div>
        )
    }
}

export default Tsdr;
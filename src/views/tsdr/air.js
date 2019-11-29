import React, { Component } from 'react';
import Nav from '../../components/common/navhome'
import '../../common/css/home/tedr.scss'
import {my} from '../../api';
import Main from '../tsdr/airmain';
class Air extends Component {
    state = {
        list: [
            {
                text: '目的地'
            },
            {
                text: '机场接送'
            },
            {
                text: '综合排序'
            },
            {
                text: '筛选'
            }
        ],
        airlist:[]
    }
    del(item){
        console.log('1111')
    }
    async componentDidMount(){
        let {
            data: { data }
        } = await my.get("/HQ", {
            team: "airport"
        });
        this.setState({airlist:data})
        console.log(data)
    }
    render() {

        return (
            <div className="homeAir">
                <Nav list={this.state.list}></Nav>
                <Main list={this.state.airlist} del={this.del}></Main>
            </div>
        )
    }
}

export default Air;
import React, { Component } from 'react';
import Nav from '../../components/common/navhome'
import '../../common/css/home/tedr.scss';
import {my} from '../../api'
import Main from '../tsdr/airmain'
class Car extends Component {
    state = {
        list: [
            {
                text: '目的地'
            },
            {
                text: '一日游'
            },
            {
                text: '综合排序'
            },
            {
                text: '筛选'
            }
        ],
        carlist:[]
    }
    async componentDidMount(){
        let {
            data: { data }
        } = await my.get("/HQ", {
            team: "bagcar"
        });
        this.setState({carlist:data})
        console.log(data)
    }
    render() {
        return (
            <div className="homeCar">

                <Nav list={this.state.list}></Nav>
                <Main list={this.state.carlist}></Main>

            </div>
        )
    }
}

export default Car;
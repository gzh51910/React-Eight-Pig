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
        tslist:[],
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
         this.li=data
         let datas=JSON.stringify(data)
         this.lis=JSON.parse(datas)
        this.setState({tslist:data}) 
    }
    render() {
        return (
            <div className="homeTsdr">  
                <div className="box">
                <Nav listt={this.li} listtt={this.lis}  list={this.state.list}  setform={(form) => { this.form = form;this.setState({tslist:this.form }) }} setform1={(form1) => { this.form1 = form1;this.setState({tslist:this.form1 }) }}></Nav>
                <Main list={this.state.tslist} del={this.del}></Main>
                </div>
            </div>
        )
    }
}

export default Tsdr;
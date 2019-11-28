import React, { Component } from 'react';
import Nav from '../../components/common/navhome'
import '../../common/css/home/tedr.scss'
import Main from '../tsdr/main'
class tedr extends Component {
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
        ]
    }
    render() {

        return (
            <div className="homeTsdr">

                <Nav list={this.state.list}></Nav>
                <Main></Main>

            </div>
        )
    }
}

export default tedr;
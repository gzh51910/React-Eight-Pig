import React, { Component } from 'react';
// import Nav from '../../components/common/navhome'
import '../../common/css/home/tedr.scss'
import Main from '../yzdr/main'
class tedr extends Component {
    state = {
        list: [
          
        ]
    }
    render() {

        return (
            <div className="yzdr">

                {/* <Nav list={this.state.list}></Nav> */}
                <Main></Main>

            </div>
        )
    }
}

export default tedr;
import React, { Component } from 'react';
import HomeNav from './homeNav'
import HomeSlider from './homeSlider'
import Homeactlist from './catlist'
import Homeyzdr from './yzdr'
import Homeguide from './homeguide'
import Homemore from './homeMore'
import Homefoot from './Homefoot'

import '../../common/css/home/home.scss'
class Home extends Component {

    render() {

        return (
            <div>
                <div className="home">
                    <HomeNav className="homeFooter"></HomeNav>
                    <main className="homeMain">
                        <HomeSlider></HomeSlider>
                        <Homeactlist></Homeactlist>
                        <Homeyzdr></Homeyzdr>
                        <Homeguide></Homeguide>
                        <Homemore />
                        <Homefoot></Homefoot>

                    </main>

                </div>

            </div>
        )
    }
}

export default Home;
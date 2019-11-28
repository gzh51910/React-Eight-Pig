import React, { Component } from 'react';
import '../../common/css/discover/discover.scss'
import Travel from './travel';
import Dynamic from './dynamic';

class Discover extends Component {
    state={
        // currentpath:'/travel',
        navmenu:[{
            active:true,
            text:'旅行精彩',
            name:'travel'
        },{
            active:false,
            text:'全球动态',
            name:'dynamic'
        }]
    }
    select(index){
       let navlist=this.state.navmenu.map((item,idx)=>{
           if(idx===index){
               item.active=true
           }else{
            item.active=false
           }
           return item;
       })
    //    this.setState({currentpath:path});
       this.setState({
           navmenu:navlist
       })

    }
    render() {

        return (
            <div className="wrap">
                <nav className="navWrap">
                    {
                        this.state.navmenu.map((item, index) => {
                            return <li key={item.name} className={item.active?'tab-active':''} onClick={this.select.bind(this,index)}>{item.text}</li>
                        })
                    }
                </nav>
                <main className="mainWrap">
                    {
                        this.state.navmenu.map((item)=>{
                            if(item.active==true){
                                if(item.name=='travel'){
                                    return <Travel key='0'/>
                                }else{
                                    return <Dynamic key='1'/>
                                }
                            }
                            
                        })
                    }
                </main>
            </div >
        )
    }
}

export default Discover;
import React, { Component } from "react";
// import { Icon } from "antd";
import {my} from '../../api/index';
class Fresh extends Component{
    state={
        storylist:[]
    }
    async componentDidMount(){
        let {
               data: { data }
                  } = await my.get("/HQ", {
                      team: "newstory"
                  });
        //   console.log(data);
          this.setState({
               storylist:data
          })
       }
    render(){
        return(
            <div className='news'>
                {
                    this.state.storylist.map(item=>{
                        return <figure key={item._id}>
                            <img src={item.src}/>
                            <figcaption>
                                {item.text}
                            </figcaption>
                        </figure>
                    })
                }
            </div>
        )
    }
}
export default Fresh;
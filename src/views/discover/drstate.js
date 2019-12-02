import React, { Component } from "react";
import { Icon } from "antd";
import {my} from '../../api';
class Drstate extends Component {
    state={
        drlist:[]
    }
    async componentDidMount(){
        let {
               data: { data }
                  } = await my.get("/HQ", {
                      team: "world"
                  });
          console.log(data);
          this.setState({
            drlist:data
          })
       }
  render() {
    return (
//         imgSrc: (9) ["https://pic.8pig.com/avatar/u_16/868416/33042F6650290E831B6384CD34A1DF6A.jpg@96w_96h__1e_1c.webp", "https://pic.8pig.com/circle_img/u_16/868416/91D3E1…B553E0CCCCCA31BE05240E1.jpg@214w_214h__1e_1c.webp", "https://pic.8pig.com/circle_img/u_16/868416/2C0C2A…A94A3CFA0C854515731F540.jpg@214w_214h__1e_1c.webp", "https://pic.8pig.com/circle_img/u_16/868416/61F291…4900DE601625F28ED3007F3.jpg@214w_214h__1e_1c.webp", "https://pic.8pig.com/circle_img/u_16/868416/58964B…575D4481FA25715A4B593C3.jpg@214w_214h__1e_1c.webp", "https://pic.8pig.com/circle_img/u_16/868416/90A854…A2D404B2A427C894BF6C317.jpg@214w_214h__1e_1c.webp", "https://pic.8pig.com/circle_img/u_16/868416/C4D998…597D2DDB07E6152624B879A.jpg@214w_214h__1e_1c.webp", "https://pic.8pig.com/circle_img/u_16/868416/725333…C18311E158F5A5F35EFF124.jpg@214w_214h__1e_1c.webp", "https://pic.8pig.com/circle_img/u_16/868416/8E4F0D…0976398EB5CAF696388100B.jpg@214w_214h__1e_1c.webp"]
// lyTitle: "墨西哥黑脉金斑蝶生态保护区，世界动物迁徙八大奇迹之一，2008年世界自然遗产，没毛病！"
// name: "糖糖的丫丫"
// time: "2019.11.29 10:31"
// titleSrc: "https://pic.8pig.com/avatar/u_16/868416/33042F6650290E831B6384CD34A1DF6A.jpg@96w_96h__1e_1c.webp"
// _id: "5de0a14750c40f76d89633c5"
      <div className='drwrap'>
          <h2><span className='Ttitle' style={{ fontSize: "20px", fontWeight: 600 }}>达人动态</span></h2>
          {
              this.state.drlist.map(item=>{
                  return <figure key={item._id}>
                  <div className='dname'>
                    <img src={item.titleSrc} className='tpic'/>
                    <p className='name'>{item.name}</p>
                    <p className='time'>{item.time}</p>
                  </div>
                  <figcaption>
                      <p>{item.lyTitle}</p>
                      <ul>
                          {
                              item.imgSrc.map(ele=>{
                                 return <li key={ele}><img src={ele} /></li>
                              })
                          }
                      </ul>
                  </figcaption>
              </figure>
              })
          }
      </div>
    );
  }
}

export default Drstate;

import React, { Component } from "react";
import { Icon } from "antd";
class Dmove extends Component {
    open(e){
       e.target.className='Imgnone'
    }
  render() {
    return (
      <div>
        <div className='video-box'>
          <a>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://pic.8pig.com/operation/liveVideo/180202100735752fa038ad049c2e7e88.jpg@678w_382h__1e_1c.webp"
            />
            <Icon type="play-circle" style={{color:"#ccc",fontSize: '50px',position:'absolute',top:'40%',left:'45%'}} />
          </a>
        </div>
        <p>
            <img src="https://pic.8pig.com/avatar/u_33/1633/23299FDD088502C9EF2609DC4CA024F0.jpg@96w_96h__1e_1c.webp" style={{borderRadius:'50%',width:'50px',float:'left',marginRight:'10px'}} />
            <p>
              <h4 style={{fontSize:'20px',margin:'0'}}>【小猪带你玩】这事在威尼斯“见不得人”？</h4>
              <p style={{fontSize:'14px',color:'#ccc',textAlign:'center'}}>直播时间：北京时间 2018-02-03 19:00:00</p> 
            </p>
        </p>
      </div>
    );
  }
}
export default Dmove;

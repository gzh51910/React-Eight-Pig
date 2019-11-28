import React, { Component } from "react";
import { Icon } from "antd";
class Move extends Component {
    
    // open(e){
    //    e.target.className='Imgnone';
    // }
  render() {
    return (
      <div>
        <div className='video-box'>
          <video
            width="100%"
            height="100%"
            controls
            poster="http://8pig-file.oss-cn-shenzhen.aliyuncs.com/operation/webdiscovery/xiaomaishiping.jpg"
          >
                                
            <source
              src="http://pic.8pig.com/video/u_11/121811/xiaomai121811.mp4"
              type="video/mp4"
            />
                            
          </video>
          <a
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              left: "0",
              top: "0",
              display: "block",
              zIndex: "10"
            }}
            // onClick={this.open}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src="http://8pig-file.oss-cn-shenzhen.aliyuncs.com/operation/webdiscovery/xiaomaishiping.jpg"
            />
            <Icon type="play-circle" style={{color:"#ccc",fontSize: '50px',position:'absolute',top:'40%',left:'45%'}} />
          </a>
          <p>
              <img src="https://pic.8pig.com/avatar/u_11/121811/b803e5ab4da349c69ff50f410f3d076b2.jpg@96w_96h__1e_1c.webp" style={{borderRadius:'50%',width:'50px',float:'left',marginRight:'10px'}} />
              <span style={{fontSize:'16PX'}}>美国户外极限玩家带你赴一场粉雪之约</span>
          </p>
        </div>
      </div>
    );
  }
}
export default Move;

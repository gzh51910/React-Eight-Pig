import React, { Component } from "react";
import { Icon } from "antd";
import Move from "./move";
import News from './news';
import Story from './story';
import Fresh from './fresh'
class Travel extends Component {
 
  render() {
    return (
      <div className='travelwrap'>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: 600 }}>达人视频</span>
          <span style={{ color: "#ccc", lineHeight: "100%" }}>
            更多
            <Icon type="right" />
          </span>
        </p>
        <Move/>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            margin:'15px 0'
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: 600 }}>游客故事</span>
          <span style={{ color: "#ccc", lineHeight: "100%" }}>
            更多
            <Icon type="right" />
          </span>
        </p>
        <News/>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            margin:'15px 0'
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: 600 }}>达人故事</span>
          <span style={{ color: "#ccc", lineHeight: "100%" }}>
            更多
            <Icon type="right" />
          </span>
        </p>
        <Story/>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            margin:'15px 0'
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: 600 }}>新鲜事</span>
          <span style={{ color: "#ccc", lineHeight: "100%" }}>
            更多
            <Icon type="right" />
          </span>
        </p>
        <Fresh/>
      </div>
    );
  }
}

export default Travel;

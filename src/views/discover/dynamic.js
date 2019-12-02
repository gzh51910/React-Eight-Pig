import React, { Component } from "react";
import { Icon } from "antd";
import Dmove from "./dmove";
import Drstate from './drstate'
class Dynamic extends Component {
  render() {
    return (
      <div className='dywrap'>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}
        >
          <span className='Ttitle' style={{ fontSize: "20px", fontWeight: 600 }}>直播</span>
          <span style={{ color: "#ccc", lineHeight: "100%" }}>
            更多
            <Icon type="right" />
          </span>
        </p>
        <Dmove/>
        <Dmove/>
        <Drstate/>
      </div>
    );
  }
}

export default Dynamic;

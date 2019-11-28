import React, { Component } from "react";
import { Icon } from "antd";
import Dmove from "./dmove";
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
          <span style={{ fontSize: "20px", fontWeight: 600 }}>直播</span>
          <span style={{ color: "#ccc", lineHeight: "100%" }}>
            更多
            <Icon type="right" />
          </span>
        </p>
        <Dmove/>
        <Dmove/>
      </div>
    );
  }
}

export default Dynamic;

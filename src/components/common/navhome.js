import React, { Component } from "react";
import "../../common/css/home/nav.scss";
import { my } from "../../api";
import { Cascader } from "antd";
import {Menu} from 'antd';
const { SubMenu } = Menu;
class Nav extends Component {
  state = {
    options: []
  };
  async componentDidMount() {
    let {
      data: { data }
    } = await my.get("/HQ", {
      team: "hot"
    });
    this.setState({ options: data });
    console.log(data);
  }
  render() {
    let { list } = this.props;
    return (
      <div>
        <ul className="navhome">
          <li>
            <Cascader
              fieldNames={{
                label: "nameCn",
                value: "id",
                children: "children"
              }}
              options={this.state.options}            
               placeholder="目的地"
            />
            {/* <div className='menu'>1111</div> */}
          </li>
          <li className="red">
            {list[1].text}
            <svg
              className="sj"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              id="triangle"
            >
              <path d="M525.347 748.235l471.775-471.777H27.528z"></path>
            </svg>
            {/* <div className='menu'>1111</div> */}
          </li>
          <li>
            综合排序
            <svg
              className="sj"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              id="triangle"
            >
              <path d="M525.347 748.235l471.775-471.777H27.528z"></path>
            </svg>

          </li>
          <li>
            筛选
            <svg
              className="sj"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              id="triangle"
            >
              <path d="M525.347 748.235l471.775-471.777H27.528z"></path>
            </svg>
            {/* <div className='menu'>1111</div> */}
          </li>
          {/* {list.map((item, idx) => {
            return (
              <li key={item.text} className={idx == 1 ? "red" : ""}>
                {item.text}
                <svg
                  className="sj"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  id="triangle"
                >
                  <path d="M525.347 748.235l471.775-471.777H27.528z"></path>
                </svg>
              </li>
            );
          })} */}
        </ul>
      </div>
    );
  }
}

export default Nav;

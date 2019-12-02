import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Rate, Icon } from "antd";
import { my } from "../../api";
import "../../common/css/home/hdetails.scss";
class Hdetail extends Component {
  state = {
    list: []
  };
  async componentDidMount() {
    // console.log(this.props)
    let { id } = this.props.match.params;
    let {
      data: { data }
    } = await my.get("/air", { _id: id });
    console.log(data[0]);

    this.setState({
      list: data[0]
    });
  }
  render() {
    let { list } = this.state;
    return (
      <div className="Dwrap">
        <img src={list.img} className="dpic" />
        <main>
            <div className="title">
          <p className='ti'>{list.title}</p>
          <p>
            <span>接送机</span>
            <a style={{ marginLeft: "10px" }}>
              <Icon type="environment" />
              {list.site}
            </a>
          </p>
        </div>
        <div className="name">
          <div>
            <p>{list.name}</p>
            <div>
              <Rate
                disabled
                defaultValue={5}
                style={{ fontSize: "12px", margin: "0", padding: "0 10px" }}
              />
            </div>
            <img src={list.mini} />
          </div>
          <div>
            <a>户外达人</a>
            <a>资深当地人</a>
            <a>夜店老司机</a>
          </div>
        </div>
        <nav className="Dnav">
          <li>预订信息</li>
          <li>游客评价</li>
          <li>相关玩法</li>
        </nav>
        <div className="order"></div>
        <div className="comment">
          <div>
            <p>
              <span>{list.evaluate}</span>
            </p>
          </div>
        </div>
        <div className="play">
            <h5>达人的其他服务</h5>
          <ul>
            <li>
              <img
                src="https://pic.8pig.com/road/u_41/601441/e54d4db095f04894e87c5b6a150254e6.jpg@240w_240h__1e_1c.webp"
                className="rpic"
              />
              <div>
                <h4>香港机场接送机</h4>
                <p>
                  租车必读：
                  1、本报价为人民币报价，包含燃油费、路桥费、隧道费，机场接机、酒店接客人免费举牌
                </p>
                <p><span>￥450</span><span>已有<em>2206</em>人预订</span></p>
              </div>
            </li>
            <li>
              <img
                src="https://pic.8pig.com/road/u_41/601441/e54d4db095f04894e87c5b6a150254e6.jpg@240w_240h__1e_1c.webp"
                className="rpic"
              />
              <div>
                <h4>香港机场接送机</h4>
                <p>
                  租车必读：
                  1、本报价为人民币报价，包含燃油费、路桥费、隧道费，机场接机、酒店接客人免费举牌
                </p>
                <p><span>￥450</span><span>已有<em>2206</em>人预订</span></p>
              </div>
            </li>
            <li>
              <img
                src="https://pic.8pig.com/road/u_41/601441/e54d4db095f04894e87c5b6a150254e6.jpg@240w_240h__1e_1c.webp"
                className="rpic"
              />
              <div>
                <h4>香港机场接送机</h4>
                <p>
                  租车必读：
                  1、本报价为人民币报价，包含燃油费、路桥费、隧道费，机场接机、酒店接客人免费举牌
                </p>
                <p><span>￥450</span><span>已有<em>2206</em>人预订</span></p>
              </div>
            </li>
            <li>
              <img
                src="https://pic.8pig.com/road/u_41/601441/e54d4db095f04894e87c5b6a150254e6.jpg@240w_240h__1e_1c.webp"
                className="rpic"
              />
              <div>
                <h4>香港机场接送机</h4>
                <p>
                  租车必读：
                  1、本报价为人民币报价，包含燃油费、路桥费、隧道费，机场接机、酒店接客人免费举牌
                </p>
                <p><span>￥450</span><span>已有<em>2206</em>人预订</span></p>
              </div>
            </li>
            <li>
              <img
                src="https://pic.8pig.com/road/u_41/601441/e54d4db095f04894e87c5b6a150254e6.jpg@240w_240h__1e_1c.webp"
                className="rpic"
              />
              <div>
                <h4>香港机场接送机</h4>
                <p>
                  租车必读：
                  1、本报价为人民币报价，包含燃油费、路桥费、隧道费，机场接机、酒店接客人免费举牌
                </p>
                <p><span>￥450</span><span>已有<em>2206</em>人预订</span></p>
              </div>
            </li>
            <li>
              <img
                src="https://pic.8pig.com/road/u_41/601441/e54d4db095f04894e87c5b6a150254e6.jpg@240w_240h__1e_1c.webp"
                className="rpic"
              />
              <div>
                <h4>香港机场接送机</h4>
                <p>
                  租车必读：
                  1、本报价为人民币报价，包含燃油费、路桥费、隧道费，机场接机、酒店接客人免费举牌
                </p>
                <p><span>￥450</span><span>已有<em>2206</em>人预订</span></p>
              </div>
            </li>
            <li>
              <img
                src="https://pic.8pig.com/road/u_41/601441/e54d4db095f04894e87c5b6a150254e6.jpg@240w_240h__1e_1c.webp"
                className="rpic"
              />
              <div>
                <h4>香港机场接送机</h4>
                <p>
                  租车必读：
                  1、本报价为人民币报价，包含燃油费、路桥费、隧道费，机场接机、酒店接客人免费举牌
                </p>
                <p><span>￥450</span><span>已有<em>2206</em>人预订</span></p>
              </div>
            </li>
          </ul>
        </div>
        </main>   
      </div>
    );
  }
}
Hdetail = withRouter(Hdetail);
export default Hdetail;

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
    console.log('5550',this.props)
    let { id ,type} = this.props.match.params;
    // let  {pathname} =this.props.location;
    if(type=='port'){
      let {
      data:{data}
    } = await my.get("/air", { _id: id });
    // console.log(data[0]);
    
      this.setState({
      list: data[0]
    });
    }
   else if(type=='car'){
     let {
      data: { data }
    } = await my.get("/bag", { _id: id });
    // console.log(data[0]);

    this.setState({
      list: data[0]
    });
   }
    
  
    
  }
  render() {
    let { list } = this.state;
    return (
      <div className="Dwrap">
        <img src={list.img} className="dpic" />
        <main>
            <div className="title">
          <p className='t'>{list.title}</p>
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
            <div className="star">
              <p>{list.name}</p>
              <Rate
                disabled
                defaultValue={5}
                style={{ fontSize: "12px"}}
              />
            </div>
            <img src={list.mini} />
          </div>
        </div>
        <div className='a'>
            <a>户外达人</a>
            <a>资深当地人</a>
            <a>夜店老司机</a>
          </div>
        <nav className="Dnav">
          <li className='dactive'>预订信息</li>
          <li>游客评价</li>
          <li>相关玩法</li>
        </nav>
        </main>   
      </div>
    );
  }
}
Hdetail = withRouter(Hdetail);
export default Hdetail;

import React, { Component } from "react";
import "../../common/css/home/nav.scss";
import { my } from "../../api";
import { Cascader } from "antd";



class Nav extends Component {
   
  state = {
    isActive:false,
    options: [],
    menu:['综合排序','销量优先','评论多到少','最新发布'],
    ml:[]
  };

  async componentDidMount() {
    let {
      data: { data }
    } = await my.get("/HQ", {
      team: "hot"
    });
    this.setState({ options: data });

  }
  active=()=>{
    if(this.state.isActive==true){
      this.setState({
        isActive:false
      })
    }else if(this.state.isActive==false){
      this.setState({
        isActive:true
      })
    }
  }
  
  changeActive=(item)=>{
    this.setState({
      isActive:false
    })
    

  }
  render() {
    let { list } = this.props;
    return (
      <div className="sortnav">
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
          <li onClick={this.active}>
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
        <div className="sort" style={this.state.isActive?{display:'block'}:{display:'none'}}>
             {
               this.state.menu.map(item=>{
               return <p onClick={this.changeActive.bind(this,item)} key={item}>{item}</p>
               })
             }
        </div>
      </div>
    );
  }
}

export default Nav;

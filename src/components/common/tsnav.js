import React, { Component } from "react";
import "../../common/css/home/nav.scss";
import { my } from "../../api";
import { Cascader } from "antd";
import PropTypes from 'prop-types'

class Tsnav extends Component {
      static propTypes = {
        listt: PropTypes.array.isRequired,
        listtt: PropTypes.array.isRequired,
        setform: PropTypes.func.isRequired,
        setform1: PropTypes.func.isRequired
    }

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
  compareup=(prop)=> {
    return function(obj1, obj2) {
    var val1 = obj1[prop];
    var val2 = obj2[prop];
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
    val1 = Number(val1);
    val2 = Number(val2);
    }
    if (val1 < val2) {
    return -1;
    } else if (val1 > val2) {
    return 1;
    } else {
    return 0;
    }
    };
    }
  changeActive=(item)=>{
    this.setState({
      isActive:false
    })
    if(item=='评论多到少'){
      let { listt} = this.props

      let newlist=listt.sort(this.compareup('comment'))
      let big=newlist.reverse()

      this.props.setform(big)
    }else if(item=='综合排序'){
      let {listtt} = this.props
    //   console.log(listtt);
      this.props.setform1(this.props.listtt)
    }

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
          </li>
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

export default Tsnav;

import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import '../../common/css/home/tsdrmain.scss';
import { Rate,Icon } from 'antd';
class Airmain extends Component{
    go(id){
        let {pathname}=this.props.location;
        this.props.history.replace('/hdetail/'+id+pathname);
    }
    render(){
        let {list}=this.props;
        return (
        <div className="mainair">
            {
                list.map(item=>{
                    // console.log(del);                   
                    return <figure key={item._id} onClick={this.go.bind(this,item._id)}>
                            <img src={item.img} />
                            <figcaption>
                                <span className='price'>{item.price}</span>
                                <main>
                                    <p className='p1'><b>{item.title}</b></p>
                                    <p className='p2'><em>机场接送</em><em style={{marginLeft:'10px'}}><Icon type="environment" />{item.site}</em></p>
                                    <div className='p3'><Rate disabled defaultValue={5} style={{fontSize:'12px',margin:'0',padding:'0 10px'}}/><span>{item.evaluate}</span>></div>
                                </main>
                                
                                <a><img src={item.mini}/><p>{item.name}</p></a>
                            </figcaption>
                    </figure>
                    
                })
            }
        </div>
    )
    }
    
}
Airmain = withRouter(Airmain);
export default Airmain;
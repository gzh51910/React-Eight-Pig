import React from 'react';
import '../../common/css/home/tsdrmain.scss';
import { Rate,Icon } from 'antd';
function airmain({ list,del }) {
    return (
        <div className="mainair">
            {
                // console.log("111",list)
                // console.log(del)
//                 evaluate: "77条评价"
// img: "https://pic.8pig.com/road/u_15/3115/4C643451CF9C4F776DA7B1994D1B3A39.png@690w_517h__1e_1c.webp"
// mini-img: "https://pic.8pig.com/avatar/u_15/3115/B68BC67ACA1A6CB70BA64F616F3D114A.jpg@120w_120h__1e_1c.webp"
// name: "平安带您游东京"
// price: "￥990"
// site: "日本 东京"
// title: "成田、羽田机场接送服务"
// _id: "5ddf2a313fb31e0375213c52"
                list.map(item=>{
                    // console.log(del);                   
                    return <figure key={item._id}>
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

export default airmain;
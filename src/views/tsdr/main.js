import React from 'react';
import '../../common/css/home/tsdrmain.scss';
import { Rate } from 'antd';
function main({ list ,del}) {
    return (
        <div className="maintsdr">
            {
                list.map(item=>{
                    return <figure key={item._id} onClick={del.bind(this,item)}>
                        <main>
                            <img src={item.img} />
                            <figcaption>
                                <div className='p1'><b>{item.name}</b><span>{item.place}</span></div>
                                <div className='p2'>
                                    <Rate disabled defaultValue={5} style={{fontSize:'12px',margin:'0',padding:'0 10px'}}/>
                                    <span><em>{item.comment}</em>条评价</span>
                                    <span style={{marginLeft:'10px'}}>{item.play}</span>
                                </div>
                                <h5>{item.article}</h5>
                            </figcaption>
                        </main>
                        
                        <p>
                            <a className={item.label==''?'none':''}>{item.label}</a>
                            <a className={item.label1==''?'none':''}>{item.label1}</a>
                            <a className={item.label2==''?'none':''}>{item.label2}</a>
                        </p>
                    </figure>
                })
            }
        </div>
    )
}

export default main;
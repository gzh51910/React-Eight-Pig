import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../../common/css/home/homeSlider.scss'
class homeNav extends Component {
    state = {
        list: [
            {
                src: "https://pic.8pig.com/operation/h5Home/19101612190577679c21b08d4859b2a6.jpg@750w_354h__1e_1c.webp"
            },
            {
                src: "https://pic.8pig.com/operation/h5Home/181206171205264285749922717e80e7.jpg@750w_354h__1e_1c.webp"
            },
            {
                src: "https://pic.8pig.com/operation/h5Home/1910141131397218acafadd2f1c8b584.jpg@750w_354h__1e_1c.webp"
            },
            {
                src: "https://8pig-file.oss-cn-shenzhen.aliyuncs.com/operation/webhome/quanqiubang.jpg@750w_354h__1e_1c.webp"
            }
        ]
    }
    render() {

        return (
            <div className="homeSlider">
                <Carousel autoplay>
                    {this.state.list.map(item => {
                        return <img key={item.src} style={{ width: '100%', height: '100%' }} src={item.src} />
                    })}
                </Carousel>
            </div>
        )
    }
}

export default homeNav;
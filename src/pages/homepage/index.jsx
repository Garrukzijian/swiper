import { Carousel, Row, Col } from 'antd'
import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import './index.css';

import img1 from "../../assets/image/1.png"
import img2 from "../../assets/image/2.png"
import img3 from "../../assets/image/3.png"
function Swiper() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const contentStyle = [
        {
            url: img1,
            title: '图片1',
            targeturl: "https://www.baidu.com/"
        },
        {
            url: img2,
            title: '图片2',
            targeturl: "https://www.taobao.com/"
        },
        {
            url: img3,
            title: '图片3',
            targeturl: "https://www.jd.com/"
        },
    ];

    const picStyle = {
        textAlign: 'center',
        height: '90vh',
        width: '80%',
        margin: '0 auto',
        background: '#364d79',
        overflow: 'hidden',
        borderRadius: "15px",
        padding: "1rem",
        cursor: "pointer",
        '@media (max-width: 768px)': {
            height: '80vh',
        },
    };

    //循环轮播
    const handleBeforeChange = (from, to) => {
        if (to === contentStyle.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(to);
        }
    };

    const handleClick = (targeturl) => {
        window.location.assign(targeturl)
    }

    //跳转的实现方式
    // 使用react-router-dom的Link组件跳转
    //     <Link to="https://www.taobao.com/">
    //          <img style={picStyle} src={img2} alt="" />
    //     </Link>

    // 使用useNavigate跳转
    // const navigate = useNavigate();
    // const handleImageClick = () => {
    //     navigate("https://www.baidu.com/")
    // }
    // 在app.js中设置路由

    return (
        <div className="App">
            <header className="App-header">
                <h1>轮播图</h1>
            </header>
            <Row style={{ height: "100%" }}>
                <Col xs={24} sm={24} md={24} lg={24} className='carousel'>
                    <Carousel
                        effect="scrollx"
                        beforeChange={handleBeforeChange}
                        autoplay autoplaySpeed={1500}>
                        {contentStyle.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img  src={item.url} alt={item.title} onClick={() => handleClick(item.targeturl)} />
                                </div>
                            );
                        })}
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
}

export default Swiper;

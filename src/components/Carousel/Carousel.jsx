import React, {Component} from 'react';
import './index.less';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';

class ReactCarousel extends Component {


    render() {
        return (
            <Row>

                <Col span={22} offset={1}>



            <Carousel autoplay>
                <div>
                   <img src={require("./images/a.jpg")} alt={"a"} style={{width:2000}}/>
                </div>
                <div>
                    <img src={require("./images/b.jpg")} alt={"b"}/>
                </div>
                <div>
                    <img src={require("./images/c.jpg")} alt={"c"}/>
                </div>
                <div>
                    <img src={require("./images/d.jpg")} alt={"d"}/>
                </div>

            </Carousel>
                </Col>
            </Row>

        )

    }
}

export default ReactCarousel;


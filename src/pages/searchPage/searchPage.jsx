import React, {Component} from "react";
import {Row, Col, Button} from 'antd';
import "./index.less"
import {Card} from 'antd';
import memoryUtils from "../../utils/memoryUtils";

export default class searchPage extends Component {
    state = {}

    render() {
        const sightList = memoryUtils.sightList;
        return (
            <div>
                <Row>
                    <Col span={15} offset={5}>

                        {sightList.map((item, index) => (
                            <div className={"right"} key={index}>
                                <Card title={item.Name} style={{width: 1300}}
                                      extra={<Button type="primary" onClick={() => {
                                          this.getLatAndLng(item.Lat, item.Lng)
                                      }}>check address</Button>}
                                >

                                    <p style={{fontSize: 18}}>
                                        {
                                            // eslint-disable-next-line}
                                        }
                                        <img src={item.Pic} style={{width: 800, height: 500, float: "left",marginRight:20}}/>
                                        {item.Introduction}
                                    </p>
                                    <p style={{textAlign: "right"}}>
                                        References from : {item.Refer}
                                    </p>
                                </Card>
                            </div>
                        ))}
                    </Col>
                </Row>
            </div>


        )
    }
}
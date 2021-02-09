import React, {Component} from "react";
import {Row, Col} from 'antd';
import {reqViewIntroduction, reqViewList} from "../../api";
import "./index.less"
import {List, Typography} from 'antd';
import {Card} from 'antd';
import { Button } from 'antd';
import memoryUtils from "../../utils/memoryUtils";
import  b from "../../image/b.gif"


export default class Sights extends Component {
    state = {
        ViewList: [],
        introduction: [],
    }


    getViewList = async () => {
        const ViewList = await reqViewList();
        console.log(ViewList);
        this.setState({
            ViewList
        })

    }
    getIntroduction = async (Id) => {
        const introduction = await reqViewIntroduction(Id);
        console.log("introduction", introduction)
        this.setState({
            introduction,
        })

    }

    getLatAndLng=(Lat,Lng)=>{
      memoryUtils.Lat=Lat;
      memoryUtils.Lng=Lng;
      this.props.history.push("./routes");
    }

    componentDidMount() {
        this.getViewList();

    }


    render() {
        const {ViewList} = this.state;
        const {introduction} = this.state;
        return (
            <div>
                <Row>
                    <Col span={6} offset={1}>
                        <List
                            header={<div className={"listTitle"}>Sights List</div>}
                            bordered
                            dataSource={ViewList}
                            renderItem={item => (
                                <List.Item className={"left"} onClick={() => {
                                    this.getIntroduction (item.Id)
                                }}>
                                    {/*
                                    <Typography.Text mark>[Hot]</Typography.Text>
                                    */}
                                    <img src={b} alt={"hot"}/>
                                    {item.Name}

                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col span={15} offset={1}>
                        {introduction.map((item,index) => (
                            <div className={"right"} key={index}>
                                <Card title={item.Name}
                                      style={{width: 1300}}
                                      extra={<Button type="primary" onClick={() => {
                                    this.getLatAndLng(item.Lat,item.Lng)
                                }}>check address</Button>}>
                                    <p style={{fontSize: 18}}>
                                        <img src={item.Pic} style={{width: 800, height: 500, float: "left",marginRight:20}}/>
                                        {item.Introduction}
                                    </p>
                                    <p style={{textAlign:"right"}}>
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
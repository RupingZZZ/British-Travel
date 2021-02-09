import React, {Component} from "react";
import {Row, Col} from 'antd';
import {reqNewContent, reqNewList} from "../../api";
import "./index.less"
import {List} from 'antd';
import {Card} from 'antd';
import b from "../../image/b.gif";

export default class News extends Component {
    state = {
        NewList: [],
        content: [],
    }

    getNewList = async () => {
        const NewList = await reqNewList();
        console.log(NewList);
        this.setState({
            NewList
        })

    }
    getContent = async (Id) => {
        const content = await reqNewContent(Id);
        console.log("content", content)
        this.setState({
            content,
        })
    }

    componentDidMount() {
        this.getNewList();
    }


    render() {
        const {NewList} = this.state;
        const {content} = this.state;
        return (
            <div>
                <Row>
                    <Col span={6} offset={1}>
                        <List
                            header={<div className={"listTitle"}>News List</div>}
                            bordered
                            dataSource={NewList}
                            renderItem={item => (
                                <List.Item className={"left"} onClick={() => {
                                    this.getContent(item.Id)
                                }}>
                                    {/*
                                    <Typography.Text mark>[Hot]</Typography.Text>
                                    */}
                                    <img src={b} alt={"hot"}/>
                                    {item.Title}
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col span={15} offset={1}>
                        {content.map((item, index) => (
                            <div className={"right"} key={index}>
                                <Card title={item.Title} style={{width: 1300}}>
                                    <p style={{fontSize: 18}}>
                                        <img src={item.Pic} style={{width:800, height:500, float:"left",marginRight:20}}/>
                                        {item.Content}
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
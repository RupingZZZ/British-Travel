import React, {Component} from "react";
import {Modal, Comment, Avatar, Form, Button, Input, message} from 'antd';
import {Card} from 'antd';
import {Row, Col} from 'antd';
import {reqRMessage, reqWMessage} from "../../api";
import memoryUtils from "../../utils/memoryUtils";
import './index.less';


const {TextArea} = Input;
const { Meta } = Card;
export default class Message extends Component {
    state = {
        message: [],
        visible: false
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    onFinish = async (values) => {
        console.log('values', values);
        if(values == null || values === ""){
            message.info("please input value content")
        }else {
            const userId = memoryUtils.user.Id;
            console.log('user', userId);
            const {Content} = values;
            const result = await reqWMessage(userId,Content);
            console.log("result", result);
            message.success("your message has been left");
        }
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
        window.location.reload();

    }
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    getMessage = async () => {
        const message = await reqRMessage();
        console.log("message", message);
        this.setState({
            message,
        })
    }


    componentDidMount() {
        this.getMessage();
    }

    render() {
        const {message} = this.state;
        const username = memoryUtils.user.username;
        return (
            <div>
                <Row>
                    <Col span={4} offset={2} >
                        <Row justify="center">
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnn-nKKXK-7VIWh5Z0v-ZIJ8tjSnaOHkCOrw&usqp=CAU" />}
                            >
                                <Meta title={username} description="Welcome to Travel" />
                            </Card>
                            <Button type="primary" onClick={this.showModal}>
                                leave message
                            </Button>
                            <Modal
                                title="leave message"
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <Form onFinish={this.onFinish}>
                                    <Form.Item name="Content"
                                    >
                                        <TextArea rows={4}/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Modal>
                        </Row>
                    </Col>
                    <Col span={18}>
                        {message.map((item, index) => (
                            <Col span={18} push={4} key={index}>
                                <Card style={{width: 1200, marginTop: 10}} >
                                    <Comment
                                        author={<a>{item.User}</a>}
                                        avatar={
                                            <Avatar
                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                                alt="Han Solo"
                                            />
                                        }
                                        content={
                                            <p className={"wrap"}>
                                                {item.Content}
                                            </p>
                                        }
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Col>
                </Row>
            </div>

        )
    }


}
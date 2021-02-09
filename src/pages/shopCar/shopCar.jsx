import React, {Component} from "react";
import {List, Typography, Divider, Modal} from 'antd';
import {reqAdd, reqBook, reqDelete} from "../../api";
import {Row, Col} from 'antd';
import {Button} from 'antd';
import './index.less'
import memoryUtils from "../../utils/memoryUtils";

export default class ShopCar extends Component {

    state = {
        bookList: [],
    }

    getBookList = async () => {
        const userId = memoryUtils.user.Id;
        console.log("user__id", userId);
        const bookList = await reqBook(userId);
        console.log("user", bookList);
        this.setState({
                bookList
            }
        )

    }

    deleteList = (productId) => {
        console.log("delete", productId);
        const userId = memoryUtils.user.Id;
        Modal.confirm({
            title: 'do you want to delete that',
            onOk: async () => {
                console.log('OK', this)
                const result = await reqDelete(userId, productId);
                console.log("is if delete", result);
                window.location.reload();
            },
            onCancel() {
            }
        });
    }

    addList = (productId) => {
        const userId = memoryUtils.user.Id;
        Modal.confirm({
            title: 'do you want to add the other ticket',
            onOk: async () => {
                console.log('OK', this)
                const result = await reqAdd(userId, productId);
                console.log("add the ticket",result);
                window.location.reload();
            },
            onCancel() {
            }
        });
    }

    componentDidMount() {
        this.getBookList();
    }

    render() {
        const {bookList} = this.state;
        return (
            <div>
                <Row>
                    <Col span={8} offset={8}>
                        <Divider orientation=""> Your Orders </Divider>
                        <List.Item className={"words"}>
                            <span style={{width:130, marginLeft:130}}>Views Name</span>
                            <span style={{width:30}}>Price</span>
                            <span style={{width:280}}>Number</span>
                        </List.Item>
                        <List className={"words"}
                              bordered
                              dataSource={bookList}
                              renderItem={(item, index) => (
                                  <List.Item key={index}>
                                      <Typography.Text mark>[products]</Typography.Text>
                                      <span style={{width: 200}}>{item.productName}</span>
                                      <span style={{width: 100}}>{item.Price}</span>
                                      <span style={{width: 100}}>{item.number}</span>

                                      <Button type="primary" onClick={() => {
                                          this.addList(item.productId)
                                      }}>Add</Button>

                                      <Button type="primary" onClick={() => {
                                          this.deleteList(item.productId)
                                      }}>Delete</Button>

                                  </List.Item>
                              )}
                        />
                    </Col>

                </Row>
            </div>

        )
    }
}
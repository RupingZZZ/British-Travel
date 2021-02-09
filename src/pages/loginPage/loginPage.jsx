import React, {Component} from "react";
import "./index.less";
import {Card} from 'antd';
import {Form, Input, Button, Checkbox} from 'antd';
import {Row, Col} from 'antd';
import {reqLogin} from "../../api";
import {message} from "antd";
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';
import {Link} from "react-router-dom";

const tailLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 4},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 18},
    },
}
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export default class LoginPage extends Component {
    onFinish = async (values) => {
        console.log('values', values);
        const {email, password} = values
        const user = await reqLogin(email, password);
        if (user !== false) {
            message.success("login succeed!");
            console.log('login', user);
            memoryUtils.user = user;
            console.log("memory", memoryUtils.user)
            storageUtils.saveUser(user);
            this.props.history.replace('./home')
        } else {
            message.error("false to login")
        }
    }

    render() {
        return (
            <div className={"box"}>
                <Row>
                    <Col span={16} offset={6}>
                        <Card title="Login" style={{width: 750}}>
                            <Form
                                {...tailLayout}
                                name="basic"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={this.onFinish}

                            >
                                <Form.Item
                                    name="email"
                                    label="E-mail"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password/>
                                </Form.Item>

                                <Form.Item    {...tailFormItemLayout} name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item    {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                    <Link to={"./registerPage"}>
                                        <Button type="primary" htmlType="submit" style={{marginLeft:30}}>
                                        Register
                                    </Button>
                                    </Link>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
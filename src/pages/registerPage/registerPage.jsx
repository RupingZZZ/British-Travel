import {Card, message} from 'antd';
import React, {Component} from "react";
import "./index.less";
import {Form, Input, Row, Col, Checkbox, Button} from 'antd';
import {reqRegister} from "../../api";
import {Link} from "react-router-dom";

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 4},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 18},
    },
};
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

export default class RegisterPage extends Component {

    onFinish = async (values) => {
        const {email, password, username, phone} = values
        const result = await reqRegister(email, password, username, phone);
        if (result !== false) {
            message.success("register succeed!");
            console.log('login', result);
            this.props.history.replace('./loginPage')
        } else {
            console.log(result);
            message.error("false to register:The same email address already exists")
        }
        console.log('Received values of form: ', values);
    };

    render() {

        return (
            <div className={"box"}>
                <Row>
                    <Col span={16} offset={8}>
                        <Card title="Register" style={{width: 800}}
                        >

                            <Form
                                {...formItemLayout}

                                name="register"
                                onFinish={this.onFinish}
                                scrollToFirstError
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
                                    name="password"
                                    label="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password/>
                                </Form.Item>

                                <Form.Item
                                    name="confirm"
                                    label="Confirm Password"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        ({getFieldValue}) => ({
                                            validator(rule, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject('The two passwords that you entered do not match!');
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password/>
                                </Form.Item>

                                <Form.Item
                                    name="username"
                                    label="username"
                                    rules={[{required: true, message: 'Please input your nickname!', whitespace: true}]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    label="Phone Number"
                                    rules={[{required: true, message: 'Please input your phone number!'}]}
                                >
                                    <Input style={{width: '100%'}}/>
                                </Form.Item>
                                <Form.Item
                                    name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                        {validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement')},
                                    ]}
                                    {...tailFormItemLayout}
                                >
                                    <Checkbox>
                                        I have read the <a href="">agreement</a>
                                    </Checkbox>
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Register
                                    </Button>
                                    <Link to={'./loginPage'}>
                                        <Button type="primary" htmlType="submit" style={{marginLeft: 50}}>
                                            Login
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
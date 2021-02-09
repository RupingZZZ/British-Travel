import React, {Component} from "react";
import "./index.less";
import {Button} from 'antd';
import {Modal} from 'antd';
import {Avatar} from 'antd';
import memoryUtils from "../../utils/memoryUtils";
import {ShoppingCartOutlined} from '@ant-design/icons';
import storageUtils from "../../utils/storageUtils";
import {withRouter} from 'react-router-dom';


class Logged extends Component {

    logout = () => {
        Modal.confirm({
            title: 'do you want to login out',
            onOk: () => {
                console.log('OK', this)
                storageUtils.removeUser();
                memoryUtils.username = {};
                window.location.reload();
            },
            onCancel() {
            }
        });
    }

    shopCar=()=>{
        this.props.history.push('./shopCar');

    }

    render() {
        const username = memoryUtils.user.username;
        console.log("logged user", username);
        return (
            <div className="site-button-ghost-wrapper">
                <Avatar style={{color: '#f56a00', backgroundColor: '#fde3cf'}}>U</Avatar>
                <Button type="primary" size={"large"}>{username}</Button>
                <Button type="primary" size={"large"} onClick={this.logout}>Sign out</Button>
                <Button type="primary" size={"large"} onClick={this.shopCar}>
                    <ShoppingCartOutlined spin={true}/>
                </Button>
            </div>
        )
    }


}

export default withRouter(Logged);
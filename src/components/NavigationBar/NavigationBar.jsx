import React,{Component} from "react";
import './index.less'
import { Menu} from 'antd';
import { Link } from 'react-router-dom';
import menuList from '../../config/menuC'
import {withRouter} from 'react-router-dom';
export class NavigationBar extends Component{

    getMenuItem=(menuList)=>{
        return menuList.map(item=>{
            return(
                <Menu.Item key={item.key} style={{height:"150px", lineHeight:"150px", fontSize:"35px" }} >
                    <Link to={item.key}>
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
            )

        })
    }

    render() {

        return (
            <div className={"menu"}>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} >
                    {
                        this.getMenuItem(menuList)
                    }
                </Menu>
            </div>

        )
    }
}
export default withRouter(NavigationBar);
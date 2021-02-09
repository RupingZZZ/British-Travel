import React,{Component} from "react";
import "./index.less";
import { Button } from 'antd';
import {Link} from "react-router-dom";

export default class Login extends Component {
    render() {
        return(
            <div className="site-button-ghost-wrapper">
               <Link to={'./loginPage'}>
               <Button   type="primary" size={"large"} >Login</Button>
               </Link>
                <Link to={'./registerPage'}>
                <Button  type="primary" size={"large"}>Register</Button>
                </Link>
            </div>
        )
    }


}
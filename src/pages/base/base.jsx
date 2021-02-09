import React, {Component} from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import {Row, Col} from 'antd';
import Login from "../../components/Login/Login";
import e from "../../image/e.png";
import {Redirect,Route,Switch} from 'react-router-dom'
import "./index.less"

import Sight from "../sights/sights";
import Home from "../home/home";
import News from "../news/news";
import Booking from "../booking/booking";
import Message from "../message/message";
import Routes from "../routes/routes";
import searchPage from "../searchPage/searchPage";
import LoginPage from "../loginPage/loginPage";
import RegisterPage from "../registerPage/registerPage";
import memoryUtils from "../../utils/memoryUtils";
import Logged from "../../components/Login/Logged";
import ShopCar from "../shopCar/shopCar";

export default class Base extends Component {

    Logins=()=>{
       const user= memoryUtils.user;
       console.log("basePage, memory",user)
       if(!user||!user.email){
           return  <Login/>
            }else {
           return  <Logged/>
      }

    }



    componentDidMount() {
     this.Logins();
    }

    render() {
        return (
            <div >
                <div className={"top"}>
                <Row>
                    <Col span={4} offset={18}>
                        {this.Logins()}
                    </Col>
               </Row>
                </div>
                <div className={"Bar"}>
                    <Row align="middle">
                        <Col span={2} offset={2}><img src={e} alt="e"/> </Col>
                        <Col span={12}> <NavigationBar/> </Col>
                        <Col span={6} offset={-2}> <SearchBar/></Col>
                    </Row>
                </div>
                <div>
                    <Switch>
                        <Route path='/base' component={Base}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/sights' component={Sight}/>
                        <Route path='/news' component={News}/>
                        <Route path='/booking' component={Booking}/>
                        <Route path='/routes' component={Routes}/>
                        <Route path='/message' component={Message}/>
                        <Route path='/searchPage' component={searchPage}/>
                        <Route path='/loginPage' component={LoginPage}/>
                        <Route path='/registerPage' component={RegisterPage}/>
                        <Route path='/shopCar' component={ShopCar}/>
                        <Redirect to={'/home'}/>
                    </Switch>
                </div>
            </div>
        )
    }
}


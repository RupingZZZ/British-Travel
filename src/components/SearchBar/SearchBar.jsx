import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import {Input, message} from "antd"
import './index.less'
import {reqSights} from "../../api";
import memoryUtils from "../../utils/memoryUtils";

 class SearchBar extends Component {
    state = {
        sightList:[],

    }

    handleSubmit = async (value) => {
        const sightList = await reqSights(value);
        if(sightList!==false){
            memoryUtils.sightList=sightList;
         this.props.history.replace('/searchPage');
        }
        else {
           message.info("please input contained sights in the website")
        }
        console.log(sightList);

        this.setState({
            sightList
        })

    };


    render() {
        const {Search} = Input;
        return(

            <div className={"search"}>
            <Search
                placeholder="input search items"
                enterButton="Search"
                size="large"
                onSearch={value =>this.handleSubmit(value)}
            />
            </div>

        )
    }


}
export default withRouter(SearchBar);
import React,{Component} from "react";
import "./index.less";
import {Row, Col, Modal} from 'antd';
import { Card } from 'antd';
import memoryUtils from "../../utils/memoryUtils";
import {withRouter} from 'react-router-dom';
import {postBook, reqProduct} from "../../api";


const { Meta } = Card;
 class Booking extends Component {
     state = {
        products:[],
     }


     getProducts= async ()=>{
        const products = await reqProduct()
         console.log("Products",products);
         this.setState({
             products
         })

     }

    enBook= (Id) => {
        const user = memoryUtils.user;
        const userId = user.Id;
        if(!user||!user.email){
            Modal.confirm({
                title: 'please login you account!',
                onOk: () => {
                  this.props.history.push('./loginPage');
                },
                onCancel() {
                }
            });

        }else {
            Modal.confirm({
                title: 'do you want to add to shopping cart',
                onOk: () => {
                 const result = postBook(userId,Id);
                    console.log("shop",result);
                },
                onCancel() {
                }
            });
        }
    }

     componentDidMount() {
         this.getProducts();
     }

     render() {
      const {products} = this.state
        return(
            <div className={"box"}>
                <Row justify="space-around" align="middle">
                    {products.map((item, index) => (
                    <Col span={6} key={index}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="pic" src={item.Pic}/>}
                                onClick={() => {
                                    this.enBook(item.Id)
                                }}
                                >
                                <Meta title={item.Name} description={item.Price}/>


                            </Card>

                    </Col>
                    ))}
                </Row>
            </div>

        )
    }


}
export default withRouter(Booking);
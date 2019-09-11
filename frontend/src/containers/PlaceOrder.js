import React, { Component } from "react";
import {Mutation} from "react-apollo";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import "../styles/styles.css";
import {Place_Order} from "../graphql/Mutations";

export default class PlaceOrder extends Component {
    constructor(props){
        super(props);

        this.state = {
            itemName:"",
            price:"",
            vendorName:"",
            size:"",
            deliveryMethod:"",
            deliveryCost:"",
            orderTotal:""
        }
    }
render() {
    const {
        itemName,
        price,
        vendorName,
        size,
        deliveryMethod,
        deliveryCost,
        orderTotal
      } = this.state
    return (
      <div className="Home">
        <div className="landingPage">
            <h1>Place Order</h1>
            <h3>GraphQL - Place Order Mutation</h3>
                <Row>
                    <Col xs={6} md={4}>
                    </Col>
                    <Col xs={6} md={4}>
                        <h5><u>Output</u></h5>
                    </Col>
                    <Col xs={6} md={4}>
                    </Col>
                </Row>
        </div>
        <div>
            <Mutation variables={{
                        itemName,
                        price,
                        vendorName,
                        size,
                        deliveryMethod,
                        deliveryCost,
                        orderTotal
                        }}
                mutation={Place_Order}
            >
                {(order, {error, loading, data, called}) => {
                    if(called && data){
                        return (
                            <div>
                                Well done you've placed your order.
                            </div>
                        )
                    } else {
                        return(
                            <div>
                                <Container className="placeOrder-form-container">
                                    <Form
                                        onSubmit={ async e => {
                                            e.preventDefault();
                                            await order();
                                            }
                                        }
                                    >
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formItemSelect">
                                                <Form.Label>Items</Form.Label>
                                                    <Form.Control required as="select"
                                                        value={ itemName }
                                                        onChange={ e => this.setState({ itemName: e.target.value }) }
                                                    >
                                                        <option>Choose...</option>
                                                        <option>Rum Sprinkles</option>
                                                        <option>Cheese Nuggets</option>
                                                        <option>Big Mac</option>
                                                        <option>Wings</option>
                                                        <option>Fold-Over</option>
                                                    </Form.Control>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group>
                                                <Form.Label as={ Col } controlId="formVendorName">Vendor Name</Form.Label>
                                                    <Form.Control required as="select"
                                                        value={ vendorName }
                                                        onChange={ e => this.setState({ vendorName: e.target.value }) }
                                                    >
                                                        <option>KFC</option>
                                                        <option>McDonalds</option>
                                                        <option>South by North-West</option>
                                                    </Form.Control>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group>
                                                <Form.Label as={Col} controlId="formMealSize">Meal Size</Form.Label>
                                                    <Form.Control required as="select"
                                                        value={ size }
                                                        onChange={ e => this.setState({ size: e.target.value }) }
                                                    >
                                                        <option>Small</option>
                                                        <option>Medium</option>
                                                        <option>Large</option>
                                                    </Form.Control>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group>
                                                <Form.Label as={ Col } controlId="formMenuItemPrice">Menu Item Price</Form.Label>
                                                    <Form.Control required type="number" placeholder="Price of Menu Item" 
                                                        value={ price }
                                                        onChange={ e => this.setState({ price: e.target.value }) }
                                                    />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group>
                                                <Form.Label as={ Col } controlId="formDeliveryMethod">Delivery Method</Form.Label>
                                                    <Form.Control required as="select"
                                                        value={ deliveryMethod }
                                                        onChange={ e => this.setState({ deliveryMethod: e.target.value }) }
                                                    >
                                                        <option>Delivery</option>
                                                        <option>Pick-Up</option>
                                                    </Form.Control>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group>
                                                <Form.Label>Delivery Cost</Form.Label>
                                                    <Form.Control required type="number" placeholder="Cost of Delivery"
                                                        value={ deliveryCost }
                                                        onChange={ e => this.setState({ deliveryCost: e.target.value }) }
                                                    />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group>
                                                <Form.Label>Order Total</Form.Label>
                                                    <Form.Control required type="number" placeholder="Order Total" 
                                                        value={ orderTotal }
                                                        onChange={ e => this.setState({ orderTotal: e.target.value }) }
                                                    />
                                            </Form.Group>
                                        </Form.Row>
                                        <Button variant="primary" type="submit">
                                            Place Order
                                        </Button>
                                    </Form>
                                </Container>
                            </div>
                        )
                    }
                }}
            </Mutation>
        </div>
      </div>
    );
  }
}

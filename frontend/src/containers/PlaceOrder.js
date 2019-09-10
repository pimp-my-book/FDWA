import React, { Component } from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";
import "../styles/styles.css";

export default class PlaceOrder extends Component {
  render() {
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
            <Container className="placeOrder-form-container">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formItemSelect">
                            <Form.Label>Items</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>Rum Sprinkles</option>
                                <option>Cheese Nuggets</option>
                                <option>Big Mac</option>
                                <option>Wings</option>
                                <option>Fold-Over</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label as={Col} controlId="formMealSize">Meal Size</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>Delivery Cost</Form.Label>
                            <Form.Control type="text" placeholder="Cost of Delivery"/>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>Order Total</Form.Label>
                            <Form.Control type="text" placeholder="Order Total" />
                    </Form.Row>
                    <Form.Row>
                        <Form.Check label="Delivery" type="radio" id="01-inline-deliveryMethod" />
                        <Form.Check label="Pick-Up" type="radio" id="02-inline-deliveryMethod" />
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Place Order
                    </Button>
                </Form>
            </Container>
        </div>
        <div>
            PRINT SELECTED ITEMS HERE -_-
        </div>
      </div>
    );
  }
}

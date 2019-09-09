import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";

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

        </div>
      </div>
    );
  }
}

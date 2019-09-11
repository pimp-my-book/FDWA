import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import "../styles/styles.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="landingPage">
          <h1>Pimp My Book</h1>
          <h3>Food Delivery Web Application</h3>
          <h4>[GraphQL - Frontend Test Suite]</h4>
            <Row>
              <Col xs={6} md={4}>
              </Col>
              <Col xs={6} md={4}>
                <ButtonToolbar className="homeButtonToolbar">
                    <Link to="/queries/helloWorld">
                      <Button bsStyle="primary">Hello World</Button>
                    </Link>
                </ButtonToolbar>
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
              </Col>
              <Col xs={6} md={4}>
                <ButtonToolbar className="homeButtonToolbar">
                    <Link to="/queries/getAllItems">
                      <Button bsStyle="primary">Get All Items</Button>
                    </Link>
                </ButtonToolbar>
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
              </Col>
              <Col xs={6} md={4}>
                <ButtonToolbar className="homeButtonToolbar">
                  <Link to="/mutations/placeOrder">
                    <Button bsStyle="primary">Place Order</Button>
                  </Link>
                </ButtonToolbar>
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
              </Col>
              <Col xs={6} md={4}>
                <ButtonToolbar className="homeButtonToolbar">
                  <Link to="/login">
                    <Button bsStyle="primary">Login</Button>
                  </Link>
                </ButtonToolbar>
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Button, Col, Row } from 'react-bootstrap';
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
              <Col className="personal-space" xs={6} md={4}>
                <Button variant="primary" href="/queries/helloWorld">
                  Hello World
                </Button>
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
              </Col>
              <Col className="personal-space" xs={6} md={4}>
                <Button variant="primary" href="/queries/getAllItems">
                  Get All Items
                </Button>
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
              </Col>
              <Col className="personal-space" xs={6} md={4}>
                <Button variant="primary" href="/mutations/placeOrder">
                  Place Order
                </Button>
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
              </Col>
              <Col className="personal-space" xs={6} md={4}>
                <Button variant="primary" href="/login">
                  Login
                </Button>
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import HelloWorld from "../components/HelloWorld";
import "../styles/styles.css";

export default class helloWorldQuery extends Component {
  render() {
    return (
      <div className="Home">
        <div className="landingPage">
          <h1>Hello World</h1>
          <h3>GraphQL - Hello World Query</h3>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                </Col>
                <Col xs={6} md={4}>
                  <h5><u>Output</u></h5>
                </Col>
                <Col xs={6} md={4}>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={4}>
                </Col>
                <Col xs={6} md={4}>
                  <HelloWorld />
                </Col>
                <Col xs={6} md={4}>
                </Col>
              </Row>
            </Container>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Button, ButtonToolbar, Grid, Col, Row } from 'react-bootstrap';
import "../styles/styles.css";

export default class helloWorld extends Component {
  render() {
    return (
      <div className="Home">
        <div className="landingPage">
          <h1>Hello World</h1>
          <h3>GraphQL - Hello World Query</h3>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
              </Col>
              <Col xs={6} md={4}>

              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

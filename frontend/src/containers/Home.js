import React, { Component } from "react";
import { Button, ButtonToolbar, Grid, Col, Row } from 'react-bootstrap';
import "../styles/styles.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="landingPage">
          <h1>Pimp My Book</h1>
          <h3>Food Delivery Web Application [GraphQL - Test Suite]</h3>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
              </Col>
              <Col xs={6} md={4}>
                <ButtonToolbar classname=".homeButtonToolbar">
                  <Button bsStyle="primary" bsStyle="primary">Queries</Button>
                  <Button bsStyle="primary" bsStyle="primary">Mutations</Button>
                </ButtonToolbar>
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

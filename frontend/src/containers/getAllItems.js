import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { GET_ALL_ITEMS } from "../graphql/Queries";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/styles.css";

export default class GetAllItems extends Component {
  render() {
    return (
      <div className="Home">
        <div className="landingPage">
          <h1>Get All Items</h1>
          <h3>GraphQL - Get All Items Query</h3>
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
                  <Query query={ GET_ALL_ITEMS }>
                    {({ data, loading, error }) => {
                      if (loading) return <div>Fetching</div>;
                      if (error) return <div>Error</div>;
                      const allItems = data.getAllItems;
                      console.log(allItems);
                      return(
                        null
                      );
                      }
                    }
                  </Query>
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

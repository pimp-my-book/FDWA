import React, { Component, Fragment } from "react";
import { Button, ButtonToolbar, Grid, Col, Row } from "react-bootstrap";
import { Query } from "react-apollo";
import { helloWorld } from "../graphql/Queries";
import alertComponent from "../components/alertComponent";
import "../styles/styles.css";

export default class helloWorldQuery extends Component {
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
                <h5><u>Output</u></h5>
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={4}>
              </Col>
              <Col xs={6} md={4}>
                <Query query={ helloWorld }>
                  {
                    ({ data, loading, error }) => {
                      // On load [Display Heading]
                      if (loading) return (
                        <Grid>
                          <Row>
                            <Col>
                              <h6>loading...</h6>
                            </Col>
                          </Row>
                        </Grid>
                      );

                      // On query fail [Print Error]
                      if (error) return (
                        <Fragment>
                          <alertComponent text = { error.message.replace("GraphQL Error:", "") } variant="danger" />
                        </Fragment>
                      );

                      //

                    }
                  }
                </Query>
                />
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

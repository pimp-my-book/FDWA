import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { GET_ALL_ITEMS } from "../graphql/Queries";
import {  Col, Row } from "react-bootstrap";
import ItemCard from "../components/ItemCard";
import styled from "styled-components";
import "../styles/styles.css";

export default class GetAllItems extends Component {
  render() {
    const itemName = styled.div `
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat( 2, 3fr );
    `;
    return (
      <div className="Home">
        <div className="landingPage">
          <h1>Get All Items</h1>
          <h3>GraphQL - Get All Items Query</h3>
           
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
                      if (error) return <div>{Error}</div>;
                      console.log(error)
                      const allItems = data.getAllItems;
                      console.log(allItems);
                      return(
                        <Fragment>
                          {allItems.map((items) => (
                            <Fragment  key={ items.pk }>
                             <ItemCard
                              vendorName={ items.vendorName } 
                              itemName={ items.itemName }
                              itemPrice={ items.price }
                              mealSize={ items.size } />
                             </Fragment>
                          ))}
                          
                        </Fragment>
                      );
                      }
                    }
                  </Query>
                </Col>
                <Col xs={6} md={4}>
                </Col>
              </Row>
            
        </div>
      </div>
    );
  }
}

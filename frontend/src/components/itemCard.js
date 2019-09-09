import React from "react";
import styled from "styled-components";
import Heading from "./typography/Heading";
import { Card, Container, Row, Col } from "react-bootstrap";

const CardStyles = styled(Card) `
  &&& {
    width: 300px;
    height: 150px;
    padding: 5%;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
    background-color: white;
    }
  }
`;

const ItemCard = ({
  vendorName,
  itemName,
  itemPrice,
  mealSize,

  ...props
}) => {
  return(
    <CardStyles { ...props }>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Heading>{ itemName }</Heading>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>
                Price: R{ itemPrice }
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>
                Vendor Name: { vendorName }
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>
                Meal Size: { mealSize }
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </CardStyles>
  )
}

export default ItemCard;

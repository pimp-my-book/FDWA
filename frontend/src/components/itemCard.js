import React from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";
import Heading from "./typography/Heading";
import { Card, Container, Row, Col } from "react-bootstrap";

const CardStyles = styled(Card) `
  &&& {
    width:450px;
    height: 300px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
    background-color: white;

    @media (max-width: 600px){
      width:350px;
    }
  }
`;

const itemCard = ({
  itemName,

  ...props
}) => {
  return(
    <CardStyles { ...props }>
      <Card.Body className="text-align-center justify-content-center">
        <Container>
          <Row className="justify-content-end">
            <Col>
              <Heading>{ itemName }</Heading>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </CardStyles>
  )
}

export default itemCard;

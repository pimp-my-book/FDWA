import React, { Components, useState } from "react";
import Auth from "@aws-amplify/auth";
import { Button, Form, Container, Col, Row } from "react-bootstrap";

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmationCode, setConfirmationCode ] = useState("");
    const [ newUser, setNewUser ] = useState(null);

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const newUser = await Auth.signUp(username, password);
            console.log(newUser);
            setNewUser(newUser)
        }
        catch (e) {
            alert(e.message)
        }
    }

    const handleConfirmationSubmit = async event => {
        event.preventDefault();

        try {
            await Auth.confirmSignUp(username, confirmationCode);
            await Auth.signIn(username, password)
        }
        catch (e) {
            alert(e.message)
        }
    }

    const renderForm = () => {
        return(
          <Container>
              <Row>
                  <Col>
                    <div>
                        Sign Up
                    </div>
                  </Col>
              </Row>
              <Row>
                  <Form onSubmit={ this.handleSubmit }>
                    <Form.Row>
                        <Form.Group controlId="sign-up-email">
                            <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Please enter your email address here..."
                                    value={ this.username }
                                    onChange = { e => setUsername( e.target.value ) }
                                />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="sign-up-password">
                            <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Please enter your password here..."
                                    value={ this.password }
                                    onChange = { e => setPassword( e.target.value ) }
                                />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="sign-up-password">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form.Row>
                  </Form>
              </Row>
          </Container>  
        );
    }

import React, { useState } from "react";
import Auth from "@aws-amplify/auth";
import { Button, Form, Container, Col, Row } from "react-bootstrap";

const SignUp = ( ) => {
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

    const RenderForm = () => {
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
                  <Form onSubmit={ handleSubmit }>
                    <Form.Row>
                        <Form.Group controlId="sign-up-email">
                            <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Please enter your email address here..."
                                    value={ username }
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
                                    value={ password }
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

    const RenderConfirmationForm = () => {
        return(
            <Container>
                <Row>
                  <Col>
                    <div>
                        Confirmation Code
                    </div>
                  </Col>
              </Row>
              <Row>
                  <Form onSubmit={ handleConfirmationSubmit }>
                      <Form.Row>
                          <Form.Group controlId="confirmation-code-input">
                              <Form.Label>We've sent a Confirmation Code to your Email Address -_-</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Please enter your Code here..."
                                    value={ confirmationCode }
                                    onChange={ e => setConfirmationCode( e.target.value ) }
                                />
                          </Form.Group>
                      </Form.Row>
                      <Form.Row>
                          <Form.Group controlId="confirmation-code-button">
                              <Button variant="primary" type="submit">
                                  Confirm Your Code
                              </Button>
                          </Form.Group>
                      </Form.Row>
                  </Form>
              </Row>
            </Container>
        );
    }

    return (
        <div>
            {
                newUser === null
                ? RenderForm()
                : RenderConfirmationForm()
            }
        </div>
    );
}

export default SignUp

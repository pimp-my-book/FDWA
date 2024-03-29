import React, { Component } from "react";
import Auth from "@aws-amplify/auth";
import { Button, Form, Container, Col, Row } from "react-bootstrap";

export default class ForgottenPassword extends Component {
    constructor(props){
		super(props);

        this.state = {
            email: "",
            code: "",
            password: "",
            codeSent: false,
            confirmed: false, 
            confirmPassword: "",
            isConfirming: false,
            isSendingCode: false,
            emailError: "",
            confirmError: ""
        };
    }

    validateCodeForm() {
        return this.state.email.length > 0;
    }

    validateResetForm() {
        return (
            this.state.code.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    handleChange = event => {
        this.setState({
            [ event.target.id ]: event.target.value
        });
    }

    handleSendCodeClick = async event => {
        event.preventDefault();
        this.setState({ isSendingCode: true });
        try {
            await Auth.forgotPassword( this.state.email );
            this.setState({ codeSent: true });
        }
        catch (e) {
            this.setState({ emailError: e.message, isSendingCode: false });
        }
    }

    handleConfirmClick = async event => {
        event.preventDefault();
        this.setState({ isConfirming: true });
        try {
            await Auth.forgotPasswordSubmit(
                this.state.email,
                this.state.code,
                this.state.password
            );
            this.setState({ confirmed: true });
        }
        catch (e) {
            alert(e.message);
            this.setState({ confirmError: e.message, isConfirming: false });
        }
    }

    renderRequestCodeForm() {
        return (
            <Container>
                <Row>
                    <Col sm={6} lg={4}>
                        <div>Reset Password</div>
                        <Form onSubmit={ this.handleSendCodeClick }>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        required
                                        placeholder="Enter email here..."
                                        type="email"
                                        value={ this.state.email }
                                        onChange={ this.handleChange }
                                    />
                            </Form.Group>
                                <Button variant="primary" type="submit">
                                    Send Reset Code
                                </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

    renderConfirmationForm() {
        return(
            <Container>
                <Row>
                    <Col sm={6} lg={4}>
                        <div>Confirmation Form</div>
                        <Form onSubmit={ this.handleConfirmClick }>
                            <Form.Group controlId="code">
                                <Form.Label>Confirmation Code</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        value={ this.state.code }
                                        onChange={ this.handleChange }
                                    />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={ this.state.password }
                                        onChange={ this.handleChange }
                                    />
                            </Form.Group>
                            <Form.Group controlId="confirmPassword">
                                <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={ this.state.confirmPassword }
                                        onChange={ this.handleChange }
                                    />
                            </Form.Group>
                                <Button variant="primary" type="submit">
                                    Confirm
                                </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

    renderSuccessMessage() {
        return(
            <Container>
                <Row>
                    <Col sm={6} lg={4}>
                        <div>Your password has been changed (woopidy doodaa -_-)</div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} lg={4}>
                        <Button variant="primary" href="/login">
                            Login
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }

    render() {
        return(
            <div>
                {
                    !this.state.codeSent
                    ? this.renderRequestCodeForm()
                    : !this.state.confirmed
                    ? this.renderConfirmationForm()
                    : this.renderSuccessMessage()
                }
            </div>
        );
    }
}
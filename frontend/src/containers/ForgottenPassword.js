import React, { Component } from "react";
import { Auth } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
import { validate } from "@babel/types";

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


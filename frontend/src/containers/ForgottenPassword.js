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

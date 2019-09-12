import React, { Components, useState } from "react";
import Auth from "@aws-amplify/auth";
import { Button, Form, Container, Col, Row } from "react-bootstrap";

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

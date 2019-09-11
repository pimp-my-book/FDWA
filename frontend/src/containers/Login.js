import React, { useState } from "react";
import Auth from "aws-amplify";
import { Button, Form, Container, Col } from "react-bootstrap";
import "../styles/styles.css";

const Login = ({  }) => {

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await Auth.signIn(email, password)
        }
        catch (e) {
            console.log(e)
        }
    }

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    return(
        <div>
            <Container className="auth-form-container">
                <Form 
                    onSubmit = { handleSubmit }
                >
                    <Form.Row>
                        <Form.Group>
                            <Form.Label as={ Col } controlId="formAuthEmail">Email</Form.Label>
                                <Form.Control type="text" placeholder="Email address here..."
                                    value = { email }
                                    onChange = { e => setEmail( e.target.value ) }
                                />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label as={ Col } controlId="formAuthPassword">Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password here..."
                                    value = { password }
                                    onChange = { e => setPassword( e.target.value ) }
                                />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
        </div>
    );
}

export default Login
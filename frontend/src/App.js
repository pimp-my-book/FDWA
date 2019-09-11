import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap";
import Routes from "./Routes";
import './styles/styles.css';
import { Auth } from "aws-amplify";

class App extends Component {
  constructor( props ) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAuthenticating: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated:authenticated })
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.state.userHasAuthenticated
    }

    return(
      <div className="appContainer">
        <Navbar fluid collapseOnSelect>
          
            <Navbar.Brand>
              <Link to="/"><span role="img" aria-label="Pizza">🍕</span></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;

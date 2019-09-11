import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Routes from "./Routes";
import './styles/styles.css';

class App extends Component {
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

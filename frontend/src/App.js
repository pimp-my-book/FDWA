import React, { Component } from "react";
import { Auth } from "aws-amplify";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Routes from "./Routes";
import './styles/styles.css';

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

  handleLogout = async event => {
    try {
      await Auth.signOut();
      this.userHasAuthenticated(false);
      alert("Logged out")
    }
    catch (e) {
      console.log(e)
    }
  }

  async componentDidMount() {
    try {
      await Auth.currentSession()
      .then( this.userHasAuthenticated(true) )
    }
    catch (e) {
      if (e !== 'No Current User!') {
        console.log(e)
      }
    }
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.state.userHasAuthenticated
    }

    return(
      <div>
        <Navbar className="App-Navbar" bg="primary" variant="dark">
          <Button variant="primary" href="/login">Login</Button>
          <Navbar.Brand href="/"><span role="img" aria-label="Pizza">🍕</span></Navbar.Brand>
          <Button onClick={ this.handleLogout }>Logout</Button>
        </Navbar>
        <Routes childProps={ childProps }/>
      </div>
    );
  }
}

export default App;

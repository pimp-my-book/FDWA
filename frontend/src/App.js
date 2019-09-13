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
      <div className="appContainer">
        <Navbar fluid collapseOnSelect>
            <Navbar.Brand>
              <Link to="/"><span role="img" aria-label="Pizza">🍕</span></Link>
                <Button onClick={ this.handleLogout }>Logout</Button>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar>
        <Routes childProps={ childProps }/>
      </div>
    );
  }
}

export default App;

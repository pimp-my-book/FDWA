import React, { Component } from "react";
import { Query } from "react-apollo";
import { HELLO_WORLD } from "../graphql/Queries";

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <Query query={ HELLO_WORLD }>
          {({error, loading, data}) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;
            const returnValue = data.hello
            return(
              <div>
                { returnValue }
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default HelloWorld

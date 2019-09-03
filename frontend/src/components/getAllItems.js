import React, { Component } from "react";
import { Query } from "react-apollo";
import { helloWorld, GET_ALL_ITEMS } from "../graphql/Queries";

class getAllItems extends Component {
  render() {
    return (
      <div>
        <Query query={ GET_ALL_ITEMS }>
          {({error, loading, data}) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;
            const returnValue = data.pk
            return(
              <div>
                {returnValue}
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default getAllItems

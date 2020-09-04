import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Header from "./header.component";

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainer = ({ match }) => {
  return (
    <div>
      <Query
        query={GET_CART_HIDDEN}
      >
        {({ data: {cartHidden} }) => {
          return <Header hidden={cartHidden} />;
        }}
      </Query>
    </div>
  );
};

export default HeaderContainer;

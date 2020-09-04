import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from "../../components/collections-overview/collectionsOverviewContainer";
import ColectionContainer from "../collection/colection.container";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route
      exact
      path={`${match.path}`}
      component={CollectionsOverviewContainer}
    />
    <Route
      path={`${match.path}/:collectionId`}
      component={ColectionContainer}
    />
  </div>
);

export default ShopPage;

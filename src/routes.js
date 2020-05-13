/* eslint-disable */
import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import TwitterDashboard from './containers/twitter';
import Snackbar from './containers/snackbar/snackbar'

const history = createBrowserHistory();

history.listen(location => {
  pushClevertapEvents(location.pathname);
});

const Routes = () => {
  return (
    <>
      <Snackbar />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={TwitterDashboard} />
          <Route exact path="/dashboard" component={TwitterDashboard} />
        </Switch>
      </Router>

    </>
  )
}

export default Routes;

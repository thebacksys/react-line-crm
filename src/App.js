import React from "react";
import { Container } from "@material-ui/core";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import * as registerActions from "./actions/register.action";

const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      registerActions.isRegister() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/register" />
      )
    }
  />
);

export default function App() {
  return (
    <>
      <Router>
        <main>
          <Container style={{ display: "flex", justifyContent: "center" }}>
            <Switch>
              <Route path="/register" component={Register} />
              <SecuredRoute path="/" component={Home} />
            </Switch>
          </Container>
        </main>
      </Router>
    </>
  );
}

import React from "react";
import { Container } from "@material-ui/core";
import Login from "./components/pages/Login";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import * as loginActions from "./actions/login.action";

// Protected Route
const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // ternary condition
      loginActions.isLoggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // ternary condition
      loginActions.isLoggedIn() ? <Redirect to="/home" /> : <Login {...props} />
    }
  />
);

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loginActions.reLogin());
  }, [dispatch]);

  const loginReducer = useSelector(({ loginReducer }) => loginReducer);

  return (
    <>
      <Router>
        <main>
          <Container style={{ display: "flex", justifyContent: "center" }}>
            <Switch>
              <LoginRoute path="/login" component={Login} />
              <Route
                exact={true}
                path="/"
                component={() => <Redirect to="/login" />}
              />
            </Switch>
          </Container>
        </main>
      </Router>
    </>
  );
}

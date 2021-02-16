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

import { isRegister } from "./actions/register.action";

export default function App() {
  return (
    <>
      <Router>
        <main>
          <Container style={{ display: "flex", justifyContent: "center" }}>
            <Switch>
              <Route path="/" component={Register} />
            </Switch>
          </Container>
        </main>
      </Router>
    </>
  );
}

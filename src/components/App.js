import Database from "../views/database";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom"
import Login from "../views/login";
import React from "react";
import SignUp from "../views/signup";
import { AuthProvider } from "../context/AuthContext"
import PrivateRoute from "./PrivateRoute"

export default function App() {
  return (
    <Router>
      <AuthProvider>
          <Switch>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Database} />
          </Switch>
      </AuthProvider>
    </Router>
  );
}

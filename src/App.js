import "./App.css";
import Database from "./views/database";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./views/login";
import React from "react";
import SignUp from "./views/signup";
import { ProtectedRoute } from "./ProtectedRoute"
import { AuthContext, useAuthMethods } from "./Auth";

export default function App() {
  const [state, dispatch] = useAuthMethods();
  return (
    <AuthContext.Provider value={[status, dispatch]}>
      <Router>
        <Switch>
			<Route path="/sign-up">
				<SignUp />
			</Route>
			<Route path="/">
				<Login />
			</Route>
			<ProtectedRoute path="/database">
				
			</ProtectedRoute>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

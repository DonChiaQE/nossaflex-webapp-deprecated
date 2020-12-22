import React from "react";
import Button from "../components/buttons";
import "../styles/colors.css";
import "../styles/login.css";
import useMethods from "use-methods";
import { Link } from "react-router-dom";

const app = {
  initialState: {
    email: "",
    password: ""
  },
  reducer: (state) => ({
    setEmail(userEmail) {
      state.email = userEmail;
    },
    setPassword(userPassword) {
      state.password = userPassword;
    }
  })
};

function Login() {
  const [state, dispatch] = useMethods(app.reducer, app.initialState);
  return (
    <div id="duomo-root" className="vstack space-12">
      <div className="text-64 text-color weight-900">nossaflex. db</div>
      <form className="vstack w-448 align-start space-16 border-1 border-black rounded-5 px-16 py-24 background">
        <div className="vstack space-4 align-start">
          <div className="weight-200 text-14 px-4 text-color">email.</div>
          <input
            onChange={(e) => dispatch.setEmail(e.target.value)}
            value={state.email}
            type="text"
            className="weight-300 text-18 background px-4 text-color textfield"
            placeholder="enter email"
          />
        </div>
        <div className="vstack space-4 align-start">
          <div className="weight-200 text-14 px-4 text-color">password.</div>
          <input
            onChange={(e) => dispatch.setPassword(e.target.value)}
            value={state.password}
            type="password"
            className="weight-300 text-18 background px-4 text-color textfield"
            placeholder="password"
          />
        </div>
      </form>
      <div className="vstack space-12 align-start  w-448">
        <Button buttonText="log in." highlightColor="var(--pink-highlight)" />
        <Button
          buttonText="log in with google."
          highlightColor="var(--blue-highlight)"
        />
        <div className="text-color light">
          Don't have an account? <Link to="/sign-up">Sign Up.</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

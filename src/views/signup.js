
import React from "react";
import Button from "../components/buttons";
import "../styles/colors.css";
import "../styles/login.css";
import useMethods from 'use-methods';
import { BrowserRouter as Link, Router, Switch, Route, Redirect } from "react-router-dom"

const app = {
	initialState: {
		email: "",
		password: "",
	},
	reducer: state => ({
        setEmail(userEmail) {
			state.email = userEmail
        },
        setPassword(userPassword) {
			state.password = userPassword
		},
	}),
}

function SignUp() {
    return (
        <div id="duomo-root" className="vstack space-12">
            <div className="black text-64 text-color weight-900">nossaflex. db</div>
            <form className="vstack w-448 space-16 border-1 border-black rounded-5 py-24 background">
                    <div className="hstack">
                        <div className="vstack space-4 align-start">
                            <div className="weight-200 text-14 px-4 text-color">first name.</div>
                            <input type="text" className="weight-300 text-18 background px-4 text-color textfield" placeholder="enter first name"/>
                        </div>
                        <div className="vstack space-4 align-start">
                            <div className="weight-200 text-14 px-4 text-color">last name.</div>
                            <input type="text" className="weight-300 text-18 background px-4 text-color textfield" placeholder="enter last name"/>
                        </div>
                    </div>
                    <div className="hstack">
                        <div className="vstack space-4 align-start px-28">
                            <div className="weight-200 text-14 px-4 text-color">email.</div>
                            <input type="text" className="weight-300 text-18 background px-4 text-color textfield" placeholder="enter email"/>
                        </div>
                        <div className="spacer"></div>
                    </div>
                    <div className="hstack">
                        <div className="vstack space-4 align-start">
                            <div className="weight-200 text-14 px-4 text-color">password.</div>
                            <input type="text" className="weight-300 text-18 background px-4 text-color textfield" placeholder="enter password"/>
                        </div>
                        <div className="vstack space-4 align-start">
                            <div className="weight-200 text-14 px-4 text-color">confirm password.</div>
                            <input type="text" className="weight-300 text-18 background px-4 text-color textfield" placeholder="confirm password"/>
                        </div>
                    </div>
            </form>
            <div className="vstack space-12 align-start  w-448">
                <Button buttonText="log in." highlightColor="var(--pink-highlight)"/>
                <Button buttonText="log in with google." highlightColor="var(--blue-highlight)"/>
                <div className="text-color light">Already have an account? <Link to="/login">Login</Link></div>
            </div>
        </div>
	)
}

export default SignUp;
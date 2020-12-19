import "@zaydek/duomo"
import React from "react";
import Button from "./buttons";
import "../styles/colors.css";
import "../styles/login.css";
import useMethods from 'use-methods';

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

function Login() {
    return (
        <div id="duomo-root" className="vstack background grid-color space-12">
            <div className="black text-64 text-color">nossaflex. db</div>
            <form className="vstack w-448 align-start space-16 border-1 border-black rounded-5 px-16 py-24 background">
                
                    <div className="vstack space-4 align-start">
                        <div className="thin text-14 px-4 text-color">email.</div>
                        <input type="text" className="light text-18 background px-4 text-color textfield" placeholder="enter email"/>
                    </div>
                    <div className="vstack space-4 align-start">
                        <div className="thin text-14 px-4 text-color">password.</div>
                        <input type="text" className="light text-18 background px-4 text-color textfield" placeholder="password"/>
                    </div>
                
            </form>
            <div className="vstack space-12 align-start  w-448">
                <Button buttonText="log in." highlightColor="red"/>
                <Button buttonText="log in with google." highlightColor="red"/>
                <div className="text-color light">Don't have an account? <u>Sign Up.</u></div>
            </div>
        </div>
	)
}

export default Login;
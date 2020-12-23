import Button from "../components/buttons";
import "../styles/colors.css";
import "../styles/login.css";
import React, {useRef, useState} from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const firstName = useRef()
    const lastName = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault() 

        if (passwordRef.current.value !== 
            passwordConfirmRef.current.value) {
            return setError("Password do not match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }
  return (
    <form onSubmit={handleSubmit}>
    <div id="duomo-root" className="vstack space-12">
      <div className="black text-64 text-color weight-900">nossaflex. db</div>
      <form className="vstack w-448 space-16 border-1 border-black rounded-5 py-24 background">
        <div className="hstack">
          <div className="vstack space-4 align-start">
            <div className="weight-200 text-14 px-4 text-color">
              first name.
            </div>
            <input
              type="text"
              className="weight-300 text-18 background px-4 text-color textfield"
              placeholder="enter first name"
              ref={firstName}
            />
          </div>
          <div className="vstack space-4 align-start">
            <div className="weight-200 text-14 px-4 text-color">last name.</div>
            <input
              type="text"
              className="weight-300 text-18 background px-4 text-color textfield"
              placeholder="enter last name"
              ref={lastName}
            />
          </div>
        </div>
        <div className="hstack">
          <div className="vstack space-4 align-start px-28">
            <div className="weight-200 text-14 px-4 text-color">email.</div>
            <input
              type="text"
              className="weight-300 text-18 background px-4 text-color textfield"
              placeholder="enter email"
              ref={emailRef}
            />
          </div>
          <div className="spacer"></div>
        </div>
        <div className="hstack">
          <div className="vstack space-4 align-start">
            <div className="weight-200 text-14 px-4 text-color">password.</div>
            <input
              type="text"
              className="weight-300 text-18 background px-4 text-color textfield"
              placeholder="enter password"
              ref={passwordRef}
            />
          </div>
          <div className="vstack space-4 align-start">
            <div className="weight-200 text-14 px-4 text-color">
              confirm password.
            </div>
            <input
              type="text"
              className="weight-300 text-18 background px-4 text-color textfield"
              placeholder="confirm password"
              ref={passwordConfirmRef}
            />
          </div>
        </div>
      </form>
      <div className="vstack space-12 align-start  w-448">
        <Button buttonText="log in." highlightColor="var(--pink-highlight)" />
        <Button
          buttonText="log in with google."
          highlightColor="var(--blue-highlight)"
        />
        <div className="text-color light">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
    </form>
  );
}

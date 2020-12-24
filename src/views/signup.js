import Buttons from "../components/buttons";
import "../styles/colors.css";
import "../styles/login.css";
import React, {useRef, useState, reload} from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import firebase from 'firebase/app';
import 'firebase/auth';

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const firstName = useRef()
    const lastName = useRef()

    const emailRefMd = useRef()
    const passwordRefMd = useRef()
    const passwordConfirmRefMd = useRef()
    const firstNameMd = useRef()
    const lastNameMd = useRef()

    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const provider = new firebase.auth.GoogleAuthProvider();

    async function handleSubmit(e) {
        e.preventDefault() 

        if (passwordRef.current.value !== 
            passwordConfirmRef.current.value) {
            return setError("Password do not match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value (firstName.current.value + "" + lastName.current.value) )
            history.push('/')
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    async function handleSubmitMd(e) {
      e.preventDefault() 

      if (passwordRef.current.value !== 
          passwordConfirmRef.current.value) {
          return setError("Password do not match")
      }

      try {
          setError('')
          setLoading(true)
          await signup(emailRefMd.current.value, passwordRefMd.current.value, (firstNameMd.current.value + "" + lastNameMd.current.value) )
          history.push('/')
      } catch {
          setError("Failed to create an account")
      }

      setLoading(false)
  }

    async function handleGoogleSubmit(e) {
      e.preventDefault() 
  
      try {
          setError('')
          setLoading(true)
          await firebase.auth().signInWithPopup(provider)
          history.push('/')
      } catch {
          setError("Failed to sign in")
      }
  
      setLoading(false)
    } 
  return (
    <div id="duomo-root" className="vstack space-12 screen">
      <div className="black text-48 md:text-64 text-color weight-900 px-24">nossaflex. db</div>
      <div className="px-24 w-full unhidden md:hidden">
      <div className="vstack space-16 border-1 border-black rounded-5 py-24 background ">
        <div className="px-16">
        <div className="hstack py-8">
          <div className="vstack space-4 align-start">
            <div className="weight-200 text-14 text-color">
              first name.
            </div>
            <input
              className="weight-300 text-18 background text-color textfield w-full"
              placeholder="enter first name"
              type="text"
              ref={firstName}
            />
          </div>
          <div className="vstack space-4 align-start">
            <div className="weight-200 text-14 text-color">last name.</div>
            <input
              className="weight-300 text-18 background text-color textfield w-full"
              placeholder="enter last name"
              type="text"
              ref={lastName}
            />
          </div>
        </div>
        <div className="hstack py-8">
          <div className="vstack space-4 align-start">
            <div className="weight-200 text-14 text-color">email.</div>
            <input
              className="weight-300 text-18 background text-color textfield w-full"
              placeholder="enter email"
              type="email"
              ref={emailRef}
            />
          </div>
          <div className="spacer"></div>
        </div>
        <div className="hstack py-8">
          <div className="vstack space-4 align-start">
            <div className="weight-200 text-14 text-color">password.</div>
            <input
              className="weight-300 text-18 background text-color textfield w-full"
              placeholder="enter password"
              type="password"
              ref={passwordRef}
            />
          </div>
          <div className="vstack space-4 align-start">
            <div className="weight-200 text-14 text-color">
              confirm password.
            </div>
            <input
              className="weight-300 text-18 background text-color textfield w-full"
              placeholder="confirm password"
              type="password"
              ref={passwordConfirmRef}
            />
          </div>
        </div>
        </div>
      </div>
      </div>

      <div className="px-24 hidden md:unhidden">
      <div className="vstack w-448 space-16 border-1 border-black rounded-5 py-24 background hidden md:unhidden">
        <div className="hstack">
          <div className="vstack space-4 align-start">
            <div className="weight-200 text-14 px-4 text-color">
              first name.
            </div>
            <input
              className="weight-300 text-18 background px-4 text-color textfield"
              placeholder="enter first name"
              type="text"
              ref={firstNameMd}
            />
          </div>
          <div className="vstack space-4 align-start">
            <div className="weight-200 text-14 px-4 text-color">last name.</div>
            <input
              className="weight-300 text-18 background px-4 text-color textfield"
              placeholder="enter last name"
              type="text"
              ref={lastNameMd}
            />
          </div>
        </div>
        <div className="hstack">
          <div className="vstack space-4 align-start px-28">
            <div className="weight-200 text-14 px-4 text-color">email.</div>
            <input
              className="weight-300 text-18 background px-4 text-color textfield"
              placeholder="enter email"
              type="email"
              ref={emailRefMd}
            />
          </div>
          <div className="spacer"></div>
        </div>
        <div className="hstack">
          <div className="vstack space-4 align-start">
            <div className="weight-200 text-14 px-4 text-color">password.</div>
            <input
              className="weight-300 text-18 background px-4 text-color textfield"
              placeholder="enter password"
              type="password"
              ref={passwordRefMd}
            />
          </div>
          <div className="vstack space-4 align-start">
            <div className="weight-200 text-14 px-4 text-color">
              confirm password.
            </div>
            <input
              className="weight-300 text-18 background px-4 text-color textfield"
              placeholder="confirm password"
              type="password"
              ref={passwordConfirmRefMd}
            />
          </div>
        </div>
      </div>
      </div>
      <div className="vstack space-12 w-full px-24 unhidden md:hidden">
        <form className="w-full" onSubmit={handleSubmit}>
        <Buttons 
        buttonText="sign up." 
        highlightColor="var(--pink-highlight)" 
        />
        </form>
        <form className="w-full" onSubmit={handleGoogleSubmit}>
        <Buttons
          buttonText="sign up with google."
          highlightColor="var(--blue-highlight)"
        />
        </form>
        <div className="text-color light vstack align-start">
          <div>
          Already have an account?{" "}
          <Link to="/login"><u>Login</u></Link>
          </div>
        </div>
      </div>

      <div className="vstack space-12 align-start w-448 hidden md:unhidden">
      <form onSubmit={handleSubmitMd}>
        <Buttons 
        buttonText="sign up." 
        highlightColor="var(--pink-highlight)" 
        />
        </form>
        <form onSubmit={handleGoogleSubmit}>
        <Buttons
          buttonText="sign up with google."
          highlightColor="var(--blue-highlight)"
        />
        </form>
        <div className="text-color light">
          <div>
          Already have an account?{" "}
          <Link to="/login"><u>Login</u></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, {useRef, useState} from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import Buttons from "../components/buttons"
import { signInWithGoogle } from '../firebase';
import firebase from 'firebase/app';
import 'firebase/auth';

export default function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const emailRefMd = useRef()
  const passwordRefMd = useRef()
  const { login, loginGoogle } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const provider = new firebase.auth.GoogleAuthProvider();

  async function handleSubmitMd(e) {
      e.preventDefault() 

      try {
          setError('')
          setLoading(true)
          await login(emailRefMd.current.value, passwordRefMd.current.value)
          history.push('/')
      } catch {
          setError("Failed to sign in")
      }

      setLoading(false)
  } 

  async function handleSubmit(e) {
    e.preventDefault() 

    try {
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history.push('/')
    } catch {
        setError("Failed to sign in")
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

      <div className="px-24 hidden md:unhidden">
      <div className="vstack w-448 align-start space-16 border-1 border-black rounded-5 px-16 py-24 background">
        <div className="vstack space-4 align-start">
          <div className="weight-200 text-14 px-4 text-color">email.</div>
          <input
            type="text"
            className="weight-300 text-18 background px-4 text-color textfield"
            placeholder="enter email"
            ref={emailRefMd}
          />
        </div>
        <div className="vstack space-4 align-start">
          <div className="weight-200 text-14 px-4 text-color">password.</div>
          <input
            type="password"
            className="weight-300 text-18 background px-4 text-color textfield"
            placeholder="password"
            ref={passwordRefMd}
          />
        </div>
        {error && <div className="color-red-600">{error}</div>}
      </div>
      </div>

      <div className="px-24 w-full unhidden md:hidden">
      <div className="vstack space-16 border-1 border-black rounded-5 py-24 background align-start px-16">

        <div className="vstack space-4 align-start">
          <div className="weight-200 text-14 px-4 text-color">email.</div>
          <input
            type="text"
            className="weight-300 text-18 background px-4 text-color textfield w-full"
            placeholder="enter email"
            ref={emailRef}
          />
        </div>
        <div className="vstack space-4 align-start">
          <div className="weight-200 text-14 px-4 text-color">password.</div>
          <input
            type="password"
            className="weight-300 text-18 background px-4 text-color textfield w-full"
            placeholder="password"
            ref={passwordRef}
          />
        </div>
        {error && <div className="color-red-600">{error}</div>}
        
      </div>
      </div>


      <div className="vstack space-12 align-start w-448 hidden md:unhidden">
        <form onSubmit={handleSubmitMd}>
        <Buttons 
        buttonText="log in." 
        highlightColor="var(--pink-highlight)" />
        </form>
        <form onSubmit={handleGoogleSubmit}>
        <Buttons
          buttonText="log in with google."
          highlightColor="var(--blue-highlight)"
        />
        </form>
        <div className="text-color light vstack align-start">
          <div>
          Don't have an account? <Link to="/signup"><u>Sign Up.</u></Link>
          </div>
        </div>
      </div>

      <div className="vstack space-12 w-full px-24 unhidden md:hidden">
      <form onSubmit={handleSubmit} className="w-full">
        <Buttons 
        buttonText="log in" 
        highlightColor="var(--pink-highlight)" />
        </form>
        <form onSubmit={handleGoogleSubmit} className="w-full">
        <Buttons
          buttonText="log in with google."
          highlightColor="var(--blue-highlight)"
        />
        </form>
        <div className="text-color light vstack align-start">
          <div>
          Don't have an account? <Link to="/signup"><u>Sign Up.</u></Link>
          </div>
        </div>
      </div>

    </div>
    
  );
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Firebase Authentication
import fire from '../utils/fire'

export default function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()



    fire.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.error('Incorrect username or password')
      })
  }



  return (
    <div className="container_form-login_newUser">
      <h1>Log In</h1>

      <form onSubmit={handleSubmit} className="form-login_newUser">
        <input type="text" onChange={({ target }) => setEmail(target.value)} placeholder="Email" />
        <input type="password" onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
        <div className="container-buttons_form-login_newUser">
          <button type="submit">Log In</button>
          <Link to="/new-user" className="button_form-login_newUser">Create Account</Link>
        </div>
      </form>
    </div>
  )
}

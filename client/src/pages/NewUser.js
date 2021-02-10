import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Firebase Authentication
import fire from '../utils/fire'

export default function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordVerify, setPasswordVerify] = useState()

  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (password !== passwordVerify) {
      console.log("password is wrong")
      return
    }

    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential.user);
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        // ..
      });
    console.log("email", email)
    console.log("password", password)
    console.log("passwordVerify", passwordVerify)

  }



  return (
    <div className="container_form-login_newUser">
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit} className="form-login_newUser">
        <input type="text" onChange={({ target }) => setEmail(target.value)} placeholder="Email" />
        <input type="password" onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
        <input type="password" onChange={({ target }) => setPasswordVerify(target.value)} placeholder="Password" />
        <div className="container-buttons_form-login_newUser">
          <button type="submit">Create Account</button>
          <Link to="/" className="button_form-login_newUser">Log In</Link>
        </div>
      </form>
    </div>
  )
}

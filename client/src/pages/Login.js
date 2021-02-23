import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

// Firebase Authentication
import fire from '../utils/fire'

export default function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  const { login } = useAuth()


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setErrorMessage('')
      setLoading(true)
      await login(email, password)


    } catch (error) {
      console.error(error)
      setErrorMessage(error.message)
      setShowError(true)
      setLoading(false)
      return
    }

    history.push("/")
  }

  return (
    <div className="container_form-login_newUser">
      <h1>Log In</h1>

      <form onSubmit={handleSubmit} className="form-login_newUser">
        {
          (showError &&
            (errorMessage.length >= 1) && <Alert variant="danger" onClose={() => setShowError(false)} dismissible>{errorMessage}</Alert>


          )

        }
        <input type="text" onChange={({ target }) => setEmail(target.value)} placeholder="Email" />
        <input type="password" onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
        <div className="container-buttons_form-login_newUser">
          <button disabled={loading} type="submit">Log In</button>
          <Link to="/new-user" className="button_form-login_newUser">Create Account</Link>
        </div>
      </form>
    </div>
  )
}

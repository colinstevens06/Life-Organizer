import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordVerify, setPasswordVerify] = useState()
  const [error, setError] = useState()
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false)

  // importing the signUp function from my auth section
  const { signUp } = useAuth()
  const history = useHistory()



  async function handleSubmit(e) {
    e.preventDefault()

    if (password !== passwordVerify) {
      setShowError(true)
      return setError("Passwords do not match")
    }

    try {
      setError('')
      setLoading(true)
      await signUp(email, password)
    } catch (error) {
      setError(error.message)
      setShowError(true)
      setLoading(false)
      return
    }

    history.push("/")
  }

  const closeAlert = () => {
    setShowError(false)
    setError('')
  }

  return (
    <div className="container_form-login_newUser">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit} className="form-login_newUser">
        {showError && <Alert variant="danger" onClose={closeAlert} dismissible>{error}</Alert>}
        <input type="text" onChange={({ target }) => setEmail(target.value)} placeholder="Email" />
        <input type="password" onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
        <input type="password" onChange={({ target }) => setPasswordVerify(target.value)} placeholder="Password" />
        <div className="container-buttons_form-login_newUser">
          <button disabled={loading} type="submit">Create Account</button>
        </div>
        <hr />
        <Link to="/" className="button_form-login_newUser">I already have an account</Link>

      </form>
    </div >
  )
}

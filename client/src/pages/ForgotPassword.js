import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'




export default function ForgotPassword() {

  const [email, setEmail] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false)

  const { forgotPassword } = useAuth()


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setErrorMessage('')
      setLoading(true)
      await forgotPassword(email).then(function () {
        setShowSuccess(true)
      })


    } catch (error) {
      setErrorMessage(error.message)
      setShowError(true)
      setLoading(false)

      return
    }

  }


  return (
    <div className="container_form-login_newUser">
      <h1>Reset Password</h1>

      <form onSubmit={handleSubmit} className="form-login_newUser">
        {
          (showError &&
            (errorMessage.length >= 1) && <Alert variant="danger" onClose={() => setShowError(false)} dismissible>{errorMessage}</Alert>
          )

        }
        <input type="text" onChange={({ target }) => setEmail(target.value)} placeholder="Email" />
        <div className="container-buttons_form-login_newUser">
          <button disabled={loading} type="submit">Reset Password</button>
        </div>
        {
          showSuccess &&
          <div className="text_forgot-password-success">Success!<br />Check your email for next steps.</div>
        }
        <hr className="login-hr" style={{ marginBottom: 24 }} />
        <Link to="/login" className="button_form-login_newUser">Cancel</Link>

      </form>
    </div>
  )
}

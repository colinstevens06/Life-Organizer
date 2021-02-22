import React, { useContext, useState, useEffect } from 'react'
import fire from '../utils/fire'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signUp(email, password) {
    return fire.auth().createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return fire.auth().signInWithEmailAndPassword(email, password)
  }

  function logOut() {
    return fire.auth().signOut()
  }

  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])


  const value = {
    currentUser,
    signUp,
    login,
    logOut
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

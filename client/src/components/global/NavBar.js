import React from 'react'
import { Link } from "react-router-dom";

// importing image
import logo from '../../assets/icons/life-organizer-logo-white-background.png'

// authentication
import { useAuth } from "../../context/AuthContext"

export default function NavBar() {
  const { currentUser, logOut } = useAuth()



  return (
    <div className="container_nav-bar">
      <Link to="/">
        <img src={logo} className="nav-logo" alt="Life Organizer logo" />
      </Link>
      <Link to="/">
        <div className="nav-brand-header">Life Organizer</div>
      </Link>
      {currentUser &&
        <div className="right-side_nav-bar" onClick={logOut}>
          Log Out
      </div>

      }
    </div>
  )
}

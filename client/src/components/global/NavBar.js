import React from 'react'
import { Link } from "react-router-dom";

// importing image
import logo from '../../assets/icons/life-organizer-logo-white-background.png'

export default function NavBar() {
  return (
    <div className="container_nav-bar">
      <Link to="/">
        <img src={logo} className="nav-logo" alt="Life Organizer logo" />
      </Link>
      <Link to="/">
        <div className="nav-brand-header">Life Organizer</div>
      </Link>
    </div>
  )
}

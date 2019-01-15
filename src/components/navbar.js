import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => (
  <div className="navbar">
    <div className="navbar-links">
      <Link to='/'> Home </Link>
      <Link to='/profile'> My Profile </Link>
      <Link to='/recipes'> Find Recipes </Link>
      <Link to='/recipe/new'> Add a Recipe </Link>
    </div>
    <div className="navbar-icon">
    </div>
  </div>
)

export default NavBar

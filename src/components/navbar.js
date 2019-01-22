import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => (
  <div className="navbar">
    <div className="navbar-links">
      <Link to='/'> HOME </Link>
      <Link to='/profile'> PROFILE </Link>
      <Link to='/recipes'> FIND RECIPES </Link>
      <Link to='/recipe/new'> NEW RECIPE </Link>
    </div>
    <div className="navbar-icon">
    </div>
  </div>
)

export default NavBar

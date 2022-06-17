import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../Logo/Logo'

const MainNavigation = () => {
  return (
    <NavLink to='/splash' tag={Link}>
      <Logo />
    </NavLink>
  )
}

export default MainNavigation

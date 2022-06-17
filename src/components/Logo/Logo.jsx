import React from 'react'
import { LogoImg } from './Logo.elements'
import logoImg from '../../assets/logo/logo.png'

const Logo = () => {
  return (
    <>
      <LogoImg src={logoImg} alt='logo' />
    </>
  )
}

export default Logo

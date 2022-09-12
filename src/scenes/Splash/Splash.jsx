import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import logo from '../../assets/logo.png'
import s from './Splash.module.scss'

const Splash = (props) => {
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      setRedirect(true)
    }, 1000)

    console.log(id)
    
    return () => {
      clearTimeout(id)
    }
  }, [])

  const AnimatedSplash = () => {
    return (
      <div className={s.logo_wrapper} style={{ backgroundColor: 'black' }}>
        <div className={s.screen}>
          <img src={logo} alt='logo' className={s.logo} />
        </div>
      </div>
    )
  }

  console.log(redirect)

  return redirect ? <Redirect to='/' /> : <AnimatedSplash />
}

export default Splash

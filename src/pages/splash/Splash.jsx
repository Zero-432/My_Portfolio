import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'

const Splash = (props) => {
  const [navigate, setNavigate] = useState(false)

  useEffect(() => {
    props.id = setTimeout(() => {
      setNavigate(true)
    }, 1000)

    return () => {
      clearTimeout(props.id)
    }
  }, [])

  const AnimatedSplash = (props) => {
    return (
      <div className='logo_wrapper'>
        <div className='screen'>
          <Logo />
        </div>
      </div>
    )
  }

  return navigate ? <Navigate to='/home' /> : <AnimatedSplash />
}

export default Splash
